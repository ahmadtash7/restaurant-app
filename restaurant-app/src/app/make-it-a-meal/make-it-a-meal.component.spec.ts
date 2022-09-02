import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeItAMealComponent } from './make-it-a-meal.component';

describe('MakeItAMealComponent', () => {
  let component: MakeItAMealComponent;
  let fixture: ComponentFixture<MakeItAMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeItAMealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeItAMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
