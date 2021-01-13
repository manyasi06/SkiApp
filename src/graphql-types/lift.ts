import { field, ID, Int, objectType } from '@loopback/graphql'
import { Entity, model, property } from '@loopback/repository'

export enum LiftType {
  Gondola = 'gondola',
  TBar = 't-bar',
  Rope = 'rope-pull',
  Chair = 'chair',
  ExpressChair = 'express',
}

@objectType({ description: 'Object representing a lift on a ski hill' })
@model({ settings: { strict: false } })
export class Lift extends Entity {
  @field((type) => ID)
  @property({ id: true })
  id: string

  @field()
  @property()
  title: string

  @field()
  @property()
  type: LiftType

  @field()
  @property()
  skiersPerUnit: number

  @field((type) => Int)
  protected numberInCollection: number
}
