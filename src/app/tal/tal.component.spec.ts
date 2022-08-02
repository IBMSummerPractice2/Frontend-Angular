import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalComponent } from './tal.component';

describe('TalComponent', () => {
  let component: TalComponent;
  let fixture: ComponentFixture<TalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
