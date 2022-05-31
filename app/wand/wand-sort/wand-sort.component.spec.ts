import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WandSortComponent } from './wand-sort.component';



describe('WandSortComponent', () => {
  let component: WandSortComponent;
  let fixture: ComponentFixture<WandSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WandSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WandSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
