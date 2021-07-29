import { ItemType } from 'src/app/shared/itemType.model';
import { Item } from 'src/app/shared/item.model';
import { Storage } from 'src/app/shared/storage.model';

export class ShowAllTypeItemsService {
    
   chosenType: ItemType= new ItemType();
   // формируется запросом в базу
   items: Item[] = [
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
   ];
}