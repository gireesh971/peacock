import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { Category } from '../category';
import { ItemService } from '../item.service';
import { MessageService } from '../message.service';
import { TitleService } from '../title.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[] = [];

  constructor(private itemService: ItemService,
              private messageService: MessageService,
              private titleService: TitleService) {
    this.titleService.setTitle("Peacock & Lotus -> Products");
  }

  ngOnInit(): void {
    this.getItems();
  }
  getItems(): void {
    this.itemService.getItems()
        .subscribe(categories => {
          this.categories = categories;
        });
  }
}
