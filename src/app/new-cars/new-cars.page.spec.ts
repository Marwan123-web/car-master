import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { newCarsPage } from './new-cars.page';

describe('newCarsPage', () => {
  let component: newCarsPage;
  let fixture: ComponentFixture<newCarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [newCarsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(newCarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
