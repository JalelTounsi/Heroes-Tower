import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CasinoRoyalAppComponent } from '../app/casino-royal.component';

beforeEachProviders(() => [CasinoRoyalAppComponent]);

describe('App: CasinoRoyal', () => {
  it('should create the app',
      inject([CasinoRoyalAppComponent], (app: CasinoRoyalAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'casino-royal works!\'',
      inject([CasinoRoyalAppComponent], (app: CasinoRoyalAppComponent) => {
    expect(app.title).toEqual('casino-royal works!');
  }));
});
