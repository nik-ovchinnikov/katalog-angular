import { Component, OnInit } from '@angular/core';
import { ShowAllTypeItemsService } from '../showAllTypeItems.service';

@Component({
  selector: 'app-type-items-shown',
  templateUrl: './type-items-shown.component.html',
  styleUrls: ['./type-items-shown.component.css']
})
export class TypeItemsShownComponent implements OnInit {


  constructor(
    private showAllTypeItemsService: ShowAllTypeItemsService    
  ) { }
  ngOnInit(): void {
  }

}
