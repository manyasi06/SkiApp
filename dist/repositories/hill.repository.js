"use strict";
var HillRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HillRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const hills_datasource_1 = require("../datasources/hills.datasource");
const hill_1 = require("../graphql-types/hill");
let HillRepository = HillRepository_1 = class HillRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(hill_1.Hill, dataSource);
    }
    async start() {
        await this.createAll(this.sampleHills);
        // Increase the counter to avoid duplicate keys
        HillRepository_1.idCounter += this.sampleHills.length;
    }
    stop() {
        // Reset the id counter
        HillRepository_1.idCounter = 0;
    }
    async getAll() {
        return this.find();
    }
    async getOne(id) {
        return this.findById(id);
    }
    // async add(data: HillInput) {
    //   const hill = this.createHill(data)
    //   return this.create(hill)
    // }
    async findIndex(hill) {
        const hills = await this.find();
        return hills.findIndex((r) => r.id === hill.id);
    }
    // private createHill(hillData: Partial<Hill>): Hill {
    //   const hill = plainToClass(Hill, hillData)
    //   hill.id = this.getId()
    //   hill.creationDate = new Date('2020-05-24')
    //   hill.ratings = [2, 4]
    //   return hill
    // }
    getId() {
        return (++HillRepository_1.idCounter).toString();
    }
};
HillRepository.idCounter = 0;
tslib_1.__decorate([
    core_1.inject('hills'),
    tslib_1.__metadata("design:type", Array)
], HillRepository.prototype, "sampleHills", void 0);
HillRepository = HillRepository_1 = tslib_1.__decorate([
    core_1.injectable({
        scope: core_1.BindingScope.SINGLETON,
        tags: { [core_1.ContextTags.NAMESPACE]: repository_1.RepositoryBindings.REPOSITORIES },
    }),
    core_1.lifeCycleObserver('repository'),
    tslib_1.__param(0, core_1.inject('datasources.hills')),
    tslib_1.__metadata("design:paramtypes", [hills_datasource_1.HillsDataSource])
], HillRepository);
exports.HillRepository = HillRepository;
//# sourceMappingURL=hill.repository.js.map