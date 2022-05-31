import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WandUpdateComponent } from './wand-update.component';

describe('WandUpdateComponent', () => {
  let component: WandUpdateComponent;
  let fixture: ComponentFixture<WandUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WandUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WandUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
