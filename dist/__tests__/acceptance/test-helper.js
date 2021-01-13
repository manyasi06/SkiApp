"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApplication = void 0;
const testlab_1 = require("@loopback/testlab");
const __1 = require("../..");
async function setupApplication() {
    var _a;
    const restConfig = testlab_1.givenHttpServerConfig({
        // Customize the server configuration here.
        // Empty values (undefined, '') will be ignored by the helper.
        //
        host: process.env.HOST,
        port: +((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3001),
    });
    const graphqlCfg = {
        apollo: {
            subscriptions: '/subscriptions',
        },
        asMiddlewareOnly: true,
    };
    const app = new __1.LiftrlyServerApplication({
        rest: restConfig,
        graphql: graphqlCfg,
    });
    await app.boot();
    await app.start();
    const client = testlab_1.createRestAppClient(app);
    return { app, client };
}
exports.setupApplication = setupApplication;
//# sourceMappingURL=test-helper.js.map