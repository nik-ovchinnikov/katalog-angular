export class ShowComponentService {

    public serverPath: string = "http://localhost:8080";
    // public serverPath: string = "http://192.168.0.228:1204";
    // public serverPath: string = "http://192.168.0.229:1204"; 
       public valueStatusCollection = {
        
        mainMenu: true,
        
        addPlace: false,
            addPlaceStart: false,
            onPlaceAdded: false,
        changePlace: false,
            placeList: false,
            changePlaceInfo: false,
            placeChanged: false,
        deletePlace: false,
            showPlaces: false,
            placeDeleted: false,
        showAllPlaces: false,
        
        addItem: false,
            addItemStart: false,
            onItemAdded: false,
        changeItem: false,
            showAllItemsList: false,
            changeChosenItem: false,
            itemChanged: false,
        deleteItem: false,
            showItemDeleteList: false,
            itemDeleted: false,
        showAllItems: false,
        showAllItemsOfStorage: false,
            choosePlace: false,
            placeItemsShown: false,
        showAllItemsOfType: false,
            chooseTypes: false,
            typeItemsShown: false,

        addItemType: false,
            addTypeStart: false,
            typeAdded: false,
        changeItemType: false,
            showTypeList:false,
            changeTypeInfo: false,
            typeChanged: false,
        deleteItemType: false,
            showType: false,
            typeDeleted: false,
        showAllItemTypes: false,
    }
    
  public changeSceneTo(id: string) {
    for (let elem in this.valueStatusCollection) {
      this.valueStatusCollection[elem] = false;
      if(elem == id) {
        this.valueStatusCollection[elem] = true;
      }
    }
  }
}