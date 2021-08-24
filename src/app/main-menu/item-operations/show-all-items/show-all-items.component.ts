import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { ItemType } from 'src/app/shared/itemType.model';
import { Storage } from 'src/app/shared/storage.model';
import { ShowAllItemsService } from './showAllItems.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-show-all-items',
  templateUrl: './show-all-items.component.html',
  styleUrls: ['./show-all-items.component.css'],
  providers: [ShowAllItemsService]
})
export class ShowAllItemsComponent implements OnInit {

  private itemsList: Item[] = [];

  constructor(private showAllItemsService: ShowAllItemsService,
    private sanitizer: DomSanitizer,
    ) { }

  ngOnInit(): void {
    this.showAllItemsService.getItems();
    this.showAllItemsService.listEmitter.subscribe((items) => {
      this.itemsList = items;
      for (let item of this.itemsList) {
        for (let ip of item.itemPicture) {
          ip.trustedURL = this.sanitizer.bypassSecurityTrustUrl(ip.path + ip.name);
          //console.log(ip.trustedURL);
        }
      }
    });
  }

}
