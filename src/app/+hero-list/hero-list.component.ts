import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-hero-list',
  template: `
    <p>
      hero-list Works!
    </p>
  `,
  styles: []
})
export class HeroListComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
