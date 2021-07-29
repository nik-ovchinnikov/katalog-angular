import { Component, OnInit, ViewChild } from '@angular/core';
import { ShowAllPlaceItemsService } from './showAllPlaceItems.service';
import { ShowComponentService } from 'src/app/showComponent.service';
import { Storage } from 'src/app/shared/storage.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-show-all-placeitems',
  templateUrl: './show-all-placeitems.component.html',
  styleUrls: ['./show-all-placeitems.component.css'],
  providers: []
})
export class ShowAllPlaceitemsComponent implements OnInit {

  constructor(private showComponentSercvice: ShowComponentService,
              public showAllPlaceItemsService: ShowAllPlaceItemsService
  ) { }

  ngOnInit(): void {
  }

}
