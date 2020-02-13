import { Component, forwardRef, Input, NgZone, AfterViewInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Observable, ReplaySubject } from 'rxjs';

import { LazyLoadingModuleService } from './lazy-loading-module.service';
import { ControlValueProvider } from '@domain/base/abstract-control.component';

// import { Editor, Settings } from "tinymce";

declare let tinymce: any;

@Component({
    selector: 'bbeditor',
    providers: [
        ControlValueProvider(EditorComponent)
    ],
    styleUrls: ['./editor.component.scss'],
    template: `<textarea id="{{elementId}}"></textarea>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditorComponent implements AfterViewInit, ControlValueAccessor, OnDestroy {
    @Input('value') public _value = '';
    @Output() public change = new EventEmitter();
    @Output() public ready = new EventEmitter();
    @Input() public type = 1;
    @Input() public height = 200;
    public elementId: string = Math.random().toString(36).substring(2);
    private elementLoaded: ReplaySubject<any> = new ReplaySubject<any>();
    private editor: any; // Editor;
    //  @ViewChild("nativeElement") public nativeElement: ElementRef;

    constructor(private lazy: LazyLoadingModuleService,
                private zone: NgZone,
                private cdRef: ChangeDetectorRef) {
      //  super(cd);
    }

    public ngAfterViewInit(): void {
        this.lazy.load().subscribe(_ => {
            this.initTiny();
        });
    }

    public setFocus() {
        this.isTinyDefinedO().subscribe(_ => {
            if (tinymce.editors && tinymce.editors[this.elementId]) {
                tinymce.editors[this.elementId].selection.select(tinymce.editors[this.elementId].getBody(), true);
                tinymce.editors[this.elementId].selection.collapse(false);
                tinymce.editors[this.elementId].focus();
            }
        });
    }

    // public get value(): string {
    //     return this._value;
    // }

    public set value(value: string) {
        this.isTinyDefinedO().subscribe(_ => {
            this.zone.run(() => {
                if (value !== this._value) {
                    this._value = value;
                    this.onChange(value);
                    this.onTouched();
                    this.change.emit(value);
                }
            });
      //      this.notifyValueChange();
        });
    }

    public ngOnDestroy(): void {
        if (this.isTinyDefinedO() && this.editor) {
            tinymce.remove(this.editor);
        }
    }

    public writeValue(value: any): void {
        this.value = value;

        this.isTinyDefinedO().subscribe(_ => {
            if (tinymce.editors && tinymce.editors[this.elementId]) {
                tinymce.editors[this.elementId].setContent((value) ? value : '');
            }
            this.cdRef.detectChanges();
        });
    }

    public registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    private onTouched = () => { };
    private onChange = (value: string) => { };

    private getPlugins(): string {
        const common = `autolink image paste customEmoticons`;
        const type1 = `advlist lists link hr media textcolor colorpicker ${common}`;
        if (this.type === 1) {
            return type1;
        }
        if (this.type === 2) {
            return `code fullscreen table visualblocks ${type1}`;
        }
        return common;
    }

    private getToolbar(): string {
        const common =
            `bold italic underline strikethrough | customEmoticons`;
        const type1 = `styleselect | ${common} | link image media | fontsizeselect hr
                                 | bullist numlist | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent`;
        const type2 = `undo redo | fullscreen ${type1} | table code | visualblocks`;
        if (this.type === 1) {
            return type1;
        }
        if (this.type === 2) {
            return type2;
        }
        return common;
    }

    private initTiny(): void {
        const settings1 // : Settings
            = {
            autoresize_overflow_padding: 0,
            selector: `#${this.elementId}`,
            convert_urls: true,
            schema: 'html5',
            fontsize_formats: '8pt 10pt 11pt 12pt 14pt 16pt',
            forced_root_block: '',
            min_height: this.height,
            browser_spellcheck: true,
            gecko_spellcheck: true,
            remove_trailing_brs: true,
            menubar: false,
            language: 'ru',
            // inline: true,
            plugins: [
                this.getPlugins()
            ],
            allow_script_urls: true,
            relative_urls: true,
            document_base_url: '/',
            toolbar: this.getToolbar(),
            visualblocks_default_state: true,
            external_plugins: {
                customEmoticons: '/plugins/customEmoticons/plugin.js'
            },
            skin_url: '/src/lightgray',
            setup: (editor: any) => { // Editor) => {
                this.editor = editor;
                editor.on('init', () => this.zone.run(() => editor.setContent(this._value || '')));
                editor.on('setcontent',
                    ({ content, format }: any) => format === 'html' && content &&
                        this.zone.run(() => this.onChange(content)));
                editor.on('change keyup undo redo', () => {
                    this.onChange(editor.getContent());
                    this.value = editor.getContent();
      //              this.cdRef.detectChanges();
                });
                editor.on('blur', () => this.zone.run(() => this.onTouched()));
            }
        };
        //     console.warn("initTiny mid " + this.elementId);
        this.zone.runOutsideAngular(() => {
            tinymce.init(settings1);
        });
        //      console.warn("initTiny end " + this.elementId);
        this.elementLoaded.next('');
        this.elementLoaded.complete();
    }

    private isTinyDefinedO(): Observable<any> {
        return this.elementLoaded.asObservable();
    }
}
