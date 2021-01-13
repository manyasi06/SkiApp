import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Pass} from '../models';
import {PassRepository} from '../repositories';

export class PassControllerController {
  constructor(
    @repository(PassRepository)
    public passRepository : PassRepository,
  ) {}

  @post('/passes', {
    responses: {
      '200': {
        description: 'Pass model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pass)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pass, {
            title: 'NewPass',
            
          }),
        },
      },
    })
    pass: Pass,
  ): Promise<Pass> {
    return this.passRepository.create(pass);
  }

  @get('/passes/count', {
    responses: {
      '200': {
        description: 'Pass model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Pass) where?: Where<Pass>,
  ): Promise<Count> {
    return this.passRepository.count(where);
  }

  @get('/passes', {
    responses: {
      '200': {
        description: 'Array of Pass model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Pass, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Pass) filter?: Filter<Pass>,
  ): Promise<Pass[]> {
    return this.passRepository.find();
  }

  @patch('/passes', {
    responses: {
      '200': {
        description: 'Pass PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pass, {partial: true}),
        },
      },
    })
    pass: Pass,
    @param.where(Pass) where?: Where<Pass>,
  ): Promise<Count> {
    return this.passRepository.updateAll(pass, where);
  }

  @get('/passes/{id}', {
    responses: {
      '200': {
        description: 'Pass model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Pass, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Pass, {exclude: 'where'}) filter?: FilterExcludingWhere<Pass>
  ): Promise<Pass> {
    return this.passRepository.findById(id, filter);
  }

  @patch('/passes/{id}', {
    responses: {
      '204': {
        description: 'Pass PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pass, {partial: true}),
        },
      },
    })
    pass: Pass,
  ): Promise<void> {
    await this.passRepository.updateById(id, pass);
  }

  @put('/passes/{id}', {
    responses: {
      '204': {
        description: 'Pass PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() pass: Pass,
  ): Promise<void> {
    await this.passRepository.replaceById(id, pass);
  }

  @del('/passes/{id}', {
    responses: {
      '204': {
        description: 'Pass DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.passRepository.deleteById(id);
  }
}
