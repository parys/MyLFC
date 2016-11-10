import { Routes }         from "@angular/router";
import { MaterialCommentListComponent } from "./index";

export const materialCommentRoutes: Routes = [
    { path: "materialComment", component: MaterialCommentListComponent },
    { path: "materialComment/list", component: MaterialCommentListComponent },
    { path: "materialComment/list/:page", component: MaterialCommentListComponent },
    { path: "materialComment/list/:page/:categoryId", component: MaterialCommentListComponent },
   // { path: "news/:id", component: NewsDetailComponent },
  //  { path: "news/:id/edit", component: NewsEditComponent }
];