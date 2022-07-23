/* eslint-disable */
export interface Accommodation {
id: any;
name: any;
nameEn: any;
createdAt: any;
updatedAt: any;
}

export interface Apartment {
id: any;
type: any;
isActive: any;
name: any;
latinName: any;
description: any;
bnovoId: any;
inparsId: any;
price: any;
pricePerMonth: any;
discount: any;
commission: any;
utilityBills: any;
securityDepositShort: any;
securityDepositLong: any;
roomsNum: any;
storey: any;
totalStoreys: any;
area: any;
kitchenArea: any;
distanceFromCenter: any;
admArea: any;
district: any;
sellingPoint: any;
geoCoordinateX: any;
geoCoordinateY: any;
metroAvailabilityByFoot: any;
metroAvailabilityByVehicle: any;
repairs: any;
purity: any;
location: any;
priceQuality: any;
totalRating: any;
checkInStart: any;
checkInEnd: any;
checkOutEnd: any;
smokingAllowed: any;
partyingAllowed: any;
childrenAllowed: any;
petsAllowed: any;
isPopular: any;
isRentoChoose: any;
maxAdults: any;
maxChildren: any;
createdAt: any;
updatedAt: any;
}

export interface Banner {
id: any;
name: any;
createdAt: any;
updatedAt: any;
}

export interface MetroLine {
id: any;
name: any;
color: any;
createdAt: any;
updatedAt: any;
}

export interface MetroStation {
id: any;
name: any;
isCentral: any;
metroLineId: any;
lat: any;
lon: any;
createdAt: any;
updatedAt: any;
}

export interface Order {
id: any;
apartmentId: any;
name: any;
email: any;
phone: any;
dateFrom: any;
dateTo: any;
fixedPrice: any;
fixedTotalPrice: any;
nightsNumber: any;
paymentType: any;
prices: any;
adults: any;
children: any;
babies: any;
pets: any;
paidPart: any;
number: any;
createdAt: any;
updatedAt: any;
}

export interface Photo {
id: any;
apartmentId: any;
link: any;
path: any;
createdAt: any;
updatedAt: any;
}

export interface Review {
id: any;
apartmentId: any;
author: any;
avatar: any;
repairs: any;
purity: any;
location: any;
priceQuality: any;
comment: any;
isApproved: any;
createdAt: any;
updatedAt: any;
}

export interface Service {
id: any;
type: any;
name: any;
createdAt: any;
updatedAt: any;
}

export interface SleepingPlace {
id: any;
name: any;
type: any;
size: any;
number: any;
createdAt: any;
updatedAt: any;
}

export interface Task {
id: any;
status: any;
handler: any;
params: any;
info: any;
error: any;
startAt: any;
createdAt: any;
updatedAt: any;
}

export interface User {
id: any;
email: any;
createdAt: any;
updatedAt: any;
}

