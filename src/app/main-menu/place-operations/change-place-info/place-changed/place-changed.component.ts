import { Component, OnInit, Input } from '@angular/core';

import { Storage } from '../../../../shared/storage.model'
import { ChangePlaceInfoService } from '../changePlaceInfo.service';


@Component({
  selector: 'app-place-changed',
  templateUrl: './place-changed.component.html',
  styleUrls: ['./place-changed.component.css']
})
export class PlaceChangedComponent implements OnInit {

  constructor(public changePlaceInfoService: ChangePlaceInfoService) { }
  ngOnInit(): void {
  
  }
}
