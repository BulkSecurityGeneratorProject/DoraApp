import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { DoraAppSharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/primeng';
import {GalleriaModule} from 'primeng/primeng';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    GalleriaDemoComponent,
    galleriaDemoRoute
} from './';

const primeng_STATES = [
    galleriaDemoRoute
];

@NgModule({
    imports: [
        DoraAppSharedModule,
        CommonModule,
        BrowserAnimationsModule,
        GrowlModule,
        GalleriaModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        GalleriaDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DoraAppGalleriaDemoModule {}
