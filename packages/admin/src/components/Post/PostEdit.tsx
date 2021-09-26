import { FC } from 'react'
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  ListProps
} from 'react-admin'

import { IGenericObj } from 'common/interfaces'

const PostTitle: FC<IGenericObj> = ({ record }) => {
  return <span>Post {record != null ? `"${record.title as string}"` : ''}</span>
}

const PostEdit: FC<ListProps> = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source='id' />
      <ReferenceInput source='userId' reference='users'>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <TextInput source='title' />
      <TextInput multiline source='body' />
    </SimpleForm>
  </Edit>
)

export default PostEdit
