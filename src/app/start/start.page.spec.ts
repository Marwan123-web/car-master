import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { startPage } from './start.page';

describe('startPage', () => {
  let component: startPage;
  let fixture: ComponentFixture<startPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [startPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(startPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
