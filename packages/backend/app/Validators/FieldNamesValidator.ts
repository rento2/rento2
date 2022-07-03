import { validator } from '@ioc:Adonis/Core/Validator'
import { Apartment } from 'App/Models'

validator.rule('fieldNames', (value: string, _, options) => {
  if (value.includes(' ')) {
    options.errorReporter.report(
      options.pointer,
      'fieldNames',
      `Incorrect request '${value}' in validation`,
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
          `Incorrect field name '${trimItem}' in validation`,
          options.arrayExpressionPointer
        )
      }
    })
  }
})
