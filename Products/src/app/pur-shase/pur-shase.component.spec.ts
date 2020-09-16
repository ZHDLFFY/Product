import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurShaseComponent } from './pur-shase.component';

describe('PurShaseComponent', () => {
  let component: PurShaseComponent;
  let fixture: ComponentFixture<PurShaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurShaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurShaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
