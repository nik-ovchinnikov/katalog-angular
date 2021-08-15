import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeItemTypeService } from '../changeItemType.service';
import { ShowComponentService } from 'src/app/showComponent.service';
import { Storage } from 'src/app/shared/storage.model';
import { NgForm } from '@angular/forms';
import { ItemType } from 'src/app/shared/itemType.model';

@Component({
  selector: 'app-show-type-list',
  templateUrl: './show-type-list.component.html',
  styleUrls: ['./show-type-list.component.css']
})
export class ShowTypeListComponent implements OnInit {

  types: ItemType[] = [];
  
  @ViewChild('f', { static: false })
  chooseTypeForm: NgForm;

  constructor(
    private changeItemTypeService: ChangeItemTypeService,
    private showComponentService: ShowComponentService
  ) { }
  

  ngOnInit(){
    this.changeItemTypeService.itemTypeList= [];
    this.changeItemTypeService.getItemTypes();
    this.changeItemTypeService.onListChanged.subscribe((listChanged: Storage[])=> {
      this.types= listChanged;
    });
  }

  onSubmit() {
    this.changeItemTypeService.getOldItemType(this.chooseTypeForm.value);
    this.showComponentService.changeSceneTo('changeTypeInfo');
  }
}
