import { Storage } from '../../../shared/storage.model'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShowComponentService } from 'src/app/showComponent.service';

@Injectable()
export class AddPlaceService {
    public addedPlace: Storage = new Storage();

    constructor(private http: HttpClient,
     private showComponentService: ShowComponentService,
        ){}

    public addStorage(){
        
        this.http.post(
            this.showComponentService.serverPath + '/storage/addStorage',
            {
                "name": this.addedPlace.name,
                "description": this.addedPlace.description
            }
        ).subscribe(responseData => {
            console.log(responseData);
        });
    }
}