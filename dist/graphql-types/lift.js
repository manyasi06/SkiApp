"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lift = exports.LiftType = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@loopback/graphql");
const repository_1 = require("@loopback/repository");
var LiftType;
(function (LiftType) {
    LiftType["Gondola"] = "gondola";
    LiftType["TBar"] = "t-bar";
    LiftType["Rope"] = "rope-pull";
    LiftType["Chair"] = "chair";
    LiftType["ExpressChair"] = "express";
})(LiftType = exports.LiftType || (exports.LiftType = {}));
let Lift = class Lift extends repository_1.Entity {
};
tslib_1.__decorate([
    graphql_1.field((type) => graphql_1.ID),
    repository_1.property({ id: true }),
    tslib_1.__metadata("design:type", String)
], Lift.prototype, "id", void 0);
tslib_1.__decorate([
    graphql_1.field(),
    repository_1.property(),
    tslib_1.__metadata("design:type", String)
], Lift.prototype, "title", void 0);
tslib_1.__decorate([
    graphql_1.field(),
    repository_1.property(),
    tslib_1.__metadata("design:type", String)
], Lift.prototype, "type", void 0);
tslib_1.__decorate([
    graphql_1.field(),
    repository_1.property(),
    tslib_1.__metadata("design:type", Number)
], Lift.prototype, "skiersPerUnit", void 0);
tslib_1.__decorate([
    graphql_1.field((type) => graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], Lift.prototype, "numberInCollection", void 0);
Lift = tslib_1.__decorate([
    graphql_1.objectType({ description: 'Object representing a lift on a ski hill' }),
    repository_1.model({ settings: { strict: false } })
], Lift);
exports.Lift = Lift;
//# sourceMappingURL=lift.js.map