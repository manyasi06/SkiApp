import { Hill } from './graphql-types/hill';
import { LiftType } from './graphql-types/lift';
export declare const sampleLifts: any[];
export declare const sampleHills: Hill[];
export declare const samplePasses: ({
    id: string;
    title: string;
    liftTypes: LiftType[];
    allAccessHills?: undefined;
} | {
    id: string;
    title: string;
    liftTypes: LiftType[];
    allAccessHills: string[];
})[];
