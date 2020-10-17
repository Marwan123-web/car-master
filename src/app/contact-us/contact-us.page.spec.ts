import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { contactUsPage } from './contact-us.page';

describe('contactUsPage', () => {
  let component: contactUsPage;
  let fixture: ComponentFixture<contactUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [contactUsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(contactUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
