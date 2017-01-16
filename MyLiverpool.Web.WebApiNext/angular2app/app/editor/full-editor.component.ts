// from https://www.npmjs.com/package/ng2-tinymce
import {
    Component,
    EventEmitter,
    forwardRef,
    Input,
    Output,
    NgZone
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
                         
declare let tinymce: any;

@Component({
    selector: "full-editor",
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FullEditorComponent),
            multi: true
        }
    ],
    template: `<textarea class="form-control" id="{{elementId}}">{{_value}}</textarea>`
})
export class FullEditorComponent implements ControlValueAccessor {

    @Output() change = new EventEmitter();
    @Output() ready = new EventEmitter();
    @Output() blur = new EventEmitter();
    @Input("value") _value: string = "";
    elementId: String = Math.random().toString(36).substring(2);
    zone;
    editor;

    ngAfterViewInit(): void {
        console.log(this.elementId);
        tinymce.init({
            // skin_url: 'assets/skins/lightgray',
            // autoresize_overflow_padding: 0,
            selector: `#${this.elementId}`,
         //   forced_root_block: "",
            // height: 500,
            autoresize_max_height: 500,
            menubar: false,
           // inline: true,
            plugins: [
                "advlist autolink autoresize lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table contextmenu paste code emoticons"
            ],
            toolbar: "undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons fullscreen",
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
            if (tinymce.activeEditor) {
                tinymce.activeEditor.setContent(value);
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
}