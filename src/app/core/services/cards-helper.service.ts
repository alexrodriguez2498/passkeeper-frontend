import { Injectable } from '@angular/core';
import {EditCardComponent} from '../../shared/alerts/edit-card/edit-card.component';
import Swal from 'sweetalert2';
import {SharedCardComponent} from '../../shared/alerts/shared-card/shared-card.component';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class CardsHelperService {

  constructor(
      private serviceModal: NgbModal,
      private activeModal: NgbActiveModal
  ) { }

  editCard(card): any {
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
      console.log('hello world');
    });
  }

  deleteCard(card): any {
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
        console.log('hello world');
        setTimeout(() => {
          Swal.fire('Deleted!', '', 'success');
        }, 2000);
      }
    });
  }

  shareCard(card): any {
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
