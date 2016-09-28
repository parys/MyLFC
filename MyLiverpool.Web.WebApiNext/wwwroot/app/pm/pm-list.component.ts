import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Pm } from './pm.model';
import { PmService } from './pm.service';

@Component({
    selector: 'pm-list',
    templateUrl: 'app/pm/pm-list.component.html'
})

export class PmListComponent implements OnInit {

    received: Pm[];
    sent: Pm[];

    constructor(private pmService: PmService) {
    }

    ngOnInit() {
        this.pmService
            .GetAll()
            .subscribe(data => this.parse(data),
            error => console.log(error),
            () => console.log("success load categoryu lits news"));
    }

    private parse(model: any): void {
        this.received = model.received;
        this.sent = model.sent;
    }

    delete(index: number) {
        //console.log("delete");
        //this.newsCategoryService.Delete(this.items[index].id).subscribe(data => data,
        //    error => console.log(error),
        //    () => console.log("success remove categoryu"));
        //this.items.splice(index, 1);
    }
}