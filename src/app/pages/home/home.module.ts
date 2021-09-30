import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        SharedModule,
        MatButtonModule,
        MatIconModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent,
            }
        ]),
        MatBadgeModule,
        MatTooltipModule
    ]
})
export class HomeModule { }
