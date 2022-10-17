import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { NodeService } from 'src/core/http/node.service';
import { BoardComponent } from './board.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MockBoardNodes, MockNodeService } from './specs/mocks';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalModule.forRoot(), HttpClientTestingModule, SharedModule],
      declarations: [BoardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: BsModalService,
          useValue: {
            show: (_component: unknown, arg: any) => {
              arg.initialState.callBackFunc();
            },
          },
        },
        {
          provide: NodeService,
          useValue: MockNodeService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load all nodes', () => {
    expect(component.nodes).toEqual(MockBoardNodes);
  });
});
