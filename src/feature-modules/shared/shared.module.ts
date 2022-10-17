import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { ErrorFormControlComponent } from './components/error-form-control/error-form-control.component';
import { SubStrPipe } from './pipes/sub-str.pipe';

@NgModule({
  imports: [ModalModule.forRoot()],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ErrorFormControlComponent,
    ConfirmModalComponent,
    ModalModule,
    // Normally will be placed in a another pipes module
    SubStrPipe,
  ],
  declarations: [ErrorFormControlComponent, ConfirmModalComponent, SubStrPipe],
})
export class SharedModule {}
