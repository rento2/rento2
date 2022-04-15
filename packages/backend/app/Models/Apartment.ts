import {
  HasMany,
  BaseModel,
  column,
  hasMany,
  ManyToMany,
  manyToMany,
} from "@ioc:Adonis/Lucid/Orm";
import Photo from "App/Models/Photo";

import { DateTime } from "luxon";
import Accommodation from "App/Models/Accommodation";
import { AdminDistrictsOfMoscow } from "../../common/enums/AdminDistrictsOfMoscow";
import Service from "./Service";
import Term from "../../common/enums/Term";
import Banner from "./Banner";
import Order from "./Order";
import SleepingPlace from "./SleepingPlace";

export default class Apartment extends BaseModel {
  @column({ isPrimary: true })
  public id!: number;

  @manyToMany(() => Service, {
    pivotTable: "services_to_apartments",
    pivotTimestamps: true,
  })
  public services!: ManyToMany<typeof Service>;

  @manyToMany(() => Banner, {
    pivotTable: "banners_to_apartments",
    pivotTimestamps: true,
  })
  public banners!: ManyToMany<typeof Banner>;

  @hasMany(() => Order)
  public orders!: HasMany<typeof Order>;

  @column()
  public type!: Term;

  @column()
  public isActive!: boolean;

  @column()
  public name!: string;

  @column()
  public latinName!: string;

  @column()
  public description!: string;

  @column()
  public bnovoId!: number;

  @column()
  public price!: number;

  @column()
  public pricePerMonth!: number;

  @column()
  public discount!: number;

  @column()
  public commission!: number;

  @column()
  public utilityBills!: number;

  @column()
  public securityDepositShort!: number;

  @column()
  public securityDepositLong!: number;

  @column()
  public roomsNum!: number;

  @column()
  public storey!: number;

  @column()
  public totalStoreys!: number;

  @column()
  public area!: number;

  @column()
  public kitchenArea!: number;

  @column()
  public distanceFromCenter!: number;

  @column()
  public admArea!: AdminDistrictsOfMoscow;

  @column()
  public district!: string;

  @column()
  public sellingPoint!: string;

  @column()
  public geoCoordinateX!: string;

  @column()
  public geoCoordinateY!: string;

  @column()
  public subwayStation!: string;

  @column()
  public subwayLine!: string;

  @column()
  public timeToSubway!: number;

  @column()
  public repairs!: number;

  @column()
  public purity!: number;

  @column()
  public location!: number;

  @column()
  public priceQuality!: number;

  @column()
  public totalRating!: number;

  @column()
  public checkInStart!: DateTime;

  @column()
  public checkInEnd!: DateTime;

  @column()
  public checkOutEnd!: DateTime;

  @column()
  public smokingAllowed!: boolean;

  @column()
  public partyingAllowed!: boolean;

  @column()
  public childrenAllowed!: boolean;

  @column()
  public petsAllowed!: boolean;

  @column()
  public maxAdults!: number;

  @column()
  public maxChildren!: number;

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime;

  @manyToMany(() => Accommodation, {
    pivotTimestamps: true,
  })
  public accommodations!: ManyToMany<typeof Accommodation>;

  @hasMany(() => Photo, {})
  public photos!: HasMany<typeof Photo>;

  @manyToMany(() => SleepingPlace, {
    pivotColumns: ["number"],
    pivotTable: "sleeping_places_to_apartments",
    pivotTimestamps: true,
  })
  public sleepingPlaces!: ManyToMany<typeof SleepingPlace>;
}
