import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { NodeComponent } from './node/node.component';
import { NodeFormModalComponent } from './node-form-modal/node-form-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BoardComponent, NodeComponent, NodeFormModalComponent],
  imports: [CommonModule, BoardRoutingModule, SharedModule],
})
export class BoardModule {}
