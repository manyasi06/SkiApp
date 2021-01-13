import {Entity, model, property} from '@loopback/repository';
import { LiftType } from '../graphql-types/lift';

@model()
export class Pass extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'any',
  })
  liftTypes: LiftType;


  constructor(data?: Partial<Pass>) {
    super(data);
  }
}

export interface PassRelations {
  // describe navigational properties here
}

export type PassWithRelations = Pass & PassRelations;
