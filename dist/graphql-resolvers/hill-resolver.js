"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HillResolver = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const graphql_1 = require("@loopback/graphql");
const repository_1 = require("@loopback/repository");
const hill_1 = require("../graphql-types/hill");
const repositories_1 = require("../repositories");
let HillResolver = class HillResolver {
    constructor(
    // constructor injection of service
    hillRepo, 
    // @service(HillService) private readonly hillService: HillService,
    // It's possible to inject the resolver data
    resolverData) {
        this.hillRepo = hillRepo;
        this.resolverData = resolverData;
    }
    async hill(hillId) {
        return this.hillRepo.getOne(hillId);
    }
    async hills() {
        return this.hillRepo.getAll();
    }
    async hillCreated(hill) {
        return hill;
    }
    async numberInCollection(hill) {
        const index = await this.hillRepo.findIndex(hill);
        return index + 1;
    }
    async numLifts(hill) {
        return hill.lifts.length;
    }
};
tslib_1.__decorate([
    graphql_1.query((returns) => hill_1.Hill, { nullable: true }),
    graphql_1.authorized('owner'),
    tslib_1.__param(0, graphql_1.arg('hillId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], HillResolver.prototype, "hill", null);
tslib_1.__decorate([
    graphql_1.query((returns) => [hill_1.Hill]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], HillResolver.prototype, "hills", null);
tslib_1.__decorate([
    graphql_1.subscription((returns) => hill_1.Hill, { topics: 'hillCreated' }),
    tslib_1.__param(0, graphql_1.root()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [hill_1.Hill]),
    tslib_1.__metadata("design:returntype", Promise)
], HillResolver.prototype, "hillCreated", null);
tslib_1.__decorate([
    graphql_1.fieldResolver(),
    tslib_1.__param(0, graphql_1.root()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [hill_1.Hill]),
    tslib_1.__metadata("design:returntype", Promise)
], HillResolver.prototype, "numberInCollection", null);
tslib_1.__decorate([
    graphql_1.fieldResolver(),
    tslib_1.__param(0, graphql_1.root()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [hill_1.Hill]),
    tslib_1.__metadata("design:returntype", Promise)
], HillResolver.prototype, "numLifts", null);
HillResolver = tslib_1.__decorate([
    graphql_1.resolver((of) => hill_1.Hill),
    tslib_1.__param(0, repository_1.repository('HillRepository')),
    tslib_1.__param(1, core_1.inject(graphql_1.GraphQLBindings.RESOLVER_DATA)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.HillRepository, Object])
], HillResolver);
exports.HillResolver = HillResolver;
//# sourceMappingURL=hill-resolver.js.map