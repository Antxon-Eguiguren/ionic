import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaPlanetasPage } from './lista-planetas.page';

describe('ListaPlanetasPage', () => {
  let component: ListaPlanetasPage;
  let fixture: ComponentFixture<ListaPlanetasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPlanetasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPlanetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
