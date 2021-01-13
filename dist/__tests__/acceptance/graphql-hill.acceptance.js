"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const test_helper_1 = require("./test-helper");
describe('HillList Query', () => {
    let app;
    let client;
    before('setupApplication', async () => {
        ;
        ({ app, client } = await test_helper_1.setupApplication());
    });
    after(async () => {
        await app.stop();
    });
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
        });
        testlab_1.expect(res.status).to.equal(200);
        const { data } = JSON.parse(res.text);
        testlab_1.expect(data.hills.length).to.equal(4);
        const [firstHill] = data.hills;
        testlab_1.expect(data.hills[0]).to.match({
            id: '1',
            title: 'Whistler',
            numberInCollection: 1,
        });
        testlab_1.expect(firstHill.lifts.length).to.equal(9);
        const groupBy = (hill) => hill.lifts.reduce((p, { type }) => {
            if (!p[type])
                p[type] = 0;
            p[type] += 1;
            return p;
        }, {});
        // basic sanity check on lifts
        testlab_1.expect(data.hills.map(groupBy)).to.match([
            { gondola: 3, express: 5, chair: 1 },
            { gondola: 2, express: 2, chair: 2 },
            { gondola: 1, express: 1, chair: 2 },
            { gondola: 1, express: 1, chair: 1 },
        ]);
    });
});
//# sourceMappingURL=graphql-hill.acceptance.js.map