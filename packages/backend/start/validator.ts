import { validator } from '@ioc:Adonis/Core/Validator'
import { Apartment } from 'App/Models'

validator.rule('fieldNames', (value: string, _, options) => {
  const values = value.split(',')

  if (options.field) {
    values.forEach((item) => {
      const trimItem = item.trim()
      console.log(`*${item}*`)
      console.log(`*${trimItem}*`)
      if (!Apartment.$hasColumn(trimItem)) {
        console.log(trimItem)
        options.errorReporter.report(
          options.pointer,
          'fieldNames',
          `Incorrect field name '${trimItem}' in validation`,
          options.arrayExpressionPointer
        )
      }
    })
  }
})
