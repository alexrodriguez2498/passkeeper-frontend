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


@NgModule({
    declarations: [CardGridComponent, MaxLengthPipe, TitleCasePipe, ShowHelpComponent, AdvancedOptionsComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        MatTooltipModule,
        MatDividerModule,
        RouterModule,
    ],
    exports: [
        CardGridComponent,
        ShowHelpComponent,
        AdvancedOptionsComponent,
    ]
})
export class SharedModule {
}
