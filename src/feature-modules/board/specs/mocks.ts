import { of } from 'rxjs';
import { BoardNode } from 'src/core/http/interfaces/board-node';
import { NodeService } from 'src/core/http/node.service';

export const MockBoardNodes: BoardNode[] = [
  {
    id: 1,
    author: 'Jow',
    content: 'favorite content',
    date: '2022-10-10',
  },
  {
    id: 2,
    author: 'Jow',
    content: 'favorite content',
    date: '2022-11-10',
  },
];

export const MockNodeService: NodeServiceType = {
  get: (_id: number) => {
    return of(MockBoardNodes[0]);
  },

  getAll: () => {
    return of(MockBoardNodes);
  },

  put: (_id: number, _body: BoardNode) => {
    return of(MockBoardNodes[0]);
  },

  delete: (id: number) => {
    return of([MockBoardNodes[0]]);
  },

  post: (body: BoardNode) => {
    return of({ ...body, id: 3 });
  },
};

type NodeServiceType = { [key in keyof NodeService]: any };
