import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { MatchService } from '@matches/match.service';
import { SeasonService,  } from '@seasons/core';
import { Match, MatchType, Stadium, StadiumFilters, Club, ClubFilters, Season } from '@domain/models';
import { StadiumService } from '@stadiums/core';
import { ClubService } from '@clubs/core';
import { DEBOUNCE_TIME, MATCHES_ROUTE } from '@app/+constants';
import { PagedList } from '@app/shared';

@Component({
    selector: 'match-edit',
    templateUrl: './match-edit.component.html'
})

export class MatchEditComponent implements OnInit {
    private id: number;
    public editMatchForm: FormGroup;
    public types: MatchType[];
    public seasons: Season[];
    public clubs$: Observable<Club[]>;
    public stadiums$: Observable<Stadium[]>;

    constructor(private matchService: MatchService,
                private route: ActivatedRoute,
                private stadiumService: StadiumService,
                private router: Router,
                private formBuilder: FormBuilder,
                private seasonService: SeasonService,
                private clubService: ClubService) {
    }

    public ngOnInit(): void {
        this.initForm();
        const id = this.route.snapshot.params.id;
        if (+id > 0) {
            this.matchService.getSingle(id)
                .subscribe((data: Match) => this.parse(data));
        }

        this.matchService.getTypes()
            .subscribe((data: MatchType[]) => this.types = data);

        this.seasonService.getAllWithoutFilter()
            .subscribe((data: PagedList<Season>) => this.seasons = data.results);
    }

    public onSubmit(): void {
        const match = this.parseForm();
        this.matchService.createOrUpdate(this.id, match)
            .subscribe((data: Match) => this.router.navigate([MATCHES_ROUTE, data.id]));
    }

    public selectStadium(id: number) {
        this.editMatchForm.get('stadiumId').patchValue(id);
    }

    public selectClub(id: number) {
        this.editMatchForm.get('clubId').patchValue(id);
    }

    private parse(data: Match): void {
        this.id = data.id;
        this.editMatchForm.patchValue(data);
        this.editMatchForm.get('date').patchValue(new Date(data.dateTime));
        this.editMatchForm.get('time').patchValue(new Date(data.dateTime).toTimeString().slice(0, 8));
    }

    private parseForm(): Match {
        const item = this.editMatchForm.value;
        item.id = this.id;
        const date = this.editMatchForm.controls.date.value;
        const time = this.editMatchForm.controls.time.value;
        item.dateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.slice(0, 2), time.slice(3, 5));
        return item;
    }

    private initForm(): void {
        this.editMatchForm = this.formBuilder.group({
            clubName: [''],
            clubId: ['', Validators.required],
            seasonId: ['', Validators.required],
            isHome: [true, Validators.required],
            date: [null, Validators.required],
            time: [null, Validators.required],
            typeId: ['', Validators.required],
            stadiumId: ['', Validators.required],
            stadiumName: ['', Validators.required],
            photoUrl: [null],
            videoUrl: [null],
            previewId: [null],
            reportId: [null]
        });

        this.stadiums$ = this.editMatchForm.controls.stadiumName.valueChanges.pipe(
            debounceTime(DEBOUNCE_TIME),
            distinctUntilChanged(),
            switchMap((value: string) => {
                const filter = new StadiumFilters();
                filter.name = value;
                return this.stadiumService.getAll(filter);
            }),
            switchMap((pagingStadiums: PagedList<Stadium>): Observable<Stadium[]> => {
                return of(pagingStadiums.results);
            }));

        this.clubs$ = this.editMatchForm.controls.clubName.valueChanges.pipe(
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
    }
}
