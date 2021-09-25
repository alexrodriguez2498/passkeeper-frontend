import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [NotesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: NotesComponent}
        ]),
        SharedModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class NotesModule { }
