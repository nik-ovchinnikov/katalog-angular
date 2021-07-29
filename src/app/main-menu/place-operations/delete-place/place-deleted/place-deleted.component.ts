import { Component, OnInit, Input } from '@angular/core';

import { Storage } from '../../../../shared/storage.model'
import { ShowComponentService } from 'src/app/showComponent.service';
import { DeletePlaceService } from '../deletePlace.service';

@Component({
  selector: 'app-place-deleted',
  templateUrl: './place-deleted.component.html',
  styleUrls: ['./place-deleted.component.css']
})
export class PlaceDeletedComponent implements OnInit {

  constructor(private showComponentSercvice: ShowComponentService,
              public deletePlaceService: DeletePlaceService) { }

              
  ngOnInit(): void {
  }
}
