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

declare var window: any;
declare let tinymce: any;

@Component({
    selector: "medium-editor",
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MediumEditorComponent),
            multi: true
        }
    ],
    template: `<textarea class="form-control medium" id="{{elementId}}">{{_value}}</textarea>`
})
export class MediumEditorComponent implements ControlValueAccessor {
    elementId: String = Math.random().toString(36).substring(2);

    @Output() change = new EventEmitter();
    @Output() ready = new EventEmitter();
    @Output() blur = new EventEmitter();

     @Input("value") _value: string= "";
    zone;
    editor;

    ngAfterViewInit(): void {
        tinymce.init({                                                                  
            // skin_url: 'assets/skins/lightgray',
            // autoresize_overflow_padding: 0,
            selector: `#${this.elementId}`,
        //    forced_root_block: null,
            // height: 500,
            autoresize_max_height: 500,
            menubar: false,
            plugins: [
                "advlist autolink autoresize link charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table contextmenu paste code emoticons"
            ],
            toolbar: "undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons fullscreen",
            content_css: "//www.tinymce.com/css/codepen.min.css",
            setup: editor => {
                this.editor = editor;
                editor.on("change", () => {
                    const content = editor.getContent();
                    this.updateValue(content);
                });
                editor.on("keyup", () => {
                    const content = editor.getContent();
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
    set value(value) {               
        if (value !== this._value) {
            this._value = value;
            this.onChange(value);
            this.onTouched();
        }
    }

    updateValue(value): void {     
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

    writeValue(value): void {  
        this._value = value;
        tinymce.activeEditor.setContent(value);

    }
    onChange(_): void { }
    onTouched(): void { }
    registerOnChange(fn): void {
         this.onChange = fn;
    }

    registerOnTouched(fn): void {
         this.onTouched = fn;
    }
}