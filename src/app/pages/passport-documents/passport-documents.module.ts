import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassportDocumentsComponent } from './passport-documents/passport-documents.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [PassportDocumentsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: PassportDocumentsComponent}
        ]),
        SharedModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class PassportDocumentsModule { }
