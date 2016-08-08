import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
//import { DataService } from '../services/DataService';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
    directives: [CORE_DIRECTIVES],
   // providers: [DataService]
})

export class NewsComponent implements OnInit {

    public message: string;
    public values: any[];

    constructor(){//private _dataService: DataService) {
        this.message = "Hello from HomeComponent constructor";
    }

    //ngOnInit() {
    //    this._dataService
    //        .GetAll()
    //        .subscribe(data => this.values = data,
    //        error => console.log(error),
    //        () => console.log('Get all complete'));
    //}
}