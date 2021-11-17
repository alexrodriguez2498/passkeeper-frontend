import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmergencyAccessComponent } from './emergency-access/emergency-access.component';
import {RouterModule} from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [EmergencyAccessComponent],
  imports: [
    CommonModule,
    // material
    MatTabsModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    // material
    RouterModule.forChild([
      {path: '', component: EmergencyAccessComponent}
    ])
  ]
})
export class EmergencyAccessModule { }
