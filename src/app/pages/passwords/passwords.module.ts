import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordsComponent } from './passwords/passwords.component';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [PasswordsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
      RouterModule.forChild([
        {path: '', component: PasswordsComponent}
      ])
  ]
})
export class PasswordsModule { }
