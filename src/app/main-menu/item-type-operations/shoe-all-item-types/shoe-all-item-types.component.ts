import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ItemType } from 'src/app/shared/itemType.model';

@Component({
  selector: 'app-shoe-all-item-types',
  templateUrl: './shoe-all-item-types.component.html',
  styleUrls: ['./shoe-all-item-types.component.css']
})
export class ShoeAllItemTypesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //!! Это запрос к серверу
  types: ItemType[] = [
    new ItemType("Крест напрестольный"),
    new ItemType("Евангелие напрестольное"),
    new ItemType("Евангелие требное"),
    new ItemType("Крест требный"),
    new ItemType("Дарохранительница"),
  ]
}
