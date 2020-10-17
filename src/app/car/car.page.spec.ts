import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { carPage } from './car.page';

describe('carPage', () => {
  let component: carPage;
  let fixture: ComponentFixture<carPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [carPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(carPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
