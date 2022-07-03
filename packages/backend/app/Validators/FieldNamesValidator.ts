import { validator } from '@ioc:Adonis/Core/Validator'
import { Apartment } from 'App/Models'

validator.rule('fieldNames', (value: string, _, options) => {
  if (value.includes(' ')) {
    options.errorReporter.report(
      options.pointer,
      'fieldNames',
      'Whitespace is not allowed in field name',
      options.arrayExpressionPointer
    )
    return
  }

  const values = value.split(',')
  if (options.field) {
    values.forEach((item) => {
      const trimItem = item.trim()
      if (!Apartment.$hasColumn(trimItem)) {
        options.errorReporter.report(
          options.pointer,
          'fieldNames',
          `Field '${trimItem}' is unavailable`,
          options.arrayExpressionPointer
        )
      }
    })
  }
})
