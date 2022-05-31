import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WandDetailComponent } from './wand-detail.component';

describe('WandDetailComponent', () => {
  let component: WandDetailComponent;
  let fixture: ComponentFixture<WandDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WandDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WandDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
