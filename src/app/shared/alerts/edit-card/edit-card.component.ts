import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {
  @Input() cardInfo: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.cardInfo);
  }

}
