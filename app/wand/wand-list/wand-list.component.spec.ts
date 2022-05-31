import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WandListComponent } from './wand-list.component';

describe('WandListComponent', () => {
  let component: WandListComponent;
  let fixture: ComponentFixture<WandListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WandListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
