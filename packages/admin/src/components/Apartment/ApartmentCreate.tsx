import { AdminDistrictsOfMoscow } from 'common/enums/AdminDistrictsOfMoscow'
import Term from 'common/enums/Term'
import { FC } from 'react'
import {
  Create,
  TextInput,
  ListProps,
  NumberInput,
  SimpleForm,
  BooleanInput,
  SelectInput
} from 'react-admin'

const ApartmentCreate: FC<ListProps> = props => (
  <Create { ...props }>
    <SimpleForm>
      <SelectInput
        choices={Object.entries(Term).map(([id, name]) => ({ id, name }))}
        source='type'
      />
      <BooleanInput label="Показывать пользователям"
        source="isActive"
      />
      <TextInput source='name' />
      <TextInput source='latinName' />
      <TextInput source='description' />
      <NumberInput source='bnovoId' />
      <NumberInput source='price' />
      <NumberInput source='pricePerMonth' />
      <NumberInput source='discount' />
      <NumberInput source='commission' />
      <NumberInput source='utilityBills' />
      <NumberInput source='securityDepositShort' />
      <NumberInput source='securityDepositLong' />
      <NumberInput source='rooms_num' />
      <NumberInput source='storey' />
      <NumberInput source='totalStoreys' />
      <NumberInput source='area' />
      <NumberInput source='kitchenArea' />
      <NumberInput source='distanceFromCenter' />
      <SelectInput
        choices={Object.entries(AdminDistrictsOfMoscow).map(([id, name]) => ({ id, name }))}
        source='admArea'
      />
      <TextInput source='district' />
      <TextInput source='sellingPoint' />
      <NumberInput source='geoCoordinateX' />
      <NumberInput source='geoCoordinateY' />
      <TextInput source='subwayStation' />
    </SimpleForm>
  </Create>
)

export default ApartmentCreate
