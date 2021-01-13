"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hill = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@loopback/graphql");
const repository_1 = require("@loopback/repository");
const lift_1 = require("./lift");
let Hill = class Hill extends repository_1.Entity {
    get specification() {
        return this.description;
    }
};
tslib_1.__decorate([
    graphql_1.field((type) => graphql_1.ID),
    repository_1.property({ id: true }),
    tslib_1.__metadata("design:type", String)
], Hill.prototype, "id", void 0);
tslib_1.__decorate([
    graphql_1.field(),
    repository_1.property(),
    tslib_1.__metadata("design:type", String)
], Hill.prototype, "title", void 0);
tslib_1.__decorate([
    graphql_1.field((type) => String, {
        nullable: true,
        deprecationReason: 'Use `description` field instead',
    }),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], Hill.prototype, "specification", null);
tslib_1.__decorate([
    graphql_1.field({
        nullable: true,
        description: 'The Hill description',
    }),
    repository_1.property(),
    tslib_1.__metadata("design:type", String)
], Hill.prototype, "description", void 0);
tslib_1.__decorate([
    graphql_1.field((type) => [lift_1.Lift]),
    repository_1.property({
        type: 'object',
    }),
    tslib_1.__metadata("design:type", Array)
], Hill.prototype, "lifts", void 0);
tslib_1.__decorate([
    graphql_1.field((type) => graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], Hill.prototype, "numberInCollection", void 0);
tslib_1.__decorate([
    graphql_1.field((type) => graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], Hill.prototype, "numLifts", void 0);
Hill = tslib_1.__decorate([
    graphql_1.objectType({ description: 'Object representing a ski hill' }),
    repository_1.model({ settings: { strict: false } })
], Hill);
exports.Hill = Hill;
//# sourceMappingURL=hill.js.map