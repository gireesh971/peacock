import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { TitleService } from './title.service';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Peacock';

  constructor(public router: Router, private titleService: TitleService) {
    this.titleService.setTitle("Peacock & Lotus");
    // subscribe to router events and send page views to Google Analytics
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
    }
    });
  }
}
