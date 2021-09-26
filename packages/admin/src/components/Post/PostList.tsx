import { FC } from 'react'
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  ListProps,
  EditButton,
  ReferenceInput,
  SelectInput,
  TextInput
} from 'react-admin'

const postFilters = [
  /* eslint-disable react/jsx-key */
  <TextInput source='q' label='Search' alwaysOn />,
  <ReferenceInput source='userId' label='User' reference='users' allowEmpty>
    <SelectInput optionText='name' />
  </ReferenceInput>
  /* eslint-enable react/jsx-key */
]

const PostList: FC<ListProps> = props => (
  <List filters={postFilters} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <ReferenceField source='userId' reference='users'>
        <TextField source='name' />
      </ReferenceField>
      <TextField source='title' />
      <EditButton />
    </Datagrid>
  </List>
)

export default PostList
