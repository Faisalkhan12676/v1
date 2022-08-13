import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageprogressComponent } from './manageprogress.component';

describe('ManageprogressComponent', () => {
  let component: ManageprogressComponent;
  let fixture: ComponentFixture<ManageprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageprogressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
