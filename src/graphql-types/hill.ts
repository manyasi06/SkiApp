import { field, ID, Int, objectType } from '@loopback/graphql'
import { Entity, model, property } from '@loopback/repository'
import { Lift } from './lift'

@objectType({ description: 'Object representing a ski hill' })
@model({ settings: { strict: false } })
export class Hill extends Entity {
  @field((type) => ID)
  @property({ id: true })
  id: string

  @field()
  @property()
  title: string

  @field((type) => String, {
    nullable: true,
    deprecationReason: 'Use `description` field instead',
  })
  get specification(): string | undefined {
    return this.description
  }

  @field({
    nullable: true,
    description: 'The Hill description',
  })
  @property()
  description?: string

  @field((type) => [Lift])
  @property({
    type: 'object',
  })
  lifts: Lift[]

  @field((type) => Int)
  protected numberInCollection: number

  @field((type) => Int)
  numLifts: number
}
