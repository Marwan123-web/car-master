import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllCarsPhotosPage } from './all-cars-photos.page';

describe('AllCarsPhotosPage', () => {
  let component: AllCarsPhotosPage;
  let fixture: ComponentFixture<AllCarsPhotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCarsPhotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllCarsPhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
