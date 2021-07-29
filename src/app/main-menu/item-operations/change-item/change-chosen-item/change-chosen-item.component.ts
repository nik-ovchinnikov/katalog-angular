import { Component, OnInit } from '@angular/core';
import { ChangeItemInfoService } from '../changeItemInfo.service';
import { ShowComponentService } from 'src/app/showComponent.service';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Item } from 'src/app/shared/item.model';
import { Storage } from '../../../../shared/storage.model'
import { ItemType } from 'src/app/shared/itemType.model';

@Component({
  selector: 'app-change-chosen-item',
  templateUrl: './change-chosen-item.component.html',
  styleUrls: ['./change-chosen-item.component.css']
})
export class ChangeChosenItemComponent implements OnInit {

  constructor(
    private changeItemInfoService: ChangeItemInfoService,
    private showComponentService: ShowComponentService
  ) { }



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

   imgPathFormControllers: FormControl[] = [];

  ngOnInit(): void {
    //преобразования для FormArray
    this.changeItemInfoService.itemToChange.imagePaths.forEach((imgPath) => {
      this.imgPathFormControllers.push(new FormControl(imgPath));
    });

    this.addItemForm = new FormGroup({
      "name": new FormControl(this.changeItemInfoService.itemToChange.name),
      "description": new FormControl(this.changeItemInfoService.itemToChange.description),
      "key": new FormControl(this.changeItemInfoService.itemToChange.key),
      "incomeDate": new FormControl(this.changeItemInfoService.itemToChange.incomeDate),
      "imagePaths": new FormArray(this.imgPathFormControllers),
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
    this.changeItemInfoService.itemNewInfo = new Item (
      this.addItemForm.value.name,
      this.addItemForm.value.description,
      this.addItemForm.value.imagePaths,
      this.addItemForm.value.key,
      this.addItemForm.value.incomeDate,
      this.addItemForm.value.place,
      this.addItemForm.value.type,
    );
   this.showComponentService.changeSceneTo('itemChanged'); 
      
  }

  onAddPhotoPath() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.addItemForm.get('imagePaths')).push(control)
  }
}
