import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PersonEditComponent } from "./person-edit";
import { PersonBirthdayComponent } from "./person-birthday";
import { PersonService } from "./person.service";
import { BestPlayerComponent } from "./best-player";
import { SharedModule } from "@app/shared";


@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        BestPlayerComponent,
        PersonBirthdayComponent,
        PersonEditComponent
    ],
    exports: [
        BestPlayerComponent,
        PersonBirthdayComponent,
        PersonEditComponent
    ],
    providers: [
        PersonService
    ]
})
export class PersonCoreModule { }