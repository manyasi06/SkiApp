import {
  BindingScope,
  ContextTags,
  inject,
  injectable,
  LifeCycleObserver,
  lifeCycleObserver,
} from '@loopback/core'
import { DefaultCrudRepository, RepositoryBindings } from '@loopback/repository'
import { HillsDataSource } from '../datasources/hills.datasource'
import { Hill } from '../graphql-types/hill'

@injectable({
  scope: BindingScope.SINGLETON,
  tags: { [ContextTags.NAMESPACE]: RepositoryBindings.REPOSITORIES },
})
@lifeCycleObserver('repository')
export class HillRepository
  extends DefaultCrudRepository<Hill, typeof Hill.prototype.id, {}>
  implements LifeCycleObserver {
  private static idCounter = 0

  @inject('hills')
  private sampleHills: Hill[]

  constructor(@inject('datasources.hills') dataSource: HillsDataSource) {
    super(Hill, dataSource)
  }

  async start() {
    await this.createAll(this.sampleHills)
    // Increase the counter to avoid duplicate keys
    HillRepository.idCounter += this.sampleHills.length
  }

  stop() {
    // Reset the id counter
    HillRepository.idCounter = 0
  }

  async getAll() {
    return this.find()
  }

  async getOne(id: string) {
    return this.findById(id)
  }

  // async add(data: HillInput) {
  //   const hill = this.createHill(data)
  //   return this.create(hill)
  // }

  async findIndex(hill: Hill) {
    const hills = await this.find()
    return hills.findIndex((r) => r.id === hill.id)
  }

  // private createHill(hillData: Partial<Hill>): Hill {
  //   const hill = plainToClass(Hill, hillData)
  //   hill.id = this.getId()
  //   hill.creationDate = new Date('2020-05-24')
  //   hill.ratings = [2, 4]
  //   return hill
  // }

  private getId(): string {
    return (++HillRepository.idCounter).toString()
  }
}
