import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentCardsComponent } from './payment-cards/payment-cards.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [PaymentCardsComponent],
    imports: [
        CommonModule,
        SharedModule,
        MatIconModule,
        MatButtonModule,
        RouterModule.forChild([
            {path: '', component: PaymentCardsComponent}
        ]),
    ]
})
export class PaymentCardsModule { }
