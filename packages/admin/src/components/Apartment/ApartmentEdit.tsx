import Grid from '@mui/material/Grid'
import { FC, useEffect, useState } from 'react'
import './style/filepond-styling.sass'
import {
  Edit,
  SimpleForm,
  TextInput,
  ListProps,
  NumberInput,
  BooleanInput,
  SelectInput,
  DateTimeInput,
  useDataProvider,
  SelectArrayInput,
  FormDataConsumer
} from 'react-admin'

import { FilePond } from 'react-filepond'
import { FilePondFile } from 'filepond'

const ApartmentEdit: FC<ListProps> = props => {
  const dataProvider = useDataProvider()

  const [metroStations, setMetroStations] = useState<any[]>([])
  const [accommodations, setAccommodations] = useState<any[]>([])
  const [sleepingPlaces, setSleepingPlaces] = useState<any[]>([])
  const [files, setFiles] = useState<any[]>([])

  useEffect(() => {
    dataProvider.getList('metro-stations', {
      pagination: { page: 1, perPage: 20 },
      sort: { field: 'name', order: 'asc' },
      filter: {}
    }).then(({ data }) => setMetroStations(data))

    dataProvider.getList('accommodations', {
      pagination: { page: 1, perPage: 20 },
      sort: { field: 'name', order: 'asc' },
      filter: {}
    }).then(({ data }) => setAccommodations(data))

    dataProvider.getList('sleeping-places', {
      pagination: { page: 1, perPage: 20 },
      sort: { field: 'name', order: 'asc' },
      filter: {}
    }).then(({ data }) => setSleepingPlaces(data))
  }, [dataProvider])

  const handleUploadFile = async (file: FilePondFile, apartmentId: number): Promise<void> => {
    const result = (dataProvider as any).uploadPhoto({
      file: file.source,
      apartmentId
    })

    file.setMetadata('id', result.id)
    setFiles([...files, file])
  }

  const handleDeleteFile = async (file: FilePondFile): Promise<void> => {
    dataProvider.delete('photos', {
      id: file.getMetadata()?.id
    })
  }

  return (
    <Edit { ...props }>
      <SimpleForm>

        <Grid container
          gap={5}
          justifyContent="center"
        >
          <Grid item
            md={4}
          >
            <BooleanInput label="Показывать объявление"
              source="isActive"
            />
            <BooleanInput label="Можно с детьми"
              source="childrenAllowed"
            />
            <BooleanInput label="Можно с животными"
              source="petsAllowed"
            />

            <DateTimeInput fullWidth
              source='checkInStart'
            />
            <DateTimeInput fullWidth
              source='checkInEnd'
            />
            <DateTimeInput fullWidth
              source='checkOutEnd'
            />
            <SelectInput fullWidth
              choices={[
                { id: 'short', name: 'Краткосрочная аренда' },
                { id: 'long', name: 'Долгосрочная аренда' },
                { id: 'all', name: 'Любой срок' }
              ]}
              source='type'
            />
            <NumberInput fullWidth
              source='maxAdults'
            />
            <NumberInput fullWidth
              source='maxChildren'
            />

            <hr />
            <NumberInput fullWidth
              source='price'
            />
            <NumberInput fullWidth
              source='pricePerMonth'
            />
            <NumberInput fullWidth
              source='discount'
            />
            <NumberInput fullWidth
              source='commission'
            />
            <NumberInput fullWidth
              source='utilityBills'
            />
            <NumberInput fullWidth
              source='securityDepositShort'
            />
            <NumberInput fullWidth
              source='securityDepositLong'
            />

            <hr />

            <NumberInput fullWidth
              source='bnovoId'
            />
            <NumberInput fullWidth
              source='geoCoordinateX'
            />
            <NumberInput fullWidth
              source='geoCoordinateY'
            />
            <hr />

            <SelectArrayInput
              fullWidth
              choices={metroStations.map(item => ({ id: item, name: item.name }))}
              source='metroStations'
            />
            <SelectArrayInput
              fullWidth
              choices={accommodations.map(item => ({ id: item, name: item.name }))}
              source='accomodations'
            />
            <SelectArrayInput
              fullWidth
              choices={sleepingPlaces.map(item => ({ id: { ...item, number: 1 }, name: item.name }))}
              source='sleepingPlaces'
            />
          </Grid>
          <Grid item
            md={4}
          >
            <BooleanInput label="Курение разрешено"
              source="smokingAllowed"
            />
            <BooleanInput label="Вечеринки разрешены"
              source="partyingAllowed"
            />
            <TextInput fullWidth
              source='name'
            />
            <TextInput fullWidth
              source='latinName'
            />
            <TextInput fullWidth
              multiline
              source='description'
            />

            <hr />

            <NumberInput fullWidth
              source='roomsNum'
            />
            <NumberInput fullWidth
              source='storey'
            />
            <NumberInput fullWidth
              source='totalStoreys'
            />
            <NumberInput fullWidth
              source='area'
            />
            <NumberInput fullWidth
              source='kitchenArea'
            />

            <NumberInput fullWidth
              source='repairs'
            />
            <NumberInput fullWidth
              source='purity'
            />
            <NumberInput fullWidth
              source='location'
            />
            <NumberInput fullWidth
              source='priceQuality'
            />
            <NumberInput fullWidth
              source='totalRating'
            />

            <hr />

            <NumberInput fullWidth
              source='distanceFromCenter'
            />
            <SelectInput fullWidth
              choices={[
                { id: 'central', name: 'Центр' },
                { id: 'northern', name: 'Север' },
                { id: 'north_eastern', name: 'Северо-восток' },
                { id: 'eastern', name: 'Восток' },
                { id: 'south_eastern', name: 'Юго-восток' },
                { id: 'southern', name: 'Юг' },
                { id: 'south_western', name: 'Юго-западный' },
                { id: 'western', name: 'Запад' },
                { id: 'north_western', name: 'Северо-запад' },
                { id: 'zelenograd', name: 'Зеленоград' }
              ]}
              source='admArea'
            />
            <TextInput fullWidth
              source='district'
            />
            <TextInput fullWidth
              source='sellingPoint'
            />
            <NumberInput fullWidth
              source='metroAvailabilityByFoot'
            />
            <NumberInput fullWidth
              source='metroAvailabilityByVehicle'
            />
          </Grid>
        </Grid>

        <Grid container
          justifyContent="center"
        >
          <Grid item
            md={8}
          >
            <FormDataConsumer>
              {({ formData }) => (
                <FilePond
                  allowMultiple={true}
                  files={[
                    ...formData.photos.map((v: { link: string, id: string }) => ({
                      source: v.link,
                      options: {
                        metadata: { id: v.id }
                      }
                    })),
                    ...files
                  ]}
                  imagePreviewHeight={180}
                  labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                  maxFiles={20}
                  onaddfilestart={async (file) => handleUploadFile(file, formData.id)}
                  onremovefile={async (_, file) => handleDeleteFile(file)}
                  onupdatefiles={() => {}}
                />
              )}
            </FormDataConsumer>
          </Grid>
        </Grid>

      </SimpleForm>
    </Edit>
  )
}

export default ApartmentEdit
