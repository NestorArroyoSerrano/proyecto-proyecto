import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoShowComponent } from './evento-show.component';

describe('EventoShowComponent', () => {
  let component: EventoShowComponent;
  let fixture: ComponentFixture<EventoShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
