import { Storage } from '../../../shared/storage.model'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddPlaceService {
    public addedPlace: Storage = new Storage();

    constructor(private http: HttpClient){}

    public addStorage(){
        console.log(1111);
        
        this.http.post(
            'http://localhost:8080/storage/addStorage',
            {
                "name": this.addedPlace.name,
                "description": this.addedPlace.description
            }
        ).subscribe(responseData => {
            console.log(responseData);
        });
    }
}