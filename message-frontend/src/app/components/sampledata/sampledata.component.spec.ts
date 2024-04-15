import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampledataComponent } from './sampledata.component';

describe('SampledataComponent', () => {
  let component: SampledataComponent;
  let fixture: ComponentFixture<SampledataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampledataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampledataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
