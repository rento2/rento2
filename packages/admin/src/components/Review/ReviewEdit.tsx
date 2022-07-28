import { FC } from 'react'
import {
  Edit,
  SimpleForm,
  TextInput,
  ListProps,
  NumberInput,
  BooleanInput
} from 'react-admin'

const ReviewEdit: FC<ListProps> = props => (
  <Edit { ...props }>
    <SimpleForm>
      <BooleanInput
        label='Одобрено'
        source='isApproved'
      />

      <TextInput label='Автор'
        source='author'
      />

      <TextInput multiline
        label='Комментарий'
        source='comment'
      />

      <NumberInput label='Ремонт'
        max={5}
        min={0}
        source='repairs'
      />

      <NumberInput label='Чистота'
        max={5}
        min={0}
        source='purity'
      />

      <NumberInput label='Локация'
        max={5}
        min={0}
        source='location'
      />
      <NumberInput label='Цена-качество'
        max={5}
        min={0}
        source='priceQuality'
      />
    </SimpleForm>
  </Edit>
)

export default ReviewEdit
