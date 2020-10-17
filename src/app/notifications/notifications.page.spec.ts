import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { notifications } from './notifications.page';

describe('notifications', () => {
  let component: notifications;
  let fixture: ComponentFixture<notifications>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [notifications],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(notifications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
