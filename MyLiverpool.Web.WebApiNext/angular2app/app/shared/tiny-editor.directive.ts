//from https://www.npmjs.com/package/ng2-tinymce
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
    selector: "tinymce",
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TinymceComponent),
            multi: true
        }
    ],
    template: `<textarea id="{{elementId}}">{{initVal}}</textarea>`
})
export class TinymceComponent implements ControlValueAccessor {
    elementId: String = Math.random().toString(36).substring(2);

    @Output() change = new EventEmitter();
    @Output() ready = new EventEmitter();
    @Output() blur = new EventEmitter();

    @Input() initVal;

    _value = '';
    zone;
    editor;

    ngAfterViewInit() {
     //   console.log(tinymce);
        console.log(window.tinymce);
        window.tinymce.init({
            //selector: "textarea",
            //plugins: ['link', 'autoresize'],
            //menubar: false,
            //toolbar: 'bold',
            //skin_url: 'assets/skins/lightgray',
            //autoresize_overflow_padding: 0,
            selector: "textarea",
            // height: 500,
            autoresize_max_height: 500,
            menubar: false,
            plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table contextmenu paste code emoticons"
            ],
            toolbar: "undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons fullscreen",
            content_css: "//www.tinymce.com/css/codepen.min.css",
            setup: editor => {
                console.log("?");
                this.editor = editor;
                editor.on("keyup", () => {
                    const content = editor.getContent();
                    this.updateValue(content);
                });
            }
        });
    }

    /**
    * Constructor
    */
    constructor(zone: NgZone) {
        this.value = this.initVal;
        this.zone = zone;
    }

    get value(): any { return this._value; };
    @Input() set value(v) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
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
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
}