import { FC } from 'react'
import {
  Create,
  TextInput,
  ListProps,
  SimpleForm,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput
} from 'react-admin'

const MetroStationCreate: FC<ListProps> = props => (
  <Create { ...props }>
    <SimpleForm>
      <BooleanInput label='Является центральной'
        source='isCentral'
      />
      <TextInput label='Название станции'
        source='name'
      />
      <ReferenceInput label="Ветка метро"
        reference="metro-lines"
        source="metroLineId"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>

      <NumberInput label='Широта(lat)'
        source='lat'
      />

      <NumberInput label='Долгота(lon)'
        source='lon'
      />
    </SimpleForm>
  </Create>
)

export default MetroStationCreate
