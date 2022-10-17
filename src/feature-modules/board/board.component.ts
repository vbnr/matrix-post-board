import { Component, OnInit } from '@angular/core';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BoardNode } from 'src/core/http/interfaces/board-node';
import { NodeService } from 'src/core/http/node.service';
import { NodeFormModalComponent } from './node-form-modal/node-form-modal.component';
import { UntilDestroy } from '@ngneat/until-destroy';
import { finalize } from 'rxjs';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  nodes?: BoardNode[];

  constructor(
    private modalService: BsModalService,
    private nodeService: NodeService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  onAddNewNode(): void {
    const initialState: ModalOptions = {
      initialState: {
        modal: { title: `Create a new node` },
        callBackFunc: (form: BoardNode) => {
          this.nodeService
            .post(form)
            .pipe(
              finalize(() => {
                this.modalService.hide();
              })
            )
            .subscribe(() => {
              this.loadData();
            });
        },
      },
    };

    this.modalService.show(NodeFormModalComponent, initialState);
  }

  onUpdateNewNode(node: BoardNode): void {
    const initialState: ModalOptions = {
      initialState: {
        modal: { title: `Update node - ${node.author}` },
        node,
        callBackFunc: (form: BoardNode) => {
          this.nodeService
            .put(node.id, form)
            .pipe(
              finalize(() => {
                this.modalService.hide();
              })
            )
            .subscribe(() => {
              this.loadData();
            });
        },
      },
    };

    this.modalService.show(NodeFormModalComponent, initialState);
  }

  onDeleteItem(id: number): void {
    this.nodeService.delete(id).subscribe((nodes) => {
      this.nodes = nodes;
    });
  }

  trackByFn(index: number, item: BoardNode) {
    return item.id;
  }

  private loadData(): void {
    this.nodeService.getAll().subscribe((nodes) => {
      this.nodes = nodes;
    });
  }
}
