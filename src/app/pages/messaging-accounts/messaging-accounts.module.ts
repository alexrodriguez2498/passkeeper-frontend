import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingAccountsComponent } from './messaging-accounts/messaging-accounts.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [MessagingAccountsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: MessagingAccountsComponent}
        ]),
        MatIconModule,
        MatButtonModule,
        SharedModule
    ]
})
export class MessagingAccountsModule { }
