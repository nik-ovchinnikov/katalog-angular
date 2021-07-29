import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HeaderComponent } from './header/header.component';
import { PlaceOperationsComponent } from './main-menu/place-operations/place-operations.component';
import { ItemOperationsComponent } from './main-menu/item-operations/item-operations.component';
import { ItemTypeOperationsComponent } from './main-menu/item-type-operations/item-type-operations.component';
import { AddPlaceComponent } from './main-menu/place-operations/add-place/add-place.component';
import { ChangePlaceInfoComponent } from './main-menu/place-operations/change-place-info/change-place-info.component';
import { DeletePlaceComponent } from './main-menu/place-operations/delete-place/delete-place.component';
import { ShowAllPlacesComponent } from './main-menu/place-operations/show-all-places/show-all-places.component';
import { AddItemComponent } from './main-menu/item-operations/add-item/add-item.component';
import { ChangeItemComponent } from './main-menu/item-operations/change-item/change-item.component';
import { DeleteItemComponent } from './main-menu/item-operations/delete-item/delete-item.component';
import { ShowAllItemsComponent } from './main-menu/item-operations/show-all-items/show-all-items.component';
import { AddItemTypeComponent } from './main-menu/item-type-operations/add-item-type/add-item-type.component';
import { ChangeItemTypeComponent } from './main-menu/item-type-operations/change-item-type/change-item-type.component';
import { DeleteItemTypeComponent } from './main-menu/item-type-operations/delete-item-type/delete-item-type.component';
import { ShoeAllItemTypesComponent } from './main-menu/item-type-operations/shoe-all-item-types/shoe-all-item-types.component';
import { AddPlaceStartComponent } from './main-menu/place-operations/add-place/add-place-start/add-place-start.component';
import { PlaceAddedComponent } from './main-menu/place-operations/add-place/place-added/place-added.component';
import { ShowPlaceListComponent } from './main-menu/place-operations/change-place-info/show-place-list/show-place-list.component';
import { ChangePlaceComponent } from './main-menu/place-operations/change-place-info/change-place/change-place.component';
import { PlaceChangedComponent } from './main-menu/place-operations/change-place-info/place-changed/place-changed.component';
import { ShowPlaceListToDeleteComponent } from './main-menu/place-operations/delete-place/show-place-list-to-delete/show-place-list-to-delete.component';
import { PlaceDeletedComponent } from './main-menu/place-operations/delete-place/place-deleted/place-deleted.component';
import { AddItemStartComponent } from './main-menu/item-operations/add-item/add-item-start/add-item-start.component';
import { ItemAddedComponent } from './main-menu/item-operations/add-item/item-added/item-added.component';
import { AddItemService } from './main-menu/item-operations/add-item/addItem.service';
import { Button } from './button.service';
import { ShowComponentService } from './showComponent.service';
import { AddPlaceService } from './main-menu/place-operations/add-place/addPlace.service';
import { ChangePlaceInfoService } from './main-menu/place-operations/change-place-info/changePlaceInfo.service';
import { DeletePlaceService } from './main-menu/place-operations/delete-place/deletePlace.service';
import { ShowAllPlaceitemsComponent } from './main-menu/item-operations/show-all-placeitems/show-all-placeitems.component';
import { ShowAllTypeitemsComponent } from './main-menu/item-operations/show-all-typeitems/show-all-typeitems.component';
import { ShowAllItemsListComponent } from './main-menu/item-operations/change-item/show-all-items-list/show-all-items-list.component';
import { ChangeChosenItemComponent } from './main-menu/item-operations/change-item/change-chosen-item/change-chosen-item.component';
import { ItemChangedComponent } from './main-menu/item-operations/change-item/item-changed/item-changed.component';
import { ChangeItemInfoService } from './main-menu/item-operations/change-item/changeItemInfo.service';
import { ShowItemDeleteListComponent } from './main-menu/item-operations/delete-item/show-item-delete-list/show-item-delete-list.component';
import { ItemDeletedComponent } from './main-menu/item-operations/delete-item/item-deleted/item-deleted.component';
import { DeleteItemService } from './main-menu/item-operations/delete-item/deleteItem.service';
import { ChosePlaceComponent } from './main-menu/item-operations/show-all-placeitems/chose-place/chose-place.component';
import { PlaceitemsShowmComponent } from './main-menu/item-operations/show-all-placeitems/placeitems-showm/placeitems-showm.component';
import { ShowAllPlaceItemsService } from './main-menu/item-operations/show-all-placeitems/showAllPlaceItems.service';
import { AddTypeStartComponent } from './main-menu/item-type-operations/add-item-type/add-type-start/add-type-start.component';
import { TypeAddedComponent } from './main-menu/item-type-operations/add-item-type/type-added/type-added.component';
import { AddTypeService } from './main-menu/item-type-operations/add-item-type/addType.service';
import { ShowTypeListComponent } from './main-menu/item-type-operations/change-item-type/show-type-list/show-type-list.component';
import { ChangeTypeInfoComponent } from './main-menu/item-type-operations/change-item-type/change-type-info/change-type-info.component';
import { TypeChangedComponent } from './main-menu/item-type-operations/change-item-type/type-changed/type-changed.component';
import { ChangeItemTypeService } from './main-menu/item-type-operations/change-item-type/changeItemType.service';
import { ShowTypeListDeleteComponent } from './main-menu/item-type-operations/delete-item-type/show-type-list-delete/show-type-list-delete.component';
import { TypeDeletedComponent } from './main-menu/item-type-operations/delete-item-type/type-deleted/type-deleted.component';
import { DeleteTypeService } from './main-menu/item-type-operations/delete-item-type/deleteType.service';
import { ChooseTypesComponent } from './main-menu/item-operations/show-all-typeitems/choose-types/choose-types.component';
import { TypeItemsShownComponent } from './main-menu/item-operations/show-all-typeitems/type-items-shown/type-items-shown.component';
import { ShowAllTypeItemsService } from './main-menu/item-operations/show-all-typeitems/showAllTypeItems.service';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HeaderComponent,
    PlaceOperationsComponent,
    ItemOperationsComponent,
    ItemTypeOperationsComponent,
    AddPlaceComponent,
    ChangePlaceInfoComponent,
    DeletePlaceComponent,
    ShowAllPlacesComponent,
    AddItemComponent,
    ChangeItemComponent,
    DeleteItemComponent,
    ShowAllItemsComponent,
    AddItemTypeComponent,
    ChangeItemTypeComponent,
    DeleteItemTypeComponent,
    ShoeAllItemTypesComponent,
    AddPlaceStartComponent,
    PlaceAddedComponent,
    ShowPlaceListComponent,
    ChangePlaceComponent,
    PlaceChangedComponent,
    ShowPlaceListToDeleteComponent,
    PlaceDeletedComponent,
    AddItemStartComponent,
    ItemAddedComponent,
    ShowAllPlaceitemsComponent,
    ShowAllTypeitemsComponent,
    ShowAllItemsListComponent,
    ChangeChosenItemComponent,
    ItemChangedComponent,
    ShowItemDeleteListComponent,
    ItemDeletedComponent,
    ChosePlaceComponent,
    PlaceitemsShowmComponent,
    AddTypeStartComponent,
    TypeAddedComponent,
    ShowTypeListComponent,
    ChangeTypeInfoComponent,
    TypeChangedComponent,
    ShowTypeListDeleteComponent,
    TypeDeletedComponent,
    ChooseTypesComponent,
    TypeItemsShownComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ShowComponentService, 
    Button, 
    AddPlaceService, 
    AddItemService, 
    ChangePlaceInfoService,
    DeletePlaceService,
    ChangeItemInfoService,
    DeleteItemService,
    ShowAllPlaceItemsService,
    AddTypeService,
    ChangeItemTypeService,
    DeleteTypeService,
    ShowAllTypeItemsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
