import { FC } from 'react'
import {
  Create,
  TextInput,
  ListProps,
  TabbedForm,
  FormTab
} from 'react-admin'

const BannerCreate: FC<ListProps> = props => (
  <Create { ...props }>
    <TabbedForm>
      <FormTab label="Step 1">
        <TextInput source='name' />
      </FormTab>
    </TabbedForm>
  </Create>
)

export default BannerCreate
