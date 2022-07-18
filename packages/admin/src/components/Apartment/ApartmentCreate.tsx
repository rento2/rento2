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
      <SelectInput choices={[
        { id: 'short', name: 'Краткосрочная аренда' },
        { id: 'long', name: 'Долгосрочная аренда' },
        { id: 'all', name: 'Любой срок' }
      ]}
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
      <SelectInput choices={[
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
      <TextInput source='district' />
      <TextInput source='sellingPoint' />
      <NumberInput source='geoCoordinateX' />
      <NumberInput source='geoCoordinateY' />
      <TextInput source='subwayStation' />
    </SimpleForm>
  </Create>
)

export default ApartmentCreate
