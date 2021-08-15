import { Component, OnInit, ViewChild } from '@angular/core';
import { DeleteTypeService } from '../deleteType.service';
import { ShowComponentService } from 'src/app/showComponent.service';
import { Storage } from 'src/app/shared/storage.model';
import { NgForm } from '@angular/forms';
import { ItemType } from 'src/app/shared/itemType.model';

@Component({
  selector: 'app-show-type-list-delete',
  templateUrl: './show-type-list-delete.component.html',
  styleUrls: ['./show-type-list-delete.component.css']
})
export class ShowTypeListDeleteComponent implements OnInit {

  types: ItemType[] = [];

  @ViewChild('f', { static: false })
  chooseItemTypeForm: NgForm;

  constructor(
    private showComponentSercvice: ShowComponentService,
    private deleteTypeService: DeleteTypeService
  ) { }

  ngOnInit(): void {
    this.deleteTypeService.itemTypeList = [];
    this.deleteTypeService.getItemTypes();
    this.deleteTypeService.onListChanged.subscribe((typeListChanged: ItemType[]) => {
      this.types = typeListChanged;
    });
  }

  onSubmit() {
    this.deleteTypeService.getDeletedItemType(this.chooseItemTypeForm.value); 
    this.deleteTypeService.deleteTypes();
    this.showComponentSercvice.changeSceneTo('typeDeleted');
  }
}
