import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private titleService: TitleService) {
    this.titleService.setTitle("Peacock & Lotus -> Contact Us");
  }

  ngOnInit(): void {
  }

}
