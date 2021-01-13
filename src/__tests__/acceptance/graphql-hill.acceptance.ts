import { Client, expect } from '@loopback/testlab'
import { LiftrlyServerApplication } from '../..'
import { setupApplication } from './test-helper'

describe('HillList Query', () => {
  let app: LiftrlyServerApplication
  let client: Client

  before('setupApplication', async () => {
    ;({ app, client } = await setupApplication())
  })

  after(async () => {
    await app.stop()
  })

  it('queries hill list', async () => {
    // const res = await client.get('/ping?msg=world').expect(200)
    // expect(res.body).to.containEql({ greeting: 'Hello from LoopBack' })
    const res = await client
      .post('/graphql')
      .set('content-type', 'application/json')
      .accept('application/json')
      .send({
        operationName: 'ICanHazHills',
        variables: {},
        query: `query ICanHazHills {
        hills {
          id
          title
          numberInCollection
          lifts {
            id
            type
            skiersPerUnit
          }
        }
      }`,
      })
    expect(res.status).to.equal(200)
    const { data } = JSON.parse(res.text)

    expect(data.hills.length).to.equal(4)
    const [firstHill] = data.hills
    expect(data.hills[0]).to.match({
      id: '1',
      title: 'Whistler',
      numberInCollection: 1,
    })
    expect(firstHill.lifts.length).to.equal(9)
    const groupBy = (hill: any) =>
      hill.lifts.reduce((p: Record<string, number>, { type }: any) => {
        if (!p[type]) p[type] = 0
        p[type] += 1
        return p
      }, {})
    // basic sanity check on lifts
    expect(data.hills.map(groupBy)).to.match([
      { gondola: 3, express: 5, chair: 1 },
      { gondola: 2, express: 2, chair: 2 },
      { gondola: 1, express: 1, chair: 2 },
      { gondola: 1, express: 1, chair: 1 },
    ])
  })
})
