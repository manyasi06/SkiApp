"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiftrlyServerApplication = void 0;
const tslib_1 = require("tslib");
const boot_1 = require("@loopback/boot");
const graphql_1 = require("@loopback/graphql");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = tslib_1.__importDefault(require("path"));
const sample_data_1 = require("./sample.data");
class LiftrlyServerApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        // this.sequence(MySequence)
        // Customize @loopback/rest-explorer configuration here
        // this.configure(RestExplorerBindings.COMPONENT).to({
        //   path: '/explorer',
        // })
        // this.component(RestExplorerComponent)
        this.component(graphql_1.GraphQLComponent);
        const server = this.getSync(graphql_1.GraphQLBindings.GRAPHQL_SERVER);
        this.expressMiddleware('middleware.express.GraphQL', server.expressApp);
        this.bind(graphql_1.GraphQLBindings.GRAPHQL_CONTEXT_RESOLVER).to((context) => {
            return Object.assign({}, context);
        });
        this.bind('hills').to([...sample_data_1.sampleHills]);
        this.bind('lifts').to([...sample_data_1.sampleLifts]);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        this.projectRoot = __dirname;
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
        };
    }
}
exports.LiftrlyServerApplication = LiftrlyServerApplication;
//# sourceMappingURL=application.js.map