import { FC } from 'react'
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  ListProps
} from 'react-admin'

const PostCreate: FC<ListProps> = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source='userId' reference='users'>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <TextInput source='title' />
      <TextInput multiline source='body' />
    </SimpleForm>
  </Create>
)

export default PostCreate
