import { Entity } from '@loopback/repository';
export declare enum LiftType {
    Gondola = "gondola",
    TBar = "t-bar",
    Rope = "rope-pull",
    Chair = "chair",
    ExpressChair = "express"
}
export declare class Lift extends Entity {
    id: string;
    title: string;
    type: LiftType;
    skiersPerUnit: number;
    protected numberInCollection: number;
}
