import { FC } from 'react'
import { List, Datagrid, TextField, ListProps, EditButton, DateField, CreateButton, TopToolbar, DeleteButton } from 'react-admin'

const Toolbar = (): JSX.Element => (
  <TopToolbar>
    <CreateButton />
    <DeleteButton />
  </TopToolbar>
)

const AccommodationsList: FC<ListProps> = (props) => {
  return (
    <List actions={ <Toolbar /> }
      { ...props }
    >
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <TextField source='type' />
        <TextField source='name_en' />
        <DateField showTime
          source='createdAt'
        />
        +
        {' '}
        <EditButton />
      </Datagrid>
    </List>
  )
}

export default AccommodationsList
