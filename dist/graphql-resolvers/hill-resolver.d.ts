import { ResolverData, ResolverInterface } from '@loopback/graphql';
import { Hill } from '../graphql-types/hill';
import { HillRepository } from '../repositories';
export declare class HillResolver implements ResolverInterface<Hill> {
    private readonly hillRepo;
    private resolverData;
    constructor(hillRepo: HillRepository, resolverData: ResolverData);
    hill(hillId: string): Promise<Hill>;
    hills(): Promise<Hill[]>;
    hillCreated(hill: Hill): Promise<Hill>;
    numberInCollection(hill: Hill): Promise<number>;
    numLifts(hill: Hill): Promise<number>;
}
