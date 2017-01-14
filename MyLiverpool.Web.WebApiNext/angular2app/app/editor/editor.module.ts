import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FullEditorComponent } from "./full-editor.component";
import { MediumEditorComponent } from "./medium-editor.component";

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        FullEditorComponent,
        MediumEditorComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        FullEditorComponent,
        MediumEditorComponent
    ],
    providers: [
    ]
})
export class EditorModule { }