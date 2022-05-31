import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WandDeleteComponent } from './wand-delete.component';

describe('WandDeleteComponent', () => {
  let component: WandDeleteComponent;
  let fixture: ComponentFixture<WandDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WandDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WandDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
