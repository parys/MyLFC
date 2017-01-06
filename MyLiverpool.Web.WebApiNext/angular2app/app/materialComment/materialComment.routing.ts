import { Routes } from "@angular/router";
import { MaterialCommentListComponent } from "./index";

export const materialCommentRoutes: Routes = [
    { path: "materialComment", children: [
            { path: "", component: MaterialCommentListComponent, data: { title: "Комментарии" } },
            { path: "list", children: [
                    { path: "", component: MaterialCommentListComponent, data: { title: "Комментарии" } },
                    { path: ":page", children: [
                        { path: "", component: MaterialCommentListComponent, data: { title: "Комментарии" } },
                        { path: ":categoryId", component: MaterialCommentListComponent, data: { title: "Комментарии" } }]
                    }
                ]
            }
        ]
    }
];