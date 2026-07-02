import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesDashboard } from './entities-dashboard';

describe('EntitiesDashboard', () => {
  let component: EntitiesDashboard;
  let fixture: ComponentFixture<EntitiesDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntitiesDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(EntitiesDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
