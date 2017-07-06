import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-landing-page',
  templateUrl: 'landing-page.html'
})

export class LandingPage {
  constructor() {

  }

  @ViewChild(Slides) slides: Slides;
}
