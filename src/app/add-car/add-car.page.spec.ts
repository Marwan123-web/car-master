import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { addCarPage } from './add-car.page';

describe('addCarPage', () => {
  let component: addCarPage;
  let fixture: ComponentFixture<addCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [addCarPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(addCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
