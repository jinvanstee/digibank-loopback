import {DefaultCrudRepository} from '@loopback/repository';
import {Getpapers, GetpapersRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GetpapersRepository extends DefaultCrudRepository<
  Getpapers,
//  typeof Getpapers.prototype.issuer,
  GetpapersRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Getpapers, dataSource);
  }
}
