import { FC } from 'react'
import { List, Datagrid, TextField, ListProps, EditButton, DateField, TopToolbar, DeleteButton, ReferenceField, FunctionField } from 'react-admin'

const Toolbar = (): JSX.Element => (
  <TopToolbar>
    <DeleteButton />
  </TopToolbar>
)

const ReviewList: FC<ListProps> = (props) => {
  return (
    <List actions={ <Toolbar /> }
      { ...props }
    >
      <Datagrid>
        <TextField source='id' />
        <ReferenceField label="Квартира"
          reference="apartments"
          source="apartment.id"
        >
          <TextField source="name" />
        </ReferenceField>
        <TextField label='Автор'
          source='author'
        />
        <FunctionField
          label="Ремонт"
          render={(record: any) => `${record.repairs}/5.0` }
        />
        <FunctionField
          label="Чистота"
          render={(record: any) => `${record.purity}/5.0` }
        />
        <FunctionField
          label="Локация"
          render={(record: any) => `${record.location}/5.0` }
        />
        <FunctionField
          label="Цена-качество"
          render={(record: any) => `${record.priceQuality}/5.0` }
        />
        <DateField showTime
          label="Дата"
          source='createdAt'
        />
        +
        {' '}
        <EditButton />
      </Datagrid>
    </List>
  )
}

export default ReviewList
