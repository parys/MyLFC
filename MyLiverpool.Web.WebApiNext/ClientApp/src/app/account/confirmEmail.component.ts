import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { AccountService } from "./account.service";

@Component({
    selector: "email-confirmation",
    template: "<span [hidden]='!result'>Ваш адрес электронной почты успешно подтвержден. Можете войти и быть как дома.</span>"
})

export class ConfirmEmailComponent implements OnInit, OnDestroy {
    private sub: Subscription;
    result: boolean = false;

    constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) {
    }

    public ngOnInit(): void {
        this.sub = this.route.queryParams.subscribe(params => {
            const id = +params["userId"];
            const code = params["code"];
            this.accountService.confirmEmail(id, code)
                .subscribe(data => this.result = data,
                error => console.log(error),
                () => {
                    if (this.result) {
                        this.router.navigate(["/"]);
                    }
                });
        });
    }

    public ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}