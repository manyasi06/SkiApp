import { Entity } from '@loopback/repository';
import { Lift } from './lift';
export declare class Hill extends Entity {
    id: string;
    title: string;
    get specification(): string | undefined;
    description?: string;
    lifts: Lift[];
    protected numberInCollection: number;
    numLifts: number;
}
