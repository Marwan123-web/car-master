import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { reviews } from './reviews.page';

describe('reviews', () => {
  let component: reviews;
  let fixture: ComponentFixture<reviews>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [reviews],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(reviews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
