"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.samplePasses = exports.sampleHills = exports.sampleLifts = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const hill_1 = require("./graphql-types/hill");
const lift_1 = require("./graphql-types/lift");
const whisterLifts = [
    {
        id: '1',
        title: 'Whistler Village Gondola',
        type: lift_1.LiftType.Gondola,
        skiersPerUnit: 12,
    },
    {
        id: '2',
        title: 'Fitzsimmons Express',
        type: lift_1.LiftType.ExpressChair,
        skiersPerUnit: 6,
    },
    {
        id: '3',
        title: 'Peak2Peak',
        type: lift_1.LiftType.Gondola,
        skiersPerUnit: 20,
    },
    {
        id: '4',
        title: 'Harmony 6 Express',
        type: lift_1.LiftType.ExpressChair,
        skiersPerUnit: 12,
    },
    {
        id: '5',
        title: 'Peak Express',
        type: lift_1.LiftType.ExpressChair,
        skiersPerUnit: 8,
    },
    {
        id: '6',
        title: 'Big Red Express',
        type: lift_1.LiftType.ExpressChair,
        skiersPerUnit: 8,
    },
    {
        id: '7',
        title: 'Garbanzo Express',
        type: lift_1.LiftType.ExpressChair,
        skiersPerUnit: 6,
    },
    {
        id: '8',
        title: 'Creekside Gondola',
        type: lift_1.LiftType.Gondola,
        skiersPerUnit: 12,
    },
    {
        id: '9',
        title: 'Olympic',
        type: lift_1.LiftType.Chair,
        skiersPerUnit: 6,
    },
].map((x) => class_transformer_1.plainToClass(lift_1.Lift, x));
const blackcombLifts = [
    {
        id: '10',
        title: 'New Blackcomb Gondola',
        type: lift_1.LiftType.Gondola,
        skiersPerUnit: 10,
    },
    {
        id: '11',
        title: 'Excalibur Gondola',
        type: lift_1.LiftType.Gondola,
        skiersPerUnit: 8,
    },
    {
        id: '12',
        title: 'Excelerator Epxress',
        type: lift_1.LiftType.ExpressChair,
        skiersPerUnit: 8,
    },
    {
        id: '13',
        title: 'Glacier Express',
        type: lift_1.LiftType.ExpressChair,
        skiersPerUnit: 6,
    },
    {
        id: '14',
        title: 'New Catskinner',
        type: lift_1.LiftType.Chair,
        skiersPerUnit: 4,
    },
    {
        id: '15',
        title: 'Glacier',
        type: lift_1.LiftType.Chair,
        skiersPerUnit: 4,
    },
].map((x) => class_transformer_1.plainToClass(lift_1.Lift, x));
const grouseLifts = [
    {
        id: '16',
        title: 'Red Skyride',
        type: lift_1.LiftType.Gondola,
        skiersPerUnit: 12,
    },
    {
        id: '17',
        title: 'Screaming Eagle Chair',
        type: lift_1.LiftType.ExpressChair,
        skiersPerUnit: 4,
    },
    {
        id: '18',
        title: 'Peak Chair',
        type: lift_1.LiftType.Chair,
        skiersPerUnit: 4,
    },
    {
        id: '19',
        title: 'Greenway Chair',
        type: lift_1.LiftType.Chair,
        skiersPerUnit: 3,
    },
].map((x) => class_transformer_1.plainToClass(lift_1.Lift, x));
const cypressLifts = [
    {
        id: '20',
        title: 'Raven Ridge',
        type: lift_1.LiftType.Gondola,
        skiersPerUnit: 4,
    },
    {
        id: '21',
        title: 'Eagle Express',
        type: lift_1.LiftType.ExpressChair,
        skiersPerUnit: 4,
    },
    {
        id: '22',
        title: 'Midway',
        type: lift_1.LiftType.Chair,
        skiersPerUnit: 4,
    },
].map((x) => class_transformer_1.plainToClass(lift_1.Lift, x));
exports.sampleLifts = Array.prototype.concat(whisterLifts, blackcombLifts, grouseLifts, cypressLifts);
exports.sampleHills = [
    {
        id: '1',
        title: 'Whistler',
        description: 'Whistler Mountain, site of Vancouver 2010 Winter Olympics',
        lifts: whisterLifts,
    },
    {
        id: '2',
        title: 'Blackcomb',
        description: 'Blackcomb Mountain, right next door but unlucky in not being named first',
        lifts: blackcombLifts,
    },
    {
        id: '3',
        title: 'Grouse',
        description: 'Home of the Grouse Grind in the summer',
        lifts: grouseLifts,
    },
    {
        id: '4',
        title: 'Cypress',
        description: 'Closest to Vancouver, checkout the Cypress bowl lit up from the city',
        lifts: cypressLifts,
    },
].map((_a) => {
    var { lifts } = _a, x = tslib_1.__rest(_a, ["lifts"]);
    return class_transformer_1.plainToClass(hill_1.Hill, Object.assign(Object.assign({}, x), { lifts: lifts !== null && lifts !== void 0 ? lifts : [] }));
});
exports.samplePasses = [
    {
        id: 'gold',
        title: 'Gold',
        liftTypes: [
            lift_1.LiftType.Gondola,
            lift_1.LiftType.Chair,
            lift_1.LiftType.ExpressChair,
            lift_1.LiftType.Rope,
            lift_1.LiftType.TBar,
        ],
    },
    {
        id: 'silver',
        title: 'Silver',
        liftTypes: [lift_1.LiftType.Gondola, lift_1.LiftType.Chair, lift_1.LiftType.Rope, lift_1.LiftType.TBar],
        allAccessHills: ['3', '4'],
    },
    {
        id: 'bronze',
        title: 'Bronze',
        liftTypes: [lift_1.LiftType.Chair, lift_1.LiftType.Rope, lift_1.LiftType.TBar],
        allAccessHills: ['3', '4'],
    },
];
//# sourceMappingURL=sample.data.js.map