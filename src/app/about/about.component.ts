import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: TitleService) {
    this.titleService.setTitle("Peacock & Lotus -> About Us");
  }

  ngOnInit(): void {
  }

}
