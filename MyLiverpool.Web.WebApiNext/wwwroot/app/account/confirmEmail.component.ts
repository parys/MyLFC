import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Router, ActivatedRoute } from "@angular/router";
import { AccountService } from "./account.service";

@Component({
 //   selector: "account-signin",
    template: ""
})

export class ConfirmEmailComponent implements OnInit, OnDestroy {

    private sub: Subscription;

    constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        console.log(123);
        let result;
        this.sub = this.route.params.subscribe(params => {
            let id = +params["id"];
            let code = params["code"];
            this.accountService.confirmEmail(id, code)
                .subscribe(data => result = data,
                error => console.log(error),
                () => {
                    if (result) {
                        this.router.navigate(["/news"]);
                    }
                });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}