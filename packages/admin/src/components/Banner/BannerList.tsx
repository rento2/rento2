import { FC } from 'react'
import { List, Datagrid, TextField, ListProps, EditButton, DateField, CreateButton, TopToolbar, DeleteButton } from 'react-admin'

const Toolbar = () => (
  <TopToolbar>
      <CreateButton />
      <DeleteButton />
  </TopToolbar>
);

const BannerList: FC<ListProps> = (props) => {
  return (
    <List actions={<Toolbar />} { ...props }>
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <TextField source='name' />
        <DateField source='createdAt' showTime />
+       <EditButton />
      </Datagrid>
    </List>
  )
}

export default BannerList
