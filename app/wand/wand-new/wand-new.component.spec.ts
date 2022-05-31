import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WandNewComponent } from './wand-new.component';

describe('WandNewComponent', () => {
  let component: WandNewComponent;
  let fixture: ComponentFixture<WandNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WandNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WandNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
