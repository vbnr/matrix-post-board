import { Component, Input } from '@angular/core';
import { BoardNode } from 'src/core/http/interfaces/board-node';
import { getNodeForm } from './form-group/form-group';

@Component({
  selector: 'app-node-form-modal',
  templateUrl: './node-form-modal.component.html',
  styles: [
    `
      :host {
        .form-group {
          margin-bottom: 25px;
        }
      }
    `,
  ],
})
export class NodeFormModalComponent {
  @Input() modal?: { title: string };
  @Input() callBackFunc?: (form: unknown) => void;

  @Input() set node(node: BoardNode) {
    this.form.patchValue(node, { emitEvent: false, onlySelf: true });
  }

  readonly form = getNodeForm();

  onSubmit() {
    this.form.markAsDirty();
    this.form.updateValueAndValidity();

    if (this.form.invalid) {
      return;
    }

    if (this.callBackFunc) {
      this.callBackFunc({ date: new Date().toISOString(), ...this.form.value });
    }
  }
}
