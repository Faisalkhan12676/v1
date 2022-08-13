import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressIndexComponent } from './progress-index.component';

describe('ProgressIndexComponent', () => {
  let component: ProgressIndexComponent;
  let fixture: ComponentFixture<ProgressIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
