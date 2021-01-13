"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PassControllerController = class PassControllerController {
    constructor(passRepository) {
        this.passRepository = passRepository;
    }
    async create(pass) {
        return this.passRepository.create(pass);
    }
    async count(where) {
        return this.passRepository.count(where);
    }
    async find(filter) {
        return this.passRepository.find();
    }
    async updateAll(pass, where) {
        return this.passRepository.updateAll(pass, where);
    }
    async findById(id, filter) {
        return this.passRepository.findById(id, filter);
    }
    async updateById(id, pass) {
        await this.passRepository.updateById(id, pass);
    }
    async replaceById(id, pass) {
        await this.passRepository.replaceById(id, pass);
    }
    async deleteById(id) {
        await this.passRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/passes', {
        responses: {
            '200': {
                description: 'Pass model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Pass) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Pass, {
                    title: 'NewPass',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Pass]),
    tslib_1.__metadata("design:returntype", Promise)
], PassControllerController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/passes/count', {
        responses: {
            '200': {
                description: 'Pass model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Pass)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PassControllerController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/passes', {
        responses: {
            '200': {
                description: 'Array of Pass model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Pass, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Pass)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PassControllerController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/passes', {
        responses: {
            '200': {
                description: 'Pass PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Pass, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Pass)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Pass, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PassControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/passes/{id}', {
        responses: {
            '200': {
                description: 'Pass model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Pass, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Pass, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PassControllerController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/passes/{id}', {
        responses: {
            '204': {
                description: 'Pass PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Pass, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Pass]),
    tslib_1.__metadata("design:returntype", Promise)
], PassControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/passes/{id}', {
        responses: {
            '204': {
                description: 'Pass PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Pass]),
    tslib_1.__metadata("design:returntype", Promise)
], PassControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/passes/{id}', {
        responses: {
            '204': {
                description: 'Pass DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PassControllerController.prototype, "deleteById", null);
PassControllerController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PassRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PassRepository])
], PassControllerController);
exports.PassControllerController = PassControllerController;
//# sourceMappingURL=pass.controller.js.map