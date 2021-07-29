import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {Storage} from '../../../shared/storage.model';
import { ChangePlaceInfoService } from './changePlaceInfo.service';
@Component({
  selector: 'app-change-place-info',
  templateUrl: './change-place-info.component.html',
  styleUrls: ['./change-place-info.component.css'],
  providers: [ChangePlaceInfoService]
})
export class ChangePlaceInfoComponent implements OnInit {

  constructor(private changePlaceInfoService: ChangePlaceInfoService) { }

  ngOnInit(): void {
  }

}
