import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesComponent } from './addresses/addresses.component';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [AddressesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: AddressesComponent}
        ]),
        SharedModule,
        MatIconModule,
        MatButtonModule,
        MatBadgeModule,
        MatTooltipModule
    ]
})
export class AddressesModule { }
