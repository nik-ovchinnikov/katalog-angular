import { Component, OnInit, Input } from '@angular/core';
import { AddPlaceService } from '../addPlace.service';

@Component({
  selector: 'app-place-added',
  templateUrl: './place-added.component.html',
  styleUrls: ['./place-added.component.css'],
  providers: []
})
export class PlaceAddedComponent implements OnInit {

  constructor(public addPlaceService: AddPlaceService) { }

  ngOnInit(): void {
  }


}
