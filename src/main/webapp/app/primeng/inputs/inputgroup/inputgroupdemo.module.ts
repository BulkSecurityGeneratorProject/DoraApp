import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DoraAppSharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {RadioButtonModule} from 'primeng/components/radiobutton/radiobutton';
import {ButtonModule} from 'primeng/components/button/button';
import {GrowlModule} from 'primeng/components/growl/growl';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    InputGroupDemoComponent,
    inputGroupDemoRoute
} from './';

const primeng_STATES = [
    inputGroupDemoRoute
];

@NgModule({
    imports: [
        DoraAppSharedModule,
        FormsModule,
        InputTextModule,
        CheckboxModule,
        RadioButtonModule,
        ButtonModule,
        GrowlModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        InputGroupDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DoraAppInputGroupDemoModule {}
