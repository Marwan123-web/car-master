import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { morePage } from './more.page';

describe('morePage', () => {
  let component: morePage;
  let fixture: ComponentFixture<morePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [morePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(morePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
