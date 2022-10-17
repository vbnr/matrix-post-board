import { Component, Input, TemplateRef } from '@angular/core';
import { BoardNode } from 'src/core/http/interfaces/board-node';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent {
  @Input() actionsTpl?: TemplateRef<unknown>;
  @Input() node?: BoardNode;
}
