import { FC } from 'react'
import {
  Edit,
  TextInput,
  ListProps,
  TabbedForm,
  FormTab,
  DateInput,
  BooleanInput
} from 'react-admin'

const ApartmentEdit: FC<ListProps> = props => (
  <Edit { ...props }>
    <TabbedForm>
      <FormTab label="General info">
        <TextInput source='type' />
        <TextInput source='name' />
        <TextInput source='latin_name' />
        <TextInput source='adm_area' />
        <TextInput source='area' />
        <TextInput source='bnovo_id' />
      </FormTab>
      <FormTab label="Dates">
        <DateInput source='check_in_end' />
        <DateInput source='check_in_start' />
        <DateInput source='check_out_end' />
        <TextInput source='commission' />
      </FormTab>
      <FormTab label="Description and location">
        <TextInput source='description' />
        <TextInput source='district' />
        <TextInput source='geo_coordinate_x' />
        <TextInput source='geo_coordinate_y' />
      </FormTab>
      <FormTab label="Parameters">
        <BooleanInput source='is_active' />
        <TextInput source='kitchen_area' />
        <TextInput source='max_adults' />
        <TextInput source='max_children' />
        <BooleanInput source='pets_allowed' />
        <BooleanInput source='partying_allowed' />
        <BooleanInput source='smoking_allowed' />
        <BooleanInput source='children_allowed' />
        <TextInput source='rooms_num' />
      </FormTab>
      <FormTab label="Price">
        <TextInput source='price' />
        <TextInput source='price_per_month' />
        <TextInput source='discount' />
      </FormTab>
      <FormTab label="Conditions of payment">
        <TextInput source='security_deposit_long' />
        <TextInput source='security_deposit_short' />
        <TextInput source='selling_point' />
        <TextInput source='storey' />
      </FormTab>
      <FormTab label="Transport accessibility and rating">
        <TextInput source='subway_station' />
        <TextInput source='time_to_subway_by_foot' />
        <TextInput source='time_to_subway_by_vehicle' />
        <TextInput source='distance_from_center' />
        <TextInput source='total_rating' />
        <TextInput source='total_storeys' />
        <TextInput source='utility_bills' />
      </FormTab>
    </TabbedForm>
  </Edit>
)

export default ApartmentEdit
