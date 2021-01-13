import { plainToClass } from 'class-transformer'
import { Hill } from './graphql-types/hill'
import { Lift, LiftType } from './graphql-types/lift'

const whisterLifts = [
  {
    id: '1',
    title: 'Whistler Village Gondola',
    type: LiftType.Gondola,
    skiersPerUnit: 12,
  },
  {
    id: '2',
    title: 'Fitzsimmons Express',
    type: LiftType.ExpressChair,
    skiersPerUnit: 6,
  },
  {
    id: '3',
    title: 'Peak2Peak',
    type: LiftType.Gondola,
    skiersPerUnit: 20,
  },
  {
    id: '4',
    title: 'Harmony 6 Express',
    type: LiftType.ExpressChair,
    skiersPerUnit: 12,
  },
  {
    id: '5',
    title: 'Peak Express',
    type: LiftType.ExpressChair,
    skiersPerUnit: 8,
  },
  {
    id: '6',
    title: 'Big Red Express',
    type: LiftType.ExpressChair,
    skiersPerUnit: 8,
  },
  {
    id: '7',
    title: 'Garbanzo Express',
    type: LiftType.ExpressChair,
    skiersPerUnit: 6,
  },
  {
    id: '8',
    title: 'Creekside Gondola',
    type: LiftType.Gondola,
    skiersPerUnit: 12,
  },
  {
    id: '9',
    title: 'Olympic',
    type: LiftType.Chair,
    skiersPerUnit: 6,
  },
].map((x) => plainToClass(Lift, x))

const blackcombLifts = [
  {
    id: '10',
    title: 'New Blackcomb Gondola',
    type: LiftType.Gondola,
    skiersPerUnit: 10,
  },
  {
    id: '11',
    title: 'Excalibur Gondola',
    type: LiftType.Gondola,
    skiersPerUnit: 8,
  },
  {
    id: '12',
    title: 'Excelerator Epxress',
    type: LiftType.ExpressChair,
    skiersPerUnit: 8,
  },
  {
    id: '13',
    title: 'Glacier Express',
    type: LiftType.ExpressChair,
    skiersPerUnit: 6,
  },
  {
    id: '14',
    title: 'New Catskinner',
    type: LiftType.Chair,
    skiersPerUnit: 4,
  },
  {
    id: '15',
    title: 'Glacier',
    type: LiftType.Chair,
    skiersPerUnit: 4,
  },
].map((x) => plainToClass(Lift, x))

const grouseLifts = [
  {
    id: '16',
    title: 'Red Skyride',
    type: LiftType.Gondola,
    skiersPerUnit: 12,
  },
  {
    id: '17',
    title: 'Screaming Eagle Chair',
    type: LiftType.ExpressChair,
    skiersPerUnit: 4,
  },
  {
    id: '18',
    title: 'Peak Chair',
    type: LiftType.Chair,
    skiersPerUnit: 4,
  },
  {
    id: '19',
    title: 'Greenway Chair',
    type: LiftType.Chair,
    skiersPerUnit: 3,
  },
].map((x) => plainToClass(Lift, x))

const cypressLifts = [
  {
    id: '20',
    title: 'Raven Ridge',
    type: LiftType.Gondola,
    skiersPerUnit: 4,
  },
  {
    id: '21',
    title: 'Eagle Express',
    type: LiftType.ExpressChair,
    skiersPerUnit: 4,
  },
  {
    id: '22',
    title: 'Midway',
    type: LiftType.Chair,
    skiersPerUnit: 4,
  },
].map((x) => plainToClass(Lift, x))

export const sampleLifts = Array.prototype.concat(
  whisterLifts,
  blackcombLifts,
  grouseLifts,
  cypressLifts,
)

export const sampleHills = [
  {
    id: '1',
    title: 'Whistler',
    description: 'Whistler Mountain, site of Vancouver 2010 Winter Olympics',
    lifts: whisterLifts,
  },
  {
    id: '2',
    title: 'Blackcomb',
    description:
      'Blackcomb Mountain, right next door but unlucky in not being named first',
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
    description:
      'Closest to Vancouver, checkout the Cypress bowl lit up from the city',
    lifts: cypressLifts,
  },
].map(({ lifts, ...x }) => plainToClass(Hill, { ...x, lifts: lifts ?? [] }))

export const samplePasses = [
  {
    id: 'gold',
    title: 'Gold',
    liftTypes: [
      LiftType.Gondola,
      LiftType.Chair,
      LiftType.ExpressChair,
      LiftType.Rope,
      LiftType.TBar,
    ],
  },
  {
    id: 'silver',
    title: 'Silver',
    liftTypes: [LiftType.Gondola, LiftType.Chair, LiftType.Rope, LiftType.TBar],
    allAccessHills: ['3', '4'],
  },
  {
    id: 'bronze',
    title: 'Bronze',
    liftTypes: [LiftType.Chair, LiftType.Rope, LiftType.TBar],
    allAccessHills: ['3', '4'],
  },
]
