import { DefaultCrudRepository } from '@loopback/repository';
import { Pass, PassRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class PassRepository extends DefaultCrudRepository<Pass, typeof Pass.prototype.id, PassRelations> {
    constructor(dataSource: DbDataSource);
}
