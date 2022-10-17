import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { BoardNode } from './interfaces/board-node';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  getAll(): Observable<BoardNode[]> {
    const nodes = localStorage.getItem('nodes');
    let nodesParsed: BoardNode[] = [];

    if (nodes) {
      nodesParsed = JSON.parse(nodes) as BoardNode[];
      // Sorts obtained data, guarantees that sorting
      // will always be in the desired order, even if we change the data in the localstorage.
      nodesParsed.sort(
        (prev, next) =>
          new Date(next.date).getTime() - new Date(prev.date).getTime()
      );
    }

    return of(nodesParsed);
  }

  get(id: number): Observable<BoardNode | undefined> {
    const nodes = localStorage.getItem('nodes');
    let nodesParsed: BoardNode[] = [];

    if (nodes) {
      nodesParsed = JSON.parse(nodes) as BoardNode[];
    }

    const targetNode = nodesParsed.find((node) => node.id === id);

    return of(targetNode);
  }

  post(body: BoardNode): Observable<BoardNode> {
    const nodes = localStorage.getItem('nodes');
    let nodesParsed: BoardNode[] = [];

    if (nodes) {
      nodesParsed = JSON.parse(nodes) as BoardNode[];
    }

    body.id = nodesParsed.length + 1;
    const nodesReady = [body, ...nodesParsed];
    localStorage.setItem('nodes', JSON.stringify(nodesReady));

    return of(body);
  }

  put(id: number, body: BoardNode): Observable<BoardNode> {
    const nodes = localStorage.getItem('nodes');
    let nodesParsed: BoardNode[] = [];

    if (nodes) {
      nodesParsed = JSON.parse(nodes) as BoardNode[];
    }

    const targetNodeIndex = nodesParsed.findIndex((node) => node.id === id);

    if (targetNodeIndex !== -1) {
      nodesParsed[targetNodeIndex] = body;
      localStorage.setItem('nodes', JSON.stringify(nodesParsed));
    }

    return of(body);
  }

  delete(id: number): Observable<BoardNode[]> {
    const nodes = localStorage.getItem('nodes');

    if (nodes) {
      const nodesParsed = JSON.parse(nodes) as BoardNode[];
      const nodesParsedFiltered = nodesParsed.filter((node) => node.id !== id);
      localStorage.setItem('nodes', JSON.stringify(nodesParsedFiltered));

      return of(nodesParsedFiltered);
    }

    return EMPTY;
  }
}
