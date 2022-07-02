import { validator } from '@ioc:Adonis/Core/Validator'
import { Apartment } from 'App/Models'

validator.rule('fieldNames', (value: string[], _, options) => {
  if (!Array.isArray(value)) {
    return
  }

  if (options.field) {
    value.forEach((item) => {
      if (!Apartment.$hasColumn(item)) {
        options.errorReporter.report(
          options.pointer,
          'fieldNames',
          'fieldNames validation failed',
          options.arrayExpressionPointer
        )
      }
    })
  }
})
