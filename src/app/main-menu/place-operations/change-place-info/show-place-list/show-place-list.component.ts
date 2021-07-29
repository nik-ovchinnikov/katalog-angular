import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { Storage } from '../../../../shared/storage.model';
import { NgForm } from '@angular/forms';
import { ChangePlaceInfoService } from '../changePlaceInfo.service';
import { ShowComponentService } from 'src/app/showComponent.service';

@Component({
  selector: 'app-show-place-list',
  templateUrl: './show-place-list.component.html',
  styleUrls: ['./show-place-list.component.css']
})
export class ShowPlaceListComponent implements OnInit {

  constructor(private changePlaceInfoService: ChangePlaceInfoService,
              private showComponentService: ShowComponentService) { }

  ngOnInit(){
  }
  //!! это заменяет запрос в базу данных
  places: Storage[] = [
    new Storage('Ризница'),
    new Storage('Клирос Знаменского Храма'),
    new Storage('Алтарь Спасского собора'),
  ];

  @ViewChild('f', { static: false })
  choosePlaceForm: NgForm;


  onSubmit() {
    this.changePlaceInfoService.oldStorageInfo.name = this.choosePlaceForm.value.placeToChange;
    this.showComponentService.changeSceneTo('changePlaceInfo');

  }
}
