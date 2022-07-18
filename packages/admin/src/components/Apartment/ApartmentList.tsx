import { FC } from 'react'
import { List, Datagrid, TextField, ListProps, FunctionField, NumberField, EditButton } from 'react-admin'

const Apartments: FC<ListProps> = (props) => {
  return (
    <List { ...props }>
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <FunctionField
          label="Срок"
          render={(record: any) => record.type === 'short' ? 'краткосрок' : 'долгосрок'}
        />
        <TextField label="Название"
          source='name'
        />

        <NumberField label="Цена"
          locales="ru-RU"
          options={{ style: 'currency', currency: 'RUB' }}
          source="price"
        />
        <NumberField label="Цена в месяц"
          locales="ru-RU"
          options={{ style: 'currency', currency: 'RUB' }}
          source="pricePerMonth"
        />
        <EditButton />
      </Datagrid>
    </List>
  )
}

export default Apartments
