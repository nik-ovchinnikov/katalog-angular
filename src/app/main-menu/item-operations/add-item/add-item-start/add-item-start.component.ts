import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { Item } from '../../../../shared/item.model'
import { ItemType } from '../../../../shared/itemType.model'
import { Storage } from '../../../../shared/storage.model'
import { AddItemService } from '../addItem.service';
import { ShowComponentService } from 'src/app/showComponent.service';

@Component({
  selector: 'app-add-item-start',
  templateUrl: './add-item-start.component.html',
  styleUrls: ['./add-item-start.component.css'],
  providers: []

})
export class AddItemStartComponent implements OnInit {

  controlsImagePaths; 
  addItemForm: FormGroup;
  addedItem: Item = new Item();

  places: Storage[] = [];
  itemTypes: ItemType[] = [];

  placeDefault = null;
  typeDefault = null;
  
   constructor(private addItemService: AddItemService, 
                private showComponentService: ShowComponentService) { }

   

  ngOnInit(): void {
    this.addItemForm = new FormGroup({
      "name": new FormControl(null),
      "description": new FormControl(null),
      "key": new FormControl(null),
      "incomeDate": new FormControl(new Date()),
      "imagePaths": new FormArray([]),
      "place": new FormControl( this.placeDefault),
      "type": new FormControl( this.typeDefault),
    });
    this.controlsImagePaths = (<FormArray>this.addItemForm.get('imagePaths')).controls;
    //this.controlsImagePaths = this.addItemForm.get('imagePaths').control;
    //  this.addItemForm.patchValue({
    //    "type": this.itemTypes[0],
    //    "place": this.places[0],
    //  });

    //Добыть места

    //Добыть Типы
    this.addItemService.getLists();
    this.addItemService.storageListsChangedEmitter.subscribe((places) => {
      this.places = places;
      this.placeDefault = this.places[0].name;
    })
    this.addItemService.typesListsChangedEmitter.subscribe((types) => {
      this.itemTypes = types;
      this.typeDefault = this.itemTypes[0].name;
    });
  }
 
  onSubmit() {
    //По названию из формы вытащить Место и Тип

    this.addItemService.addedItem = new Item ( 
      this.addItemForm.value.name,
      this.addItemForm.value.description,
      this.addItemForm.value.imagePaths[0],
      this.addItemForm.value.key,
      this.addItemForm.value.incomeDate,
      this.addItemService.getStorageByName(this.addItemForm.value.place),
      this.addItemService.getItemTypeByName(this.addItemForm.value.type),
    );
   this.addItemService.addItem();
   this.showComponentService.changeSceneTo('onItemAdded'); 

  }

  onAddPhotoPath() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.addItemForm.get('imagePaths')).push(control)
  }

  
  
}
