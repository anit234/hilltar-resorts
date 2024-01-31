import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsAndSuitsComponent } from './rooms-and-suits.component';

describe('RoomsAndSuitsComponent', () => {
  let component: RoomsAndSuitsComponent;
  let fixture: ComponentFixture<RoomsAndSuitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsAndSuitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsAndSuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
