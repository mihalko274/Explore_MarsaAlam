import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReefsComponent } from './reefs.component';

describe('ReefsComponent', () => {
  let component: ReefsComponent;
  let fixture: ComponentFixture<ReefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReefsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
