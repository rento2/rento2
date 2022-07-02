declare module '@ioc:Adonis/Core/Validator' {
  interface Rules {
    fieldNames: () => Rule
  }
}
