import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemeterSlogComponent } from './demeter-slog.component';

describe('DemeterSlogComponent', () => {
  let component: DemeterSlogComponent;
  let fixture: ComponentFixture<DemeterSlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemeterSlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemeterSlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
