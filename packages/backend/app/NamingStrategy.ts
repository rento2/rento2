import { string } from '@ioc:Adonis/Core/Helpers'
import { SnakeCaseNamingStrategy, BaseModel } from '@ioc:Adonis/Lucid/Orm'

class CamelCaseNamingStrategy extends SnakeCaseNamingStrategy {
  public relationForeignKey (
    relation: string,
    model: typeof BaseModel,
    relatedModel: typeof BaseModel
  ): string {
    if (relation === 'belongsTo') {
      return string.camelCase(`${relatedModel.primaryKey}`)
    }

    return string.camelCase(`${model.primaryKey}`)
  }
}

export default CamelCaseNamingStrategy
