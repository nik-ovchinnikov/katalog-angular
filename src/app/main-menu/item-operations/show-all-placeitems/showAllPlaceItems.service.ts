import { Storage } from 'src/app/shared/storage.model';
import { Item } from 'src/app/shared/item.model';
import { ItemType } from 'src/app/shared/itemType.model';

export class ShowAllPlaceItemsService {
   chosenStorage: Storage = new Storage();
   // формируется запросом в базу
   itemsToShow: Item[] = [
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