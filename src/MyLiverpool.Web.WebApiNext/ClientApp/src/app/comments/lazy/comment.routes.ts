import { Routes } from '@angular/router';

import { COMMENTS_RU } from '@constants/ru.constants';

import { CommentListComponent } from '@comments/lazy/comment-list';

export const commentRoutes: Routes = [
    { path: '', component: CommentListComponent, data: { title: COMMENTS_RU } },
];
