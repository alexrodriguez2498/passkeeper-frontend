import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordsComponent } from './passwords/passwords.component';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [PasswordsComponent],
    imports: [
        CommonModule,
        SharedModule,
        MatButtonModule,
        MatIconModule,
        RouterModule.forChild([
            {path: '', component: PasswordsComponent}
        ]),
        MatBadgeModule,
        MatTooltipModule
    ]
})
export class PasswordsModule { }
