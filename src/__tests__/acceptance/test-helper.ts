import { GraphQLServerOptions } from '@loopback/graphql'
import {
  Client,
  createRestAppClient,
  givenHttpServerConfig,
} from '@loopback/testlab'
import { LiftrlyServerApplication } from '../..'

export async function setupApplication(): Promise<AppWithClient> {
  const restConfig = givenHttpServerConfig({
    // Customize the server configuration here.
    // Empty values (undefined, '') will be ignored by the helper.
    //
    host: process.env.HOST,
    port: +(process.env.PORT ?? 3001),
  })

  const graphqlCfg: GraphQLServerOptions = {
    apollo: {
      subscriptions: '/subscriptions',
    },
    asMiddlewareOnly: true,
  }

  const app = new LiftrlyServerApplication({
    rest: restConfig,
    graphql: graphqlCfg,
  })

  await app.boot()
  await app.start()

  const client = createRestAppClient(app)

  return { app, client }
}

export interface AppWithClient {
  app: LiftrlyServerApplication
  client: Client
}
