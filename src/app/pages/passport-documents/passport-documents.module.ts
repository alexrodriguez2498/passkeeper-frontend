import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassportDocumentsComponent } from './passport-documents/passport-documents.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [PassportDocumentsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: PassportDocumentsComponent}
        ]),
        SharedModule,
        MatButtonModule,
        MatIconModule,
        MatBadgeModule,
        MatTooltipModule
    ]
})
export class PassportDocumentsModule { }
