import { PmListComponent, PmDetailComponent, PmEditComponent } from "./index";
export var pmRoutes = [
    { path: "pm", component: PmListComponent },
    { path: "pm/:id", component: PmDetailComponent },
    { path: "pm/:id/edit", component: PmEditComponent }
];
//# sourceMappingURL=pm.routing.js.map