import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DeleteDialogComponent } from '@shared/index';
import { RolesCheckedService } from '@base/auth';
import { MatchPerson } from '@domain/models';

import { MatchPersonService } from '@match-persons/match-person.service';
import { SignalRService } from '@base/signalr';
import { ObserverComponent } from '@domain/base';

@Component({
    selector: 'match-person-info',
    templateUrl: './match-person-info.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchPersonInfoComponent extends ObserverComponent implements OnInit {
    @Input() public person: MatchPerson;
    @Input() public isHome: boolean;
    public isEdit = false;
    public selectedMatchPerson: MatchPerson;
 //   public selectedIndex: number;
    public selectedType: number;


    constructor(private matchPersonService: MatchPersonService,
                public roles: RolesCheckedService,
                private snackBar: MatSnackBar,
                private signalR: SignalRService,
                private cd: ChangeDetectorRef,
                private dialog: MatDialog) {
        super();
    }

    public ngOnInit(): void {
        const sub$ = this.matchPersonService.getMatchPersons(this.matchId)
            .subscribe(data => this.persons = data);
        this.subscriptions.push(sub$);

        const sub2$ = this.signalR.matchPerson.subscribe((mp: MatchPerson) => {
            this.updateMatchPerson(mp);
        });
        this.subscriptions.push(sub2$);
    }

    public addMatchPerson(typeId: number = null, currentCount: number = 0, neededCount: number = 0, personTypeId: number = null): void {
        this.isEdit = true;
        this.selectedType = typeId;
        this.currentCount = currentCount;
        this.neededCount = neededCount;
        this.personTypeId = personTypeId;
    }

    public cancelMatchPersonEdit(): void {
        this.selectedMatchPerson = null;
        this.isEdit = false;
     //   this.selectedIndex = null;
        this.selectedType = null;
    }

    public updateMatchPerson(person: MatchPerson) {
        const selectedIndex = this.findWithAttr(this.persons[person.type], 'id', person.id);
        console.log('index value= ' + selectedIndex);

        if (selectedIndex === -1) {
            this.persons[person.type].push(person);
        } else {
            this.persons[person.type][selectedIndex] = person;

        }
        this.cd.markForCheck();
    }

    public onClose() {
        this.cancelMatchPersonEdit();
    }

    public selectMatchPerson(person: MatchPerson): void {
        this.selectedMatchPerson = person;
     //   this.selectedIndex = this.matchPersons.indexOf(person);
        this.isEdit = true;
    }

    public showDeleteModal(person: MatchPerson): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent);
        const sub$ = dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete(person);
            }
        });
        this.subscriptions.push(sub$);
    }


    private delete(person: MatchPerson): void {
        const sub$ = this.matchPersonService.delete(this.matchId, person.id)
            .subscribe((result: boolean) => {
                if (result) {
                    this.matchPersons.splice(this.matchPersons.indexOf(person), 1);
                    this.parsePersons(this.matchPersons);
                    this.snackBar.open('Удалено');
                } else {
                    this.snackBar.open('Ошибка удаления');
                }
            });
        this.subscriptions.push(sub$);
    }

    private findWithAttr(array: any, attr: string | number, value: any) {
        for (let i = 0; i < array.length; i += 1) {
            if (array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }
}
