import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class EnvironmentService {

    constructor( @Inject(PLATFORM_ID) private platformId: Object) { }

    public get isBrowser(): boolean {
        return isPlatformBrowser(this.platformId);
    }

    public get isServer(): boolean {
        return !this.isBrowser;
    }

}
