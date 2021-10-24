import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
              private location: Location,
              private titleService: Title) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.itemService.getItem(id)
        .subscribe(itemDetail => {
          this.itemDetail = itemDetail;
          this.currentImage = this.itemDetail.images[0];
          this.imageIndex = 0;
          this.titleService.setTitle("Peacock & Lotus -> "
              + itemDetail.category + " -> "
              + itemDetail.name);
        });
  }

  goBack(): void {
    this.location.back();
  }

  nextImage(): void {
    if (this.itemDetail != undefined) {
      this.imageIndex++;
      if (this.imageIndex >= this.itemDetail.images.length) {
        this.imageIndex = 0;
      }
      this.currentImage = this.itemDetail.images[this.imageIndex];
    }
  }

  prevImage(): void {
    if (this.itemDetail != undefined) {
      this.imageIndex--;
      if (this.imageIndex < 0) {
        this.imageIndex = this.itemDetail.images.length-1;
      }
      this.currentImage = this.itemDetail.images[this.imageIndex];
    }
  }

  itemDetail: ItemDetail | undefined;
  currentImage: string | undefined;
  imageIndex: number = 0;
}
