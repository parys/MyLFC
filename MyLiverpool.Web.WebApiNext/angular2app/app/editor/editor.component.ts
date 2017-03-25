// from https://www.npmjs.com/package/ng2-tinymce
import { Component, EventEmitter, forwardRef, Input, Output, NgZone } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

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
    zone;
    editor;

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
        if (value !== null) {
            this._value = value;
            if (!tinymce) {
                this.initTiny();
            }
            if (tinymce.activeEditor && tinymce.activeEditor[this.elementId]) {
                tinymce.activeEditor[this.elementId].setContent(value);
            }
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
            return `advlist autolink autoresize lists link image charmap print preview anchor
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
        if (this.type === 1) {
            return `insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons fullscreen`;
        }
        if (this.type === 2) {
            return `undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons fullscreen`;
        }
        if (this.type === 3) {
            return `styleselect | bold italic | link image emoticons`;
        }
        return "";
    }

    private initTiny(): void {
        tinymce.init({
            // skin_url: 'assets/skins/lightgray',
            // autoresize_overflow_padding: 0,
            selector: `#${this.elementId}`,
            schema: "html5",
            //forced_root_block: "",
            // height: 500,        
            forced_root_block: false,
            autoresize_max_height: 500,
            menubar: false,
        //    language: "ru",
            // inline: true,
            plugins: [
                this.getPlugins()
            ],
            toolbar: this.getToolbar(),
            content_css: "//www.tinymce.com/css/codepen.min.css",
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