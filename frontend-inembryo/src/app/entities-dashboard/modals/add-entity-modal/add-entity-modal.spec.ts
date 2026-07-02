import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntityModal } from './add-entity-modal';

describe('AddEntityModal', () => {
  let component: AddEntityModal;
  let fixture: ComponentFixture<AddEntityModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEntityModal],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEntityModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
