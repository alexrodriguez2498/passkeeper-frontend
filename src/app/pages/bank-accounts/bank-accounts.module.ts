import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [BankAccountsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: BankAccountsComponent}
        ]),
        SharedModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class BankAccountsModule { }
