import { Routes }         from "@angular/router";
import { MaterialCommentListComponent } from "./index";

export const materialCommentRoutes: Routes = [
    { path: "materialComment", component: MaterialCommentListComponent, data: { title: "Комментарии" } },
    { path: "materialComment/list", component: MaterialCommentListComponent, data: { title: "Комментарии" } },
    { path: "materialComment/list/:page", component: MaterialCommentListComponent, data: { title: "Комментарии" } },
    { path: "materialComment/list/:page/:categoryId", component: MaterialCommentListComponent, data: { title: "Комментарии" } },
   // { path: "news/:id", component: NewsDetailComponent },
  //  { path: "news/:id/edit", component: NewsEditComponent }
];