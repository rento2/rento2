import { FC } from 'react'
import {
  Edit,
  SimpleForm,
  TextInput,
  ListProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  NumberInput
} from 'react-admin'

const MetroStationEdit: FC<ListProps> = props => (
  <Edit { ...props }>
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
  </Edit>
)

export default MetroStationEdit
