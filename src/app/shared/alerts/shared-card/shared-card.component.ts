import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.scss']
})
export class SharedCardComponent implements OnInit {
  emailForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.createForm();
    console.log(this.modal);
  }

  private createForm(): any {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      sharePassword: [false]
    });
  }

  sendData() {
    this.modal.close(this.emailForm.value);
  }

  getErrorMessage() {
    if (this.emailForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }
    if (this.emailForm.get('email').hasError('email')) {
      return 'Please enter a valid email';
    }
  }
}
