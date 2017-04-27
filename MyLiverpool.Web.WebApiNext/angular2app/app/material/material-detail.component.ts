import { Component, OnInit, ViewChild } from "@angular/core";
import { Title, DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { MaterialService } from "./material.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Material } from "./material.model";                
import { MaterialType } from "../materialCategory/materialType.enum";                
import { RolesCheckedService, IRoles, LocalStorageService } from "../shared/index";
import { ModalDirective } from "ng2-bootstrap";

@Component({
    selector: "material-detail",
    templateUrl: "./material-detail.component.html"
})

export class MaterialDetailComponent implements OnInit {
    sub: Subscription;
    item: Material;
    roles: IRoles;
    private title: Title;
    type: MaterialType;
    @ViewChild("activateModal") activateModal: ModalDirective;
    @ViewChild("deleteModal") deleteModal: ModalDirective;

    constructor(private service: MaterialService,
        private route: ActivatedRoute,
        private localStorage: LocalStorageService,        
        private rolesChecked: RolesCheckedService,
        private router: Router,
        private sanitizer: DomSanitizer,
        private titleService: Title) {
        this.title = titleService;
    }

    ngOnInit() {
        this.roles = this.rolesChecked.checkRoles();
        this.sub = this.route.params.subscribe(params => {
            this.service.getSingle(+params["id"])
                .subscribe(data => this.parse(data),
                    error => console.log(error),
                    () => { });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    

    showActivateModal(index: number): void {
        this.activateModal.show();
    }

    showDeleteModal(index: number): void {
        this.deleteModal.show();
    }

    hideModal(): void {
        this.activateModal.hide();
        this.deleteModal.hide();
    }

    activate() {
        let result;
        
        this.service.activate(this.item.id)
            .subscribe(res => result = res,
            e => console.log(e),
            () => {
                if (result) {
                    this.item.pending = false;
                    this.hideModal();
                }
            });
    }

    delete() {
        let result;
        this.service.delete(this.item.id)
            .subscribe(res => result = res,
                e => console.log(e),
                () => {
                    if (result) {
                        this.hideModal();
                        this.router.navigate([`/${MaterialType[this.type].toLowerCase()}`]);
                    }
                }
            );
    }

    sanitizeByHtml(text: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(text);
    }

    private parse(item: Material): void {
        this.item = item;
        this.titleService.setTitle(item.title);
        this.addView();
    }

    private addView() {
        let id = this.item.id;
        if (this.localStorage.tryAddViewForMaterial(id)) {
            this.service.addView(id).subscribe(data => data);
        }
    }

}