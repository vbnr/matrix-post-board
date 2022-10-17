import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NodeFormModalComponent } from './node-form-modal.component';

describe('NodeFormModalComponent', () => {
  let component: NodeFormModalComponent;
  let fixture: ComponentFixture<NodeFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NodeFormModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NodeFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
