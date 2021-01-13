import { BootMixin } from '@loopback/boot'
import { ApplicationConfig } from '@loopback/core'
import { GraphQLBindings, GraphQLComponent } from '@loopback/graphql'
import { RepositoryMixin } from '@loopback/repository'
import { RestApplication } from '@loopback/rest'
import { ServiceMixin } from '@loopback/service-proxy'
import path from 'path'
import { sampleHills, sampleLifts } from './sample.data'

export type { ApplicationConfig }

export class LiftrlyServerApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options)

    // Set up the custom sequence
    // this.sequence(MySequence)

    // Customize @loopback/rest-explorer configuration here
    // this.configure(RestExplorerBindings.COMPONENT).to({
    //   path: '/explorer',
    // })
    // this.component(RestExplorerComponent)

    this.component(GraphQLComponent)

    const server = this.getSync(GraphQLBindings.GRAPHQL_SERVER)
    this.expressMiddleware('middleware.express.GraphQL', server.expressApp)

    this.bind(GraphQLBindings.GRAPHQL_CONTEXT_RESOLVER).to((context) => {
      return { ...context }
    })

    this.bind('hills').to([...sampleHills])

    this.bind('lifts').to([...sampleLifts])

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'))

    this.projectRoot = __dirname
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
      graphqlResolvers: {
        // Customize ControllerBooter Conventions here
        dirs: ['graphql-resolvers'],
        extensions: ['.js'],
        nested: true,
      },
    }
  }
}
