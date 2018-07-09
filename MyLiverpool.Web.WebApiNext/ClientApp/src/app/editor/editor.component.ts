import { Component, EventEmitter, forwardRef, Input, Output, NgZone, } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
//import { Editor, Settings } from "tinymce";
import { LazyLoadingLibraryService } from "./lazyLoadingLibrary.service";

declare let tinymce: any;

@Component({
    selector: "bbeditor",
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EditorComponent),
            multi: true
        }],
    styleUrls: ["./editor.component.scss"],
    template: `<textarea id="{{elementId}}">{{_value}}</textarea>`
})

export class EditorComponent implements ControlValueAccessor {
    @Output() public change = new EventEmitter();
    @Output() public ready = new EventEmitter();
    @Output() public blur = new EventEmitter();
    @Input("value") public _value: string = "";
    @Input() public type: number = 1;
    @Input() public height: number = 200;
    public elementId: string = Math.random().toString(36).substring(2);
    //   public tinymce: EditorManager = new EditorManager();
    public editor: any;//Editor;
    //  @ViewChild("nativeElement") public nativeElement: ElementRef;

    constructor(
        private lazyService: LazyLoadingLibraryService,
        private zone: NgZone) {
 //       console.warn("ctor");
        if (!this.isTinyDefined()) {
      //      console.warn("ctor-2");
            //lazyService.loadJs("./scripts.js").subscribe(_ => this.initTiny());
        }
    }

    public ngAfterViewInit(): void {
      //  console.warn("ngAfterViewInit start");
        if (this.isTinyDefined()) {
    //        console.warn("ngAfterViewInit middle");
            this.initTiny();
        }
     //   console.warn("ngAfterViewInit end");
    }

    public setFocus() {
     //   console.warn("setFocus start");
        if (this.isTinyDefined() && tinymce.editors && tinymce.editors[this.elementId]) {
    //        console.warn("setFocus middle");
            tinymce.editors[this.elementId].selection.select(tinymce.editors[this.elementId].getBody(), true);
            tinymce.editors[this.elementId].selection.collapse(false);
            tinymce.editors[this.elementId].focus();
        }
     //   console.warn("setFocus end");
    }

    public get value(): string {
        return this._value;
    };

    public set value(value: string) {
     //   console.warn("value start");
        if (value !== this._value) {
            this._value = value;
            this.onChange(value);
            this.onTouched();
        }
    }

    public updateValue(value: any): void {
       // console.warn("updateValue start");
        this.zone.run(() => {
        //    console.warn("updateValue middle");
            this.value = value;
            this.onChange(value);
            this.onTouched();
            this.change.emit(value);
        });
    }

    public ngOnDestroy(): void {
        //console.warn("ngOnDestroy start");
        if (this.isTinyDefined() && this.editor) {
            console.warn("ngOnDestroy middle");
        //    tinymce.remove(this.editor);
        }
    }

    public writeValue(value: any): void {
      //  console.warn("writeValue start");
        this.value = value;
        if (this.isTinyDefined()) {
          //  console.warn("writeValue middle");
                this.initTiny();
                if (tinymce.editors && tinymce.editors[this.elementId]) {
                    tinymce.editors[this.elementId].setContent((value) ? value : "");
                }
            }
        }

    public onChange(_: any): void { }
    public onTouched(): void { }
    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    private getPlugins(): string {
        const common: string = `autolink image paste customEmoticons`;
        const type1: string = `advlist lists link hr media textcolor colorpicker ${common}`;
        if (this.type === 1) {
            return type1;
        }
        if (this.type === 2) {
            return `code fullscreen table visualblocks ${type1}`;
        }
        if (this.type === 3) {
            return `${common}`;
        }
        return "";
    }

    private getToolbar(): string {
        const common: string =
            `bold italic underline strikethrough | customEmoticons`;//poiler-add spoiler-remove`;
        const type1: string = `styleselect | ${common} | link image media | fontsizeselect hr
                                 | bullist numlist | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent`;
        const type2: string = `undo redo | fullscreen ${type1} | table code | visualblocks`;
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
      //  console.warn("initTiny start");
        const settings1//: Settings
            = {
                autoresize_overflow_padding: 0,
                selector: `#${this.elementId}`,
                convert_urls: true,
                schema: "html5",
                fontsize_formats: "8pt 10pt 11pt 12pt 14pt 16pt",
                forced_root_block: "",
                min_height: this.height,
                browser_spellcheck: true,
                gecko_spellcheck: true,
                remove_trailing_brs: true,
                menubar: false,
                language: "ru",
                // inline: true,
                plugins: [
                    this.getPlugins()
                ],
                allow_script_urls: true,
                relative_urls: true,
                document_base_url: "/",
                toolbar: this.getToolbar(),
                visualblocks_default_state: true,
                external_plugins: {
                    customEmoticons: "/plugins/customEmoticons/plugin.js"
                },
                skin_url: "/src/lightgray",
                setup: (editor: any) => {//Editor) => {
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
            }
      //  console.warn("initTiny mid");
        tinymce.init(settings1);
      //  console.warn("initTiny end");
    }

    private setupFunction(editor: any) {//Editor) {
        this.editor = editor;
        if (editor) {
            editor.on("change",
                () => {
                    const content: any = editor.getContent();
                    this.updateValue(content);
                });
            editor.on("keyup",
                () => {
                    const content: any = editor.getContent();
                    this.updateValue(content);
                });
        }
    }

    private isTinyDefined(): boolean {
      //  console.info("isTinyDefined");
        return typeof tinymce !== "undefined";
    }
}