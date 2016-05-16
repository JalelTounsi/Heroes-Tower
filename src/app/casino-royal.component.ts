import { Component } from '@angular/core';
import { DashboardComponent } from './+dashboard';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HeroDetailComponent } from './+hero-detail';
import { HeroListComponent } from './+hero-list';

@Component({
  moduleId: module.id,
  selector: 'casino-royal-app',
  templateUrl: 'casino-royal.component.html',
  styleUrls: ['casino-royal.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent},
  {path: '/hero-detail', component: HeroDetailComponent},
  {path: '/hero-list', component: HeroListComponent}
])
export class CasinoRoyalAppComponent {
  title = 'casino-royal works!';
}
