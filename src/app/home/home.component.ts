import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemService: ItemService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getItems();
  }
  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }
}