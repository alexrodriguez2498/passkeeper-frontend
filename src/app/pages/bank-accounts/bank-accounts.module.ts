import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [BankAccountsComponent],
    imports: [
        CommonModule,
        SharedModule,
        MatIconModule,
        MatButtonModule,
        MatBadgeModule,
        MatTooltipModule,
        RouterModule.forChild([
            {path: '', component: BankAccountsComponent}
        ])
    ]
})
export class BankAccountsModule { }
