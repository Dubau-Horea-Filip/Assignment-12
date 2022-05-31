import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WandFilterComponent } from './wand-filter.component';

describe('WandFilterComponent', () => {
  let component: WandFilterComponent;
  let fixture: ComponentFixture<WandFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WandFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WandFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
