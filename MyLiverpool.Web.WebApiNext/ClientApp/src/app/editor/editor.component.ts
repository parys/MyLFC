﻿import { Component, EventEmitter, forwardRef, Input, Output, NgZone, } from "@angular/core";
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
        if (!this.isTinyDefined()) {
            lazyService.loadJs("./scripts.js").subscribe(_ => this.initTiny());
        }
    }

    public ngAfterViewInit(): void {
       // console.warn(2);
        if (this.isTinyDefined()) {
       //     console.warn(3);
            this.initTiny();
        }
      //  console.warn(4);
    }

    public setFocus() {
       // console.warn(5);
        if (this.isTinyDefined() && tinymce.editors && tinymce.editors[this.elementId]) {
            tinymce.editors[this.elementId].selection.select(tinymce.editors[this.elementId].getBody(), true);
            tinymce.editors[this.elementId].selection.collapse(false);
            tinymce.editors[this.elementId].focus();
        }
    }

    public get value(): string {
        return this._value;
    };

    public set value(value: string) {
      //  console.info(14);
        if (value !== this._value) {
            this._value = value;
            this.onChange(value);
            this.onTouched();
        }
    }

    public updateValue(value: any): void {
     //   console.info(12);
        this.zone.run(() => {
         //   console.info(13);
            this.value = value;
            this.onChange(value);
            this.onTouched();
            this.change.emit(value);
        });
    }

    public ngOnDestroy(): void {
    //    console.info(11);
        if (this.isTinyDefined() && this.editor) {
            tinymce.remove(this.editor);
        }
    }

    public writeValue(value: any): void {
      //  console.info(8);
        this.value = value;
        if (this.isTinyDefined()) {
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
     //   console.info(7);
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
     //   console.info(9);
        tinymce.init(settings1);
     //   console.info(10);
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
       // console.error(6);
        return typeof tinymce !== "undefined";
    }
}