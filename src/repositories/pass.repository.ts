import {DefaultCrudRepository} from '@loopback/repository';
import {Pass, PassRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PassRepository extends DefaultCrudRepository<
  Pass,
  typeof Pass.prototype.id,
  PassRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Pass, dataSource);
  }
}
