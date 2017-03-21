"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var EditorComponent = EditorComponent_1 = (function () {
    function EditorComponent(zone) {
        this.change = new core_1.EventEmitter();
        this.ready = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this._value = "";
        this.type = 1;
        this.elementId = Math.random().toString(36).substring(2);
        this.zone = zone;
    }
    EditorComponent.prototype.ngAfterViewInit = function () {
        this.initTiny();
    };
    Object.defineProperty(EditorComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (value !== this._value) {
                this._value = value;
                this.onChange(value);
                this.onTouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    EditorComponent.prototype.updateValue = function (value) {
        var _this = this;
        this.zone.run(function () {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        });
    };
    EditorComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    EditorComponent.prototype.writeValue = function (value) {
        if (value !== null) {
            this._value = value;
            if (!tinymce) {
                this.initTiny();
            }
            if (tinymce.activeEditor && tinymce.activeEditor[this.elementId]) {
                tinymce.activeEditor[this.elementId].setContent(value);
            }
        }
    };
    EditorComponent.prototype.onChange = function (_) { };
    EditorComponent.prototype.onTouched = function () { };
    EditorComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    EditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    EditorComponent.prototype.getPlugins = function () {
        if (this.type === 1) {
            return "advlist autolink autoresize lists link image charmap print preview anchor\n                searchreplace visualblocks code fullscreen\n                insertdatetime media table contextmenu paste code emoticons";
        }
        if (this.type === 2) {
            return "advlist autolink autoresize lists link image charmap print preview anchor\n                searchreplace visualblocks code fullscreen\n                insertdatetime media table contextmenu paste code emoticons";
        }
        return "";
    };
    EditorComponent.prototype.getToolbar = function () {
        if (this.type === 1) {
            return "insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons fullscreen";
        }
        if (this.type === 2) {
            return "undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons fullscreen";
        }
        return "";
    };
    EditorComponent.prototype.initTiny = function () {
        var _this = this;
        tinymce.init({
            selector: "#" + this.elementId,
            schema: "html5",
            forced_root_block: false,
            autoresize_max_height: 500,
            menubar: false,
            plugins: [
                this.getPlugins()
            ],
            toolbar: this.getToolbar(),
            content_css: "//www.tinymce.com/css/codepen.min.css",
            setup: function (editor) {
                _this.editor = editor;
                editor.on("change", function () {
                    var content = editor.getContent();
                    _this.updateValue(content);
                });
                editor.on("keyup", function () {
                    var content = editor.getContent();
                    _this.updateValue(content);
                });
            }
        });
    };
    return EditorComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditorComponent.prototype, "change", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditorComponent.prototype, "ready", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditorComponent.prototype, "blur", void 0);
__decorate([
    core_1.Input("value"),
    __metadata("design:type", String)
], EditorComponent.prototype, "_value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EditorComponent.prototype, "type", void 0);
EditorComponent = EditorComponent_1 = __decorate([
    core_1.Component({
        selector: "bbeditor",
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return EditorComponent_1; }),
                multi: true
            }
        ],
        template: "<textarea class=\"form-control\" id=\"{{elementId}}\">{{_value}}</textarea>"
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], EditorComponent);
exports.EditorComponent = EditorComponent;
var EditorComponent_1;
//# sourceMappingURL=editor.component.js.map