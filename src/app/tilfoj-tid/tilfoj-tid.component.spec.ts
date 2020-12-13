import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilfojTidComponent } from './tilfoj-tid.component';

describe('TilfojTidComponent', () => {
  let component: TilfojTidComponent;
  let fixture: ComponentFixture<TilfojTidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilfojTidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TilfojTidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
