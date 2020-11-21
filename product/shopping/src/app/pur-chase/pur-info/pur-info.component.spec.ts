import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurInfoComponent } from './pur-info.component';

describe('PurInfoComponent', () => {
  let component: PurInfoComponent;
  let fixture: ComponentFixture<PurInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
