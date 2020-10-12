import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurChaseComponent } from './pur-chase.component';

describe('PurChaseComponent', () => {
  let component: PurChaseComponent;
  let fixture: ComponentFixture<PurChaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurChaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurChaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
