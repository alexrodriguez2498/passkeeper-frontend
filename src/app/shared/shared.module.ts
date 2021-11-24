import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

import {CardGridComponent} from './components/card-grid/card-grid.component';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { ShowHelpComponent } from './alerts/show-help/show-help.component';
import { AdvancedOptionsComponent } from './alerts/advanced-options/advanced-options.component';
import { EditCardComponent } from './alerts/edit-card/edit-card.component';
import { SharedCardComponent } from './alerts/shared-card/shared-card.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PasswordCardComponent } from './components/password-card/password-card.component';
import { NotesCardComponent } from './components/notes-card/notes-card.component';
import { AddressesCardComponent } from './components/addresses-card/addresses-card.component';
import { PaymentCardsCardComponent } from './components/payment-cards-card/payment-cards-card.component';
import { BankAccountsCardComponent } from './components/bank-accounts-card/bank-accounts-card.component';
import { DocumentsCardComponent } from './components/documents-card/documents-card.component';


@NgModule({
    declarations: [CardGridComponent, MaxLengthPipe, TitleCasePipe, ShowHelpComponent, AdvancedOptionsComponent, EditCardComponent, SharedCardComponent, PasswordCardComponent, NotesCardComponent, AddressesCardComponent, PaymentCardsCardComponent, BankAccountsCardComponent, DocumentsCardComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        MatTooltipModule,
        MatDividerModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule
    ],
    exports: [
        CardGridComponent,
        ShowHelpComponent,
        AdvancedOptionsComponent,
        EditCardComponent,
        SharedCardComponent,
        PasswordCardComponent,
        NotesCardComponent,
        AddressesCardComponent,
        PaymentCardsCardComponent,
        BankAccountsCardComponent,
        DocumentsCardComponent,
    ]
})
export class SharedModule {
}
