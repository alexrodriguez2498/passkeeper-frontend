import {AfterContentInit, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit, AfterViewInit {
  @Input() cardInfo: any;
  cardType = 0;
  cardForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private serviceModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.cardType = this.cardInfo.type;
    this.createForm();
  }

  ngAfterViewInit(): void {
    this.updateForm();
  }

  private createForm() {
    this.cardForm = this.fb.group({
      name: [''],
      url: [''],
      username: [''],
      sitePassword: [''],
      notes: [''],
    });
  }

  private updateForm() {
    this.cardForm.get('name').setValue(this.cardInfo.title);
    this.cardForm.get('username').setValue(this.cardInfo.user);
    this.cardForm.get('sitePassword').setValue(this.cardInfo.password);
    this.cardForm.get('notes').setValue(this.cardInfo.description);
    this.cardForm.get('url').setValue(this.cardInfo.url);
  }

  sendData() {
    console.log(this.cardForm.value);
    this.serviceModal.close();
  }
}
