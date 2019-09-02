import { Routes } from '@angular/router';

import { RoleGuard, RolesEnum } from '@base/auth';

import { ForumSectionListComponent } from '@forum/forumSection';
import { ForumSubsectionListComponent, ForumSubsectionEditComponent } from '@forum/forumSubsection';
import { ForumThemeListComponent, ForumThemeEditComponent } from '@forum/forumTheme';

export const forumRoutes: Routes = [
    {
        path: 'forum',
        children: [
            { path: '', component: ForumSectionListComponent, data: { title: 'Форум' } },
            {
                path: ':id',
                children: [
                    { path: '', component: ForumSubsectionListComponent, data: { title: 'Раздел форума' } },
                    {
                        path: 'edit',
                        component: ForumSubsectionEditComponent,
                        data: {
                            title: 'Создание подраздела',
                            roles: [RolesEnum[RolesEnum.NewsStart], RolesEnum[RolesEnum.InfoStart]]
                        },
                        canActivate: [RoleGuard]
                    },
                    {

                        path: 'themes/:idTheme',
                        children: [
                            { path: '', component: ForumThemeListComponent, data: { title: 'Тема форума' } },
                            {
                                path: 'edit',
                                component: ForumThemeEditComponent,
                                data: { title: 'Создание темы', roles: [RolesEnum[RolesEnum.NewsStart]] },
                                canActivate: [RoleGuard]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
