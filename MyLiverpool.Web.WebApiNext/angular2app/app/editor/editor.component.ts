// from https://www.npmjs.com/package/ng2-tinymce
import { Component, EventEmitter, forwardRef, Input, Output, NgZone } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

import "tinymce";
import "tinymce/themes/modern";
import "tinymce/plugins/table";
import "tinymce/plugins/link";
import "tinymce/plugins/advlist";
import "tinymce/plugins/hr";
declare let tinymce: any;

@Component({
    selector: "bbeditor",
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EditorComponent),
            multi: true
        }
    ],
    template: `<textarea class="form-control" id="{{elementId}}">{{_value}}</textarea>`
})
export class EditorComponent implements ControlValueAccessor {
    @Output() change = new EventEmitter();
    @Output() ready = new EventEmitter();
    @Output() blur = new EventEmitter();
    @Input("value") _value: string = "";
    @Input() type: number = 1;
    elementId: string = Math.random().toString(36).substring(2);
    zone: NgZone;
    editor: any;

    ngAfterViewInit(): void {
           this.initTiny();
    }

    constructor(zone: NgZone) {
        this.zone = zone;
    }

    get value(): string {
        return this._value;
    };
    set value(value: string) {
        if (value !== this._value) {
            this._value = value;
            this.onChange(value);
            this.onTouched();
        }
    }

    updateValue(value: any): void {
        this.zone.run(() => {
            this.value = value;
            this.onChange(value);
            this.onTouched();
            this.change.emit(value);
        });
    }

    ngOnDestroy(): void {
        tinymce.remove(this.editor);
    }

    writeValue(value: any): void {
        this.value = value;
        if (!tinymce) {
            this.initTiny();
        }
        if (tinymce.editors && tinymce.editors[this.elementId]) {
            tinymce.editors[this.elementId].setContent((value) ? value : "");
        }
    }

    onChange(_: any): void { }
    onTouched(): void { }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    private getPlugins(): string {
        if (this.type === 1) {
            return `advlist autolink autoresize lists link image hr charmap print preview anchor
                searchreplace visualblocks code fullscreen
                insertdatetime media table contextmenu paste code emoticons`;
        }
        if (this.type === 2) {
            return `advlist autolink autoresize lists link image charmap print preview anchor
                searchreplace visualblocks code fullscreen
                insertdatetime media table contextmenu paste code emoticons`;
        }
        if (this.type === 3) {
            return `autolink autoresize lists link charmap print anchor
                visualblocks code
                insertdatetime media table paste code emoticons`;
        }
        return "";
    }

    private getToolbar(): string {
        let common =
            `| styleselect | bold italic underline strikethrough | link image emoticons hr`;
        let type1 = `insert | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | fullscreen ${
            common}`;
        let type2 = `undo redo ${type1}` ;
        if (this.type === 1) {
            return type1;
        }
        if (this.type === 2) {
            return type2;
        }
        if (this.type === 3) {
            return common;
        }
        return "";
    }

    private initTiny(): void {
        tinymce.init({
            // autoresize_overflow_padding: 0,
            selector: `#${this.elementId}`,
            schema: "html5",
            //forced_root_block: "",
            // height: 500,        
            forced_root_block: false,
            autoresize_max_height: 500,
            menubar: false,
            language: "ru",
            // inline: true,
            plugins: [
                this.getPlugins()
            ],
            toolbar: this.getToolbar(),
            skin_url: "/src/lightgray",
            setup: (editor: any) => {
                this.editor = editor;
                editor.on("change", () => {
                    const content: any = editor.getContent();
                    this.updateValue(content);
                });
                editor.on("keyup", () => {
                    const content: any = editor.getContent();
                    this.updateValue(content);
                });
            }
        });
    }
}