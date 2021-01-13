import { Client } from '@loopback/testlab';
import { LiftrlyServerApplication } from '../..';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: LiftrlyServerApplication;
    client: Client;
}
