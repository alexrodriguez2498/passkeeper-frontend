import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharingCenterComponent } from './sharing-center/sharing-center.component';
import {RouterModule} from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SharingCenterComponent],
  imports: [
    CommonModule,
    // material
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    // material
    RouterModule.forChild([
      {path: '', component: SharingCenterComponent}
    ])
  ]
})
export class SharingCenterModule { }
