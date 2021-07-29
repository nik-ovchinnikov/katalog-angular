import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { ItemType } from 'src/app/shared/itemType.model';
import { Storage } from 'src/app/shared/storage.model';

@Component({
  selector: 'app-show-all-items',
  templateUrl: './show-all-items.component.html',
  styleUrls: ['./show-all-items.component.css']
})
export class ShowAllItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    items = [
        new Item(
          "Крест серебрянный требный",
          "Крест серебрянный требный. Производство Софрино. Среднего размера. Есть царапины. Выносится на Господские праздники",
          ["sadfsf", "sfafsfsfd", "afdsafsaddf", "dafsdfasf"],
          "КCT1",
          new Date(),
          new Storage("Сосудохранительница"),
          new ItemType("Крест Требный")
        ),
        new Item(
          "Крест золотой",
          "Крест  золтойтребный. Производство Софрино. Малого размера. Есть царапины. Выносится на Господские праздники",
          ["sadfsf", "sfafsfsfd", "afdsafsaddf", "dafsdfasf"],
          "КЗT1",
          new Date(),
          new Storage("Ризница"),
          new ItemType("Крест Требный")
        ), 
        new Item(
          
          "Евангелие золотой",
          "Евангелие золтое требный. Производство Софрино. Среднего размера. Есть царапины. Выносится на Господские праздники",
          ["sadfsf", "sfafsfsfd", "afdsafsaddf", "dafsdfasf"],
          "ЕЗT1",
          new Date(),
          new Storage("Ризница"),
          new ItemType("Евангелие")
        ),
    ]
}
