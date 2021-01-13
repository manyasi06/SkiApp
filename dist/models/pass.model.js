"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pass = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const lift_1 = require("../graphql-types/lift");
let Pass = class Pass extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Pass.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Pass.prototype, "title", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'any',
    }),
    tslib_1.__metadata("design:type", String)
], Pass.prototype, "liftTypes", void 0);
Pass = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Pass);
exports.Pass = Pass;
//# sourceMappingURL=pass.model.js.map