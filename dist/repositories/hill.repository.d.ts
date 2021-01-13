import { LifeCycleObserver } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { HillsDataSource } from '../datasources/hills.datasource';
import { Hill } from '../graphql-types/hill';
export declare class HillRepository extends DefaultCrudRepository<Hill, typeof Hill.prototype.id, {}> implements LifeCycleObserver {
    private static idCounter;
    private sampleHills;
    constructor(dataSource: HillsDataSource);
    start(): Promise<void>;
    stop(): void;
    getAll(): Promise<Hill[]>;
    getOne(id: string): Promise<Hill>;
    findIndex(hill: Hill): Promise<number>;
    private getId;
}
