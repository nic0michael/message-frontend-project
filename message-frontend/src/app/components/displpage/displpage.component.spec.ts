import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplpageComponent } from './displpage.component';

describe('DisplpageComponent', () => {
  let component: DisplpageComponent;
  let fixture: ComponentFixture<DisplpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
