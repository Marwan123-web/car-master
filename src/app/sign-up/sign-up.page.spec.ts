import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { signUpPage } from './sign-up.page';

describe('signUpPage', () => {
  let component: signUpPage;
  let fixture: ComponentFixture<signUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [signUpPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(signUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
