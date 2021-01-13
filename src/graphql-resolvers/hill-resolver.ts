import { inject } from '@loopback/core'
import {
  arg,
  authorized,
  fieldResolver,
  GraphQLBindings,
  query,
  resolver,
  ResolverData,
  ResolverInterface,
  root,
  subscription,
} from '@loopback/graphql'
import { repository } from '@loopback/repository'
import { Hill } from '../graphql-types/hill'
import { HillRepository } from '../repositories'

@resolver((of) => Hill)
export class HillResolver implements ResolverInterface<Hill> {
  constructor(
    // constructor injection of service
    @repository('HillRepository')
    private readonly hillRepo: HillRepository,
    // @service(HillService) private readonly hillService: HillService,
    // It's possible to inject the resolver data
    @inject(GraphQLBindings.RESOLVER_DATA) private resolverData: ResolverData,
  ) {}

  @query((returns) => Hill, { nullable: true })
  @authorized('owner')
  async hill(@arg('hillId') hillId: string) {
    return this.hillRepo.getOne(hillId)
  }

  @query((returns) => [Hill])
  async hills(): Promise<Hill[]> {
    return this.hillRepo.getAll()
  }

  @subscription((returns) => Hill, { topics: 'hillCreated' })
  async hillCreated(@root() hill: Hill) {
    return hill
  }

  @fieldResolver()
  async numberInCollection(@root() hill: Hill): Promise<number> {
    const index = await this.hillRepo.findIndex(hill)
    return index + 1
  }

  @fieldResolver()
  async numLifts(@root() hill: Hill): Promise<number> {
    return hill.lifts.length
  }
}
