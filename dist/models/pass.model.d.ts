import { Entity } from '@loopback/repository';
import { LiftType } from '../graphql-types/lift';
export declare class Pass extends Entity {
    id: string;
    title?: string;
    liftTypes: LiftType;
    constructor(data?: Partial<Pass>);
}
export interface PassRelations {
}
export declare type PassWithRelations = Pass & PassRelations;
