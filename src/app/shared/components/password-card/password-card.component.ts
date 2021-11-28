import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditCardComponent} from '../../alerts/edit-card/edit-card.component';
import {SharedCardComponent} from '../../alerts/shared-card/shared-card.component';

@Component({
  selector: 'app-password-card',
  templateUrl: './password-card.component.html',
  styleUrls: ['./password-card.component.scss']
})
export class PasswordCardComponent implements OnInit {
  @Input() arrData = [];

  constructor(
      private router: Router,
      private serviceModal: NgbModal,
  ) { }

  ngOnInit(): void {
  }


  edit(card): any {
    const modal = this.serviceModal.open(EditCardComponent, {
      centered: true,
      windowClass: 'custom-modal d-flex flex-column w-100 justify-content-center'
    });
    modal.componentInstance.cardInfo = card;
    modal.result.then((res) => {
      console.log(res);
      Swal.fire({
        title: 'Updating Info...',
        text: 'Please Wait',
        icon: 'warning',
        backdrop: false,
      });
      Swal.showLoading();
      setTimeout(() => {
        Swal.fire('Edited Successfully!', '', 'success');
      }, 2000);
    });
  }

  delete(card): any {
    Swal.fire({
      title: `${card.title}`,
      text: 'Do you want to delete this item?',
      icon: 'question',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Processing Info...',
          text: 'Please Wait',
          icon: 'warning',
          backdrop: false,
        });
        Swal.showLoading();
        setTimeout(() => {
          Swal.fire('Deleted!', '', 'success');
        }, 2000);
      }
    });
  }

  share(card): any {
    const modal = this.serviceModal.open(SharedCardComponent, {
      centered: true,
      windowClass: 'custom-short-modal d-flex flex-column w-100 justify-content-center'
    });
    modal.componentInstance.cardInfo = card;
    modal.result.then((res) => {
      console.log(res);
      Swal.fire({
        title: 'Sending request...',
        text: 'Please Wait',
        icon: 'warning',
        backdrop: false,
      });
      Swal.showLoading();
      setTimeout(() => {
        Swal.fire('Request Sent!', '', 'success');
      }, 2000);
    });
  }
}
