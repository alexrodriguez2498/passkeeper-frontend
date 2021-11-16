import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { DashboardsModule } from '../../_metronic/partials/content/dashboards/dashboards.module';
import {SecurityDashboardComponent} from './security-dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardsModule,
    // material
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    // material
    RouterModule.forChild([
      {path: '', component: SecurityDashboardComponent}
    ])
  ]
})
export class SecurityDashboardModule { }
