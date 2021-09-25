import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import { RouterModule } from '@angular/router';

import {CardGridComponent} from './components/card-grid/card-grid.component';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { TitleCasePipe } from './pipes/title-case.pipe';


@NgModule({
    declarations: [CardGridComponent, MaxLengthPipe, TitleCasePipe],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        MatTooltipModule,
        RouterModule,
    ],
    exports: [
        CardGridComponent,
    ]
})
export class SharedModule {
}
