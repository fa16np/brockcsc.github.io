import 'core-js/shim';
import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';
import { renderModule } from '@angular/platform-server';
import { writeFileSync, readFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

import { AppServerModule } from './app/app.server.module';

enableProdMode();

renderModule(AppServerModule, {
    document: readFileSync(resolve('dist/index.html'), 'utf8'),
    url: '/'
}).then(result => {
    writeFileSync(resolve('dist/index.html'), result);
    console.log('rendered');
}).catch(error => {
    console.log('error!!!!');
    console.log(error);
});

