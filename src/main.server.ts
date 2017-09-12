import 'core-js/shim';
import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';
import { renderModule } from '@angular/platform-server';
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';

import { AppServerModule } from './app/app.server.module';

enableProdMode();

const pathsToSSR = ['/', 'home', 'auth', 'team', 'contact', 'services', 'events'];
const indexFile = readFileSync(resolve('dist/index.html'), 'utf8');
const promises = [];

function saveFile(content, path) {
    const base = 'dist';
    const buildFilePath = (p) => {
        return resolve(`${p}/index.html`);
    };

    let targetDir;
    if (path === '/') {
        targetDir = buildFilePath(`${base}`);
    } else {
        targetDir = buildFilePath(`${base}/${path}`);
        const splitPath = path.split('/');
        for (let i = 0; i < splitPath.length; i++) {
            const parent = splitPath.slice(0, i).join('/');
            const fullPath = resolve(`${base}/${parent}/${splitPath[i]}`);
            if (!existsSync(fullPath)) {
                mkdirSync(fullPath);
            }
        }
    }
    writeFileSync(targetDir, content);
}

pathsToSSR.forEach(path => {
    console.log('Starting to render: ' + path);
    renderModule(AppServerModule, {
        document: indexFile,
        url: path
    })
    .then(result => {
        console.log('Saving file to: ' + resolve(`dist/${path}/index.html`));
        saveFile(result, path);
    })
    .catch((error) => {
        console.log('error', error);
    });
});
