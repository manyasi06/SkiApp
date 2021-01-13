import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Pass } from '../models';
import { PassRepository } from '../repositories';
export declare class PassControllerController {
    passRepository: PassRepository;
    constructor(passRepository: PassRepository);
    create(pass: Pass): Promise<Pass>;
    count(where?: Where<Pass>): Promise<Count>;
    find(filter?: Filter<Pass>): Promise<Pass[]>;
    updateAll(pass: Pass, where?: Where<Pass>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Pass>): Promise<Pass>;
    updateById(id: string, pass: Pass): Promise<void>;
    replaceById(id: string, pass: Pass): Promise<void>;
    deleteById(id: string): Promise<void>;
}
