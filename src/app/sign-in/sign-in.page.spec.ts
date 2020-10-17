import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { signInPage } from './sign-in.page';

describe('signInPage', () => {
  let component: signInPage;
  let fixture: ComponentFixture<signInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [signInPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(signInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
