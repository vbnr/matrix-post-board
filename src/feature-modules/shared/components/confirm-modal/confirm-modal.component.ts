import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
})
export class ConfirmModalComponent {
  @Input() modal?: { title: string };

  constructor(private modalRef: BsModalRef) {}

  onClose() {
    this.modalRef.hide();
  }
}
