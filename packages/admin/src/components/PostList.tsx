import { FC } from 'react'
import { List, Datagrid, TextField, ReferenceField, ListProps, EditButton } from 'react-admin'

const PostList: FC<ListProps> = props => (
  <List {...props}>
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
