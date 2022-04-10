import { FC } from 'react'
import {
  Create,
  TextInput,
  ListProps,
  TabbedForm,
  FormTab
} from 'react-admin'

const ApartmentCreate: FC<ListProps> = props => (
  <Create { ...props }>
    <TabbedForm>
      <FormTab label="Step 1">
        <TextInput source='type' />
        <TextInput source='name' />
        <TextInput source='latin_name' />
        <TextInput source='adm_area' />
        <TextInput source='area' />
        <TextInput source='bnovo_id' />
      </FormTab>
      <FormTab label="Step 2">
        <TextInput source='check_in_end' />
        <TextInput source='check_in_start' />
        <TextInput source='check_out_end' />
        <TextInput source='children_allowed' />
        <TextInput source='commission' />
        <TextInput source='bnovo_id' />
      </FormTab>
      <FormTab label="Step 3">
        <TextInput source='description' />
        <TextInput source='discount' />
        <TextInput source='distance_from_center' />
        <TextInput source='district' />
        <TextInput source='geo_coordinate_x' />
        <TextInput source='geo_coordinate_y' />
      </FormTab>
      <FormTab label="Step 4">
        <TextInput source='is_active' />
        <TextInput source='kitchen_area' />
        <TextInput source='location' />
        <TextInput source='max_adults' />
        <TextInput source='max_children' />
        <TextInput source='partying_allowed' />
      </FormTab>
      <FormTab label="Step 5">
        <TextInput source='pets_allowed' />
        <TextInput source='price' />
        <TextInput source='price_per_month' />
        <TextInput source='price_quality' />
        <TextInput source='purity' />
        <TextInput source='repairs' />
      </FormTab>
      <FormTab label="Step 6">
        <TextInput source='rooms_num' />
        <TextInput source='security_deposit_long' />
        <TextInput source='security_deposit_short' />
        <TextInput source='selling_point' />
        <TextInput source='smoking_allowed' />
        <TextInput source='storey' />
      </FormTab>
      <FormTab label="Step 7">
        <TextInput source='subway_station' />
        <TextInput source='time_to_subway' />
        <TextInput source='total_rating' />
        <TextInput source='total_storeys' />
        <TextInput source='utility_bills' />
      </FormTab>
    </TabbedForm>
  </Create>
)

export default ApartmentCreate
