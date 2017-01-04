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
    selector: "full-editor",
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FullEditorComponent),
            multi: true
        }
    ],
    template: `<textarea class="form-control full" id="{{elementId}}">{{initVal}}</textarea>`
})
export class FullEditorComponent implements ControlValueAccessor {
    elementId: String = Math.random().toString(36).substring(2);

    @Output() change = new EventEmitter();
    @Output() ready = new EventEmitter();
    @Output() blur = new EventEmitter();

    @Input() initVal;

    _value: string = "";
    zone;
    editor;

    ngAfterViewInit() {
        tinymce.init({
            // skin_url: 'assets/skins/lightgray',
            // autoresize_overflow_padding: 0,
            selector: "textarea.full",
            // height: 500,
            autoresize_max_height: 500,
            menubar: false,
            plugins: [
                "advlist autolink autoresize lists link image charmap print preview anchor",
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
            }
        });
    }

    constructor(zone: NgZone) {
        this.value = this.initVal;
        this.zone = zone;
    }

    get value(): any {
         return this._value;
    };
    set value(v) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
            this.onTouched();
        }
    }

    /**
    * Value update process
    */
    updateValue(value) {
        this.zone.run(() => {
            this.value = value;
            this.onChange(value);
            this.onTouched();
            this.change.emit(value);
        });
    }

    ngOnDestroy() {
        tinymce.remove(this.editor);
    }

    /**
     * Implements ControlValueAccessor
     */
    writeValue(value) {
        this._value = value;
    }
    onChange(_) { }
    onTouched() { }
    registerOnChange(fn) {
         this.onChange = fn;
    }
    registerOnTouched(fn) {
         this.onTouched = fn;
    }
}