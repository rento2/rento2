import { Apartment } from 'App/Models'
import { IEstate } from 'App/Services/Inpars'
import { Term } from '../common/enums/Term'
import { Process } from '../common/interfaces/ITask'
import Photo from 'App/Models/Photo'

export interface ParamsInterface {
  property: IEstate
}

export default async (process: Process): Promise<Process> => {
  const { property } = process.task.params as ParamsInterface

  const apartment = (
    await Apartment.findBy('inparsId', property.id)
  ) ?? new Apartment()

  apartment.type = Term.LONG
  apartment.isActive = true
  apartment.name = property.title
  apartment.latinName = null
  apartment.description = property.text
  apartment.bnovoId = null
  apartment.inparsId = property.id
  apartment.price = null
  apartment.pricePerMonth = property.cost
  apartment.discount = 0
  apartment.commission = 0
  apartment.utilityBills = 0
  apartment.securityDepositShort = 0
  apartment.securityDepositLong = 0
  apartment.roomsNum = 0
  apartment.storey = property.floor
  apartment.totalStoreys = property.floors
  apartment.area = property.sq
  apartment.kitchenArea = 0
  apartment.distanceFromCenter = 0
  apartment.district = ''
  apartment.sellingPoint = ''
  apartment.geoCoordinateX = Number(property.lat)
  apartment.geoCoordinateY = Number(property.lng)
  apartment.repairs = 0
  apartment.purity = 0
  apartment.location = 0
  apartment.priceQuality = 0
  apartment.totalRating = 0
  apartment.checkInStart = null
  apartment.checkInEnd = null
  apartment.checkOutEnd = null
  apartment.smokingAllowed = null
  apartment.partyingAllowed = null
  apartment.childrenAllowed = null
  apartment.petsAllowed = null
  apartment.maxAdults = 0
  apartment.maxChildren = 0

  const savedApartment = await apartment.save()

  await Photo.query().where('apartmentId', savedApartment.id).delete()
  await Promise.all(
    property.images.map(async (url) => {
      return await Photo.create({
        link: url,
        path: url,
        apartmentId: savedApartment.id,
      })
    })
  )

  return process.done()
}
