import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { preownedCarsPage } from './preowned-cars.page';

describe('preownedCarsPage', () => {
  let component: preownedCarsPage;
  let fixture: ComponentFixture<preownedCarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [preownedCarsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(preownedCarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
