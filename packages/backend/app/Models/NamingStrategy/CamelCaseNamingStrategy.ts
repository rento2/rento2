import { string } from '@ioc:Adonis/Core/Helpers'
import { SnakeCaseNamingStrategy, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class CamelCaseNamingStrategy extends SnakeCaseNamingStrategy {
  public serializedName (_model: typeof BaseModel, propertyName: string): string {
    return string.camelCase(propertyName)
  }
}
