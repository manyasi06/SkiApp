"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-graphql
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.HillsDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'hills',
    connector: 'memory',
    localStorage: '',
    file: '',
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let HillsDataSource = class HillsDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
HillsDataSource.dataSourceName = 'hills';
HillsDataSource.defaultConfig = config;
HillsDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource', {
        tags: {
            [core_1.ContextTags.NAME]: 'hills',
            [core_1.ContextTags.NAMESPACE]: repository_1.RepositoryBindings.DATASOURCES,
        },
    }),
    tslib_1.__param(0, core_1.inject('datasources.config.hills', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], HillsDataSource);
exports.HillsDataSource = HillsDataSource;
//# sourceMappingURL=hills.datasource.js.map