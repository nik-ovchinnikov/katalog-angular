import { Component, OnInit } from '@angular/core';
import { ChangeItemInfoService } from '../changeItemInfo.service';
import { ShowComponentService } from 'src/app/showComponent.service';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Item } from 'src/app/shared/item.model';
import { Storage } from '../../../../shared/storage.model'
import { ItemType } from 'src/app/shared/itemType.model';
import { AddItemService } from '../../add-item/addItem.service';
import { ItemPicture } from 'src/app/shared/itemPicture.model';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-change-chosen-item',
  templateUrl: './change-chosen-item.component.html',
  styleUrls: ['./change-chosen-item.component.css']
})
export class ChangeChosenItemComponent implements OnInit {

  controlsItemPictures = null; 
  controlsOldItemPictures = null;
  changeItemForm: FormGroup;
  addedItem: Item = new Item();

  places: Storage[] = [];
  itemTypes: ItemType[] = [];

  test: number = 3;

  recievedLists = [];

  //хранит все файлы для загрузки
  selectedFiles: File[] = [];
  //объекты для записи
  itemPicturesToWrite: ItemPicture[] = [];
  itemPicturesToUpdate: ItemPicture[] = [];
  itemPictureOld: ItemPicture[] = [];
  itemPictureNew: ItemPicture[] = [];
  //для отображения старых картинок
  formArrayOldPictures: FormArray;

  //для валидации формы
  keyIsExistFlag: boolean = false;
  newPhotoNameIsExistFlag: boolean = false;
  oldPhotoNameIsExistFlag: boolean = false;
  
   constructor(private changeItemInfoService: ChangeItemInfoService, 
                private showComponentService: ShowComponentService,
                private http: HttpClient,
                ) { }

   

  ngOnInit(): void {
    this.changeItemInfoService.counterUpdate = 0;
    this.itemPictureOld = [];
    this.itemPictureNew= [];
    this.itemPicturesToUpdate = [];

    //Добыть Типы
    //Добыть места
    this.recievedLists = this.changeItemInfoService.getLists();
    this.places = this.recievedLists[0];
    this.itemTypes = this.recievedLists[1];
    //уже имеющиеся ItemPictures на серевере
    this.itemPictureOld = this.itemPictureOld.concat(this.changeItemInfoService.itemToChange.itemPicture);
    //Object.assign(this.itemPictureNew, this.itemPictureOld);
    // this.itemPictureOld.forEach(elem => {
    //   this.itemPictureNew.push(elem);
    // });
    //Добавим их в список отображения
    //У них только кнопка удалить и imput c названием файла на серверю плюс preview
    this.changeItemForm = new FormGroup({
      "name": new FormControl(this.changeItemInfoService.itemToChange.name, [Validators.required]),
      "description": new FormControl(this.changeItemInfoService.itemToChange.description),
      "key": new FormControl(this.changeItemInfoService.itemToChange.key, [Validators.required]),
      "incomeDate": new FormControl(this.changeItemInfoService.itemToChange.incomeDate),
      //показать в форме те, что уже есть в ItemPictures
      "oldItemPictures": new FormArray([]),
      "itemPictures": new FormArray([]),
      "type": new FormControl( this.changeItemInfoService.itemToChange.itemType.name, [Validators.required]),
      "place": new FormControl( this.changeItemInfoService.itemToChange.storage.name, [Validators.required]),
    });
    this.controlsItemPictures = (<FormArray>this.changeItemForm.get('itemPictures')).controls;
    this.controlsOldItemPictures = (<FormArray>this.changeItemForm.get('oldItemPictures')).controls;
    //Получаем старые данные о фото
    // this.itemPictureOld = this.changeItemInfoService.itemToChange.itemPicture;
    //Добавим данные о всех старых фото
    this.formArrayOldPictures = (<FormArray>this.changeItemForm.get('oldItemPictures'));
    for (let itemPicture of this.itemPictureOld) {
      this.formArrayOldPictures.push(new FormControl(itemPicture.name, [Validators.required]))
    }

    //создание массива для внесения изменений
    for (let itemPicture2 of this.itemPictureOld) {
      itemPicture2.previousName = itemPicture2.name;
      this.itemPictureNew.push(itemPicture2);
    }
    // this.itemPictureNew = Array.from(this.itemPictureOld);
   
  }


  onSubmit() {
    
    //Заполнить объекты файлов в объекте предмета, добавить файлы в объект, который будет записан
    for (let file of this.selectedFiles) {
      this.itemPicturesToWrite.push(new ItemPicture(
        file.name,
        this.changeItemForm.value.id,
      ));
    }
    //Записываем новые и изменённые объекты фото для отправки на сервер
    //this.itemPicturesToUpdate.concat(this.itemPictureNew.concat(this.itemPicturesToWrite));
    for (let ip of this.itemPictureNew) {
      this.itemPicturesToUpdate.push(ip);
    }
    for (let ip of this.itemPicturesToWrite) {
      this.itemPicturesToUpdate.push(ip);
    }
    console.log(this.itemPicturesToUpdate);
    

    this.itemPicturesToUpdate.concat(this.itemPictureNew.concat()); 
    this.changeItemInfoService.itemNewInfo = new Item ( 
      this.changeItemForm.value.name,
      this.changeItemForm.value.description,
      this.itemPicturesToUpdate,
      this.changeItemForm.value.key,
      this.changeItemForm.value.incomeDate,
      this.changeItemInfoService.getStorageByName(this.changeItemForm.value.place),
      this.changeItemInfoService.getItemTypeByName(this.changeItemForm.value.type),
      this.changeItemInfoService.itemToChange.id,
    );
      //перед записью удалить предыдущие
      this.changeItemInfoService.updateItem(this.selectedFiles);
   this.showComponentService.changeSceneTo('itemChanged'); 

  }
  //По нажатии кнопки добавляет ещё одну форму для выгрузки фойла
  onAddPhotoPath() {
    const control = new FormControl(null);
    (<FormArray>this.changeItemForm.get('itemPictures')).push(control)
  }

  //Действия после добавления файла
  onFileAdded(event) {

 //Запрос к серверу на уникальность
 let addedFileName: string = event.target.files[0].name; 
 this.http.get(
   this.showComponentService.serverPath + '/item/photoNameIsExist/' + addedFileName
 ).subscribe(responseData => {
   //понятия не имею, почему не передавалось присваиванием
   if(
    (responseData == true) 
     ) {
     this.newPhotoNameIsExistFlag = true;
   }else {
     this.newPhotoNameIsExistFlag = false;
   }
 });

    //возможность двойной загрузки через одно окно, надо удалять при повторном загрузке
    if(event.target.nextSibling.getAttribute("wasUploaded") == "false"){

      event.target.nextSibling.setAttribute("fileName", event.target.files[0].name);
      event.target.nextSibling.setAttribute("wasUploaded", "true");
      
      //добавление файла в массив
      this.selectedFiles.push(event.target.files[0]);
    }else{
      //удаляем старую фото
      let fileToRemove: File = null;
      let fileNameToRemove = event.target.nextSibling.getAttribute("fileName");
      this.selectedFiles.forEach((file) => {
        if(file.name == fileNameToRemove) {
          fileToRemove = file;
        }
      });
      this.selectedFiles.splice(this.selectedFiles.indexOf(fileToRemove), 1);

      //добавляем новое фото
      event.target.nextSibling.setAttribute("fileName", event.target.files[0].name);
      this.selectedFiles.push(event.target.files[0]);
    }
    
    //передадим этот файл в изображение
    //перенести в службу!!!! addItem
    const reader = new FileReader();
    reader.onloadend = () => {
     event.target.nextSibling.nextSibling.src = reader.result;  
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  //удаляет недавно добавленное фото
  onClickDeletePicture(event) {
    event.preventDefault();
    let fileToRemove: File = null;
    let fileNameToRemove = event.target.getAttribute("fileName");
    this.selectedFiles.forEach((file) => {
      if(file.name == fileNameToRemove) {
        fileToRemove = file;
      }
    });

     this.selectedFiles.splice(this.selectedFiles.indexOf(fileToRemove), 1);
    //непосредственно удаление
    event.target.parentNode.parentNode.remove();
    //Может удаляться без загруженного файла
  }

  //После изменения имени фото
  onKeyOldPictureName(event) {
    //запрос на уникальность, преобразование формы (разрешение на отправку)
    this.http.get(
      this.showComponentService.serverPath + '/item/photoNameIsExist/' + event.target.value
    ).subscribe(responseData => {
      //понятия не имею, почему не передавалось присваиванием
      //По id найдём itemPicture
      let currentItemPicture: ItemPicture = null;

      for(let itemPicture of this.itemPictureOld) {
        if(itemPicture.id == event.target.id) {
          currentItemPicture = itemPicture;
        }
      }
      
      if(
        (responseData == true) &&
        (event.target.value != currentItemPicture.previousName)
      ) {
        this.oldPhotoNameIsExistFlag = true;
      }else {
        this.oldPhotoNameIsExistFlag = false;
        //изменеие в массиве
        //добыть id
        let changedItemPictureId = event.target.id
        for (let itemPicture of this.itemPictureNew) {
          // по Id сделать изменение
          if(itemPicture.id == changedItemPictureId){
            itemPicture.name = event.target.value
          }
        }

        console.log(this.itemPictureNew);
        console.log(this.itemPictureOld);
      }
    });
  }

  //После удалении старого фото
  onClickDeleteOldPicture(event) {
    event.preventDefault();
    let idToDelete = event.target.previousSibling.id;
    for(let ip of this.itemPictureNew) {
      if(ip.id == idToDelete){
        ip.toDelete = true;
        //this.itemPictureNew.splice(this.itemPictureNew.indexOf(ip), 1);
      }
    }
    event.target.parentNode.parentNode.remove();
  }

  onKeyKey(event) {
    this.http.get(
      this.showComponentService.serverPath + '/item/keyIsExist/' + event.target.value
    ).subscribe(responseData => {
      let oldName: string = this.changeItemInfoService.itemToChange.key;
      //понятия не имею, почему не передавалось присваиванием
      // console.log('аыфваыфаыф' == oldName);
      // console.log(event.target.value.trim());
      // console.log(event.target.value.trim() == oldName);
      // console.log('df' === 'df');
      if(
        (responseData == true) &&
        (event.target.value != this.changeItemInfoService.itemToChange.key)
      ){ 
          this.keyIsExistFlag = true;
      } else {
        this.keyIsExistFlag = false;
      }
    });
  }

}
