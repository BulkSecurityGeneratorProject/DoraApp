import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DoraAppSharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {ChipsModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/components/button/button';
import {GrowlModule} from 'primeng/components/growl/growl';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    ChipsDemoComponent,
    chipsDemoRoute
} from './';

const primeng_STATES = [
    chipsDemoRoute
];

@NgModule({
    imports: [
        DoraAppSharedModule,
        FormsModule,
        ChipsModule,
        GrowlModule,
        ButtonModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        ChipsDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DoraAppChipsDemoModule {}
