import { APP_BASE_HREF } from '@angular/common/src/location/location_strategy';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        AppRoutingModule,
        MainModule
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]

    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
