import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { TransferService } from '@app/transfer/core';
import { PersonService } from '@app/person';
import { Transfer, Person, PersonFilters, Club, ClubFilters, Season, SeasonFilters } from '@domain/models';
import { ClubService } from '@app/club';
import { SeasonService } from '@app/season';
import { TRANSFERS_ROUTE, DEBOUNCE_TIME } from '@app/+constants';
import { PagedList } from '@app/shared';

@Component({
    selector: 'transfer-edit',
    templateUrl: './transfer-edit.component.html'
})

export class TransferEditComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    private sub3: Subscription;
    private id: number;
    public editTransferForm: FormGroup;
    public clubs$: Observable<Club[]>;
    public persons$: Observable<Person[]>;
    public seasons$: Observable<Season[]>;

    constructor(private transferService: TransferService,
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private personService: PersonService,
        private clubService: ClubService,
        private seasonService: SeasonService) {
    }

    public ngOnInit(): void {
        this.initForm();
        const id: number = this.route.snapshot.params['id'];

        if (id > 0) {
            this.sub3 = this.transferService.getSingle(id)
                .subscribe((data: Transfer) => this.parse(data));
        }
    }

    public ngOnDestroy(): void {
        if (this.sub) { this.sub.unsubscribe(); }
        if (this.sub3) { this.sub3.unsubscribe(); }
    }

    public selectSeason(id: number) {
        this.editTransferForm.get('seasonId').patchValue(id);
    }

    public selectClub(id: number) {
        this.editTransferForm.get('clubId').patchValue(id);
    }

    public selectPerson(id: number) {
        this.editTransferForm.get('personId').patchValue(id);
    }

    public onSubmit(): void {
        const transfer: Transfer = this.parseForm(); // todo bug should be fixed
        transfer.startDate = new Date(transfer.startDate);
        transfer.startDate = new Date(transfer.startDate.getFullYear(),
            transfer.startDate.getMonth(),
            transfer.startDate.getDate(),
            (-1) * transfer.startDate.getTimezoneOffset() / 60);
        if (transfer.finishDate != null) {
            transfer.finishDate = new Date(transfer.finishDate);
            transfer.finishDate = new Date(transfer.finishDate.getFullYear(),
                transfer.finishDate.getMonth(),
                transfer.finishDate.getDate(),
                (-1) * transfer.finishDate.getTimezoneOffset() / 60);
        }
        this.transferService.createOrUpdate(this.id, transfer)
            .subscribe((data: Transfer) => this.router.navigate([TRANSFERS_ROUTE]));
    }

    private parse(data: Transfer): void {
        this.id = data.id;
        data.startDate = new Date(data.startDate);
        if (data.finishDate) {
            data.finishDate = new Date(data.finishDate);
        }
        this.editTransferForm.patchValue(data);
    }

    private parseForm(): Transfer {
        if (!this.editTransferForm.get('clubName').value) {
            this.editTransferForm.get('clubId').patchValue('');
        }
        const item = this.editTransferForm.value;
        item.id = this.id;

        return item;
    }

    private initForm(): void {
        this.editTransferForm = this.formBuilder.group({
            clubName: [''],
            clubId: [''],
            seasonId: ['', Validators.required],
            seasonName: [''],
            personId: ['', Validators.required],
            personName: [''],
            startDate: [null, Validators.required],
            finishDate: [null],
            amount: [null],
            onLoan: [false, Validators.required],
            coming: [true, Validators.required],
        });

        this.persons$ = this.editTransferForm.controls['personName'].valueChanges.pipe(
            debounceTime(DEBOUNCE_TIME),
            distinctUntilChanged(),
            switchMap((value: string) => {
                const filter = new PersonFilters();
                filter.name = value;
                return this.personService.getAll(filter);
            }),
            switchMap((pagingClubs: PagedList<Person>): Observable<Person[]> => {
                return of(pagingClubs.results);
            }));

        this.clubs$ = this.editTransferForm.controls['clubName'].valueChanges
            .pipe(
                debounceTime(DEBOUNCE_TIME),
                distinctUntilChanged(),
                switchMap((value: string): Observable<PagedList<Club>> => {
                    const filter = new ClubFilters();
                    filter.name = value;
                    return this.clubService.getAll(filter);
                }),
                switchMap((pagingClubs: PagedList<Club>): Observable<Club[]> => {
                    return of(pagingClubs.results);
                })
            );

        this.seasons$ = this.editTransferForm.controls['seasonName'].valueChanges.pipe(
            debounceTime(DEBOUNCE_TIME),
            distinctUntilChanged(),
            switchMap((value: string): Observable<PagedList<Season>> => {
                const filter = new SeasonFilters();
                filter.name = value;
                return this.seasonService.getAll(filter);
            }),
            switchMap((pagingSeasons: PagedList<Season>): Observable<Season[]> => {
                return of(pagingSeasons.results);
            }));
    }
}
