import { Component, OnInit } from '@angular/core';
import { ItemDetail } from '../item-detail';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private itemService: ItemService,
              private location: Location) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.itemService.getItem(id)
        .subscribe(itemDetail => this.itemDetail = itemDetail);
  }

  goBack(): void {
    this.location.back();
  }

  itemDetail: ItemDetail | undefined;
}
