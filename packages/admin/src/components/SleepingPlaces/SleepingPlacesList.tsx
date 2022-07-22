import { FC } from 'react'
import { List, Datagrid, TextField, ListProps, EditButton, DateField, CreateButton, TopToolbar, DeleteButton } from 'react-admin'

const Toolbar = (): JSX.Element => (
  <TopToolbar>
    <CreateButton />
    <DeleteButton />
  </TopToolbar>
)

const SleepingPlacesList: FC<ListProps> = (props) => {
  return (
    <List actions={ <Toolbar /> }
      { ...props }
    >
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <TextField source='name' />
        <TextField source='type' />
        <TextField source='size' />
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

export default SleepingPlacesList
