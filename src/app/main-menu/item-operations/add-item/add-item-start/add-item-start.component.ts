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

  //!! Это запрос к серверу
  places: Storage[] = [
    new Storage("Ризница"),
    new Storage("Сосудохранительница"),
    new Storage("Клирос знаменского храма"),
    new Storage("Клирос никольского храма"),
  ]

  //!! Это запрос к серверу
  itemTypes: ItemType[] = [
    new ItemType("Крест напрестольный"),
    new ItemType("Евангелие напрестольное"),
    new ItemType("Евангелие требное"),
    new ItemType("Крест требный"),
    new ItemType("Дарохранительница"),
  ]
   constructor(private addItemService: AddItemService, 
                private showComponentService: ShowComponentService) { }

   

  ngOnInit(): void {
    this.addItemForm = new FormGroup({
      "name": new FormControl(null),
      "description": new FormControl(null),
      "key": new FormControl(null),
      "incomeDate": new FormControl(new Date()),
      "imagePaths": new FormArray([]),
      "place": new FormControl(this.places[0].name),
      "type": new FormControl(this.itemTypes[0].name),
    });
    this.controlsImagePaths = (<FormArray>this.addItemForm.get('imagePaths')).controls;
    //this.controlsImagePaths = this.addItemForm.get('imagePaths').control;
    //  this.addItemForm.patchValue({
    //    "type": this.itemTypes[0],
    //    "place": this.places[0],
    //  });
  }
 
  onSubmit() {
     //this.addedItem = new Item (
    this.addItemService.addedItem = new Item (
      this.addItemForm.value.name,
      this.addItemForm.value.description,
      this.addItemForm.value.imagePaths,
      this.addItemForm.value.key,
      this.addItemForm.value.incomeDate,
      this.addItemForm.value.place,
      this.addItemForm.value.type,
    );
   this.showComponentService.changeSceneTo('onItemAdded'); 

  }

  onAddPhotoPath() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.addItemForm.get('imagePaths')).push(control)
  }

  
  
}
