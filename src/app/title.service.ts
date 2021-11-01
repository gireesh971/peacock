import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private titleService: Title,
              private metaDataService: Meta) { }

  setTitle(title: string): void {
    this.titleService.setTitle(title);
    this.metaDataService.updateTag({
      name: 'description',
      content: title
    });
  }
}
