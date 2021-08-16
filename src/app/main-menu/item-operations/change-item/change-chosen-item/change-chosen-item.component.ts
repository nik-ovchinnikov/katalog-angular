import { Component, OnInit } from '@angular/core';
import { ChangeItemInfoService } from '../changeItemInfo.service';
import { ShowComponentService } from 'src/app/showComponent.service';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Item } from 'src/app/shared/item.model';
import { Storage } from '../../../../shared/storage.model'
import { ItemType } from 'src/app/shared/itemType.model';
import { AddItemService } from '../../add-item/addItem.service';

@Component({
  selector: 'app-change-chosen-item',
  templateUrl: './change-chosen-item.component.html',
  styleUrls: ['./change-chosen-item.component.css']
})
export class ChangeChosenItemComponent implements OnInit {

  controlsImagePaths; 
  addItemForm: FormGroup;
  addedItem: Item = new Item();

  places: Storage[] = [];
  itemTypes: ItemType[] = [];

  recievedLists = [];

  
   constructor(private changeItemInfoService: ChangeItemInfoService, 
                private showComponentService: ShowComponentService) { }

   

  ngOnInit(): void {
    this.changeItemInfoService.counterUpdate = 0;
    //console.log(this.changeItemInfoService.itemToChange);
    //Добыть Типы
    //Добыть места
    this.recievedLists = this.changeItemInfoService.getLists();
    this.places = this.recievedLists[0];
    this.itemTypes = this.recievedLists[1];
    // console.log(this.changeItemInfoService.itemToChange);
    // console.log(this.places);
    // console.log(this.itemTypes);
    
    this.addItemForm = new FormGroup({
      "name": new FormControl(this.changeItemInfoService.itemToChange.name),
      "description": new FormControl(this.changeItemInfoService.itemToChange.description),
      "key": new FormControl(this.changeItemInfoService.itemToChange.key),
      "incomeDate": new FormControl(this.changeItemInfoService.itemToChange.incomeDate),
      "imagePaths": new FormArray([]),
      "type": new FormControl( this.changeItemInfoService.itemToChange.itemType.name),
      "place": new FormControl( this.changeItemInfoService.itemToChange.storage.name),
    });
    this.controlsImagePaths = (<FormArray>this.addItemForm.get('imagePaths')).controls;
    //this.controlsImagePaths = this.addItemForm.get('imagePaths').control;
    //  this.addItemForm.patchValue({
    //    "type": this.itemTypes[0],
    //    "place": this.places[0],
    //  });
    console.log(213121);

  }

  onAddPhotoPath() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.addItemForm.get('imagePaths')).push(control)
  }

  onSubmit() {
    this.changeItemInfoService.itemNewInfo = new Item ( 
      this.addItemForm.value.name,
      this.addItemForm.value.description,
      null,
      this.addItemForm.value.key,
      this.addItemForm.value.incomeDate,
      this.changeItemInfoService.getStorageByName(this.addItemForm.value.place),
      this.changeItemInfoService.getItemTypeByName(this.addItemForm.value.type),
      this.changeItemInfoService.itemToChange.id,
    );

      this.changeItemInfoService.updateItem();
   this.showComponentService.changeSceneTo('itemChanged'); 

  }

}
