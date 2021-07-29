import { Component, OnInit } from '@angular/core';
import { ShowAllTypeItemsService } from './showAllTypeItems.service';

@Component({
  selector: 'app-show-all-typeitems',
  templateUrl: './show-all-typeitems.component.html',
  styleUrls: ['./show-all-typeitems.component.css'],
  providers: [ShowAllTypeItemsService]
})
export class ShowAllTypeitemsComponent implements OnInit {

  constructor(
    private showAllTypeItemsService: ShowAllTypeItemsService    
  ) { }

  ngOnInit(): void {
  }

}
