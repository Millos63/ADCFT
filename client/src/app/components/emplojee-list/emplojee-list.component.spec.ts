import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplojeeListComponent } from './emplojee-list.component';

describe('EmplojeeListComponent', () => {
  let component: EmplojeeListComponent;
  let fixture: ComponentFixture<EmplojeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplojeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplojeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
