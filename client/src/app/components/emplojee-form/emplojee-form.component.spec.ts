import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplojeeFormComponent } from './emplojee-form.component';

describe('EmplojeeFormComponent', () => {
  let component: EmplojeeFormComponent;
  let fixture: ComponentFixture<EmplojeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplojeeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplojeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
