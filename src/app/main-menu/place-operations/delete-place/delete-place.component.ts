import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Storage } from '../../../shared/storage.model'
import { ShowComponentService } from 'src/app/showComponent.service';
import { DeletePlaceService } from './deletePlace.service';

@Component({
  selector: 'app-delete-place',
  templateUrl: './delete-place.component.html',
  styleUrls: ['./delete-place.component.css'],
  providers: [DeletePlaceService]
})
export class DeletePlaceComponent implements OnInit {

  constructor(private showComponentSercvice: ShowComponentService,
              public deletePlaceService: DeletePlaceService) { }

  ngOnInit(): void {
  }

}
