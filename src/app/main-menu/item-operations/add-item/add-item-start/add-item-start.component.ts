import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { Item } from '../../../../shared/item.model'
import { ItemType } from '../../../../shared/itemType.model'
import { Storage } from '../../../../shared/storage.model'
import { AddItemService } from '../addItem.service';
import { ShowComponentService } from 'src/app/showComponent.service';
import { HttpClient } from '@angular/common/http';
import { ItemPicture } from 'src/app/shared/itemPicture.model';

@Component({
  selector: 'app-add-item-start',
  templateUrl: './add-item-start.component.html',
  styleUrls: ['./add-item-start.component.css'],
  providers: []

})
export class AddItemStartComponent implements OnInit { 

  controlsItemPictures = null; 
  addItemForm: FormGroup;
  addedItem: Item = new Item();

  places: Storage[] = [];
  itemTypes: ItemType[] = [];

  placeDefault = null;
  typeDefault = null;

  //хранит все файлы для загрузки
  selectedFiles: File[] = [];
  //объекты картинок для записи в базу
  itemPicturesToWrite: ItemPicture[] = [];

  //для проверки уникальности ключа
  keyExistFlag: boolean = false;
  photoNameIsExistFlag: boolean = false;

  testName = "asfsdfsdf"
  
   constructor(private addItemService: AddItemService, 
                private showComponentService: ShowComponentService,
              private http: HttpClient,  
                ) { }

   

  ngOnInit(): void {
    //связывает форму с шаблоном
    this.addItemForm = new FormGroup({
      "name": new FormControl(null, [Validators.required]),
      "description": new FormControl(null),
      "key": new FormControl(null, [Validators.required]),
      "incomeDate": new FormControl(new Date()),
      "itemPictures": new FormArray([]),
      "place": new FormControl(null, [Validators.required]),
      "type": new FormControl(null, [Validators.required]),
    });

    this.controlsItemPictures = (<FormArray>this.addItemForm.get('itemPictures')).controls;

    //Добыть с сервера Типы и места для селектов в шаблоне 
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
    //Заполнить объекты файлов в объекте предмета, добавить файлы в объект, который будет записан
    for (let file of this.selectedFiles) {
      this.itemPicturesToWrite.push(new ItemPicture(
        file.name,
        this.addItemForm.value.id,
      ));
      
    }
    //По названию из формы вытащить Место и Тип
    this.addItemService.addedItem = new Item ( 
      this.addItemForm.value.name,
      this.addItemForm.value.description,
      this.itemPicturesToWrite,
      this.addItemForm.value.key,
      this.addItemForm.value.incomeDate,
      this.addItemService.getStorageByName(this.addItemForm.value.place),
      this.addItemService.getItemTypeByName(this.addItemForm.value.type),
    );

    //запись на сервер
   this.addItemService.addItem(this.selectedFiles);

   //переход на следующую страницу
   this.showComponentService.changeSceneTo('onItemAdded');

  }
  //По нажатии кнопки добавляет ещё одну форму для выгрузки фойла
  onAddPhotoPath() {
    const control = new FormControl(null);
    (<FormArray>this.addItemForm.get('itemPictures')).push(control)
  }

  //Действия после добавления файла
  onFileAdded(event) {
    //Запрос к серверу на уникальность
    let addedFileName: string = event.target.files[0].name; 
    this.http.get(
      this.showComponentService.serverPath + '/item/photoNameIsExist/' + addedFileName
    ).subscribe(responseData => {
      //понятия не имею, почему не передавалось присваиванием
      if(responseData == true) {
        this.photoNameIsExistFlag = true;
      }else {
        this.photoNameIsExistFlag = false;
      }
    });


    //возможность двойной загрузки через одно окно, надо удалять при повторном загрузке
    if(event.target.nextSibling.getAttribute("wasUploaded") == "false"){

      event.target.nextSibling.setAttribute("fileName", event.target.files[0].name);
      event.target.nextSibling.setAttribute("wasUploaded", "true");
      //проверка имени файла на уникальность


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

      //проверка имени на уникальность


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

  //после нажатия на кнопку "удалить"
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

  onKey(event) {
    this.http.get(
      this.showComponentService.serverPath + '/item/keyIsExist/' + event.target.value
    ).subscribe(responseData => {
      //понятия не имею, почему не передавалось присваиванием
      if(responseData == true) {
        this.keyExistFlag = true;
      }else {
        this.keyExistFlag = false;
      }
      console.log(this.keyExistFlag);
    });
  }
}
