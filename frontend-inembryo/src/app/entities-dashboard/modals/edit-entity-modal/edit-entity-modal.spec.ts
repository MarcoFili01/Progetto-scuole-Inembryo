import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntityModal } from './edit-entity-modal';

describe('EditEntityModal', () => {
  let component: EditEntityModal;
  let fixture: ComponentFixture<EditEntityModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEntityModal],
    }).compileComponents();

    fixture = TestBed.createComponent(EditEntityModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
