import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsHelperService } from './services/cards-helper.service';



@NgModule({
  declarations: [CardsHelperService],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
