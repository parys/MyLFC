import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState } from '@auth/store';
import { Select } from '@ngxs/store';

@Component({
    selector: 'admin-home',
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminHomeComponent {
    public cupTable: string;

    @Select(AuthState.isInformer) isInformer$: Observable<boolean>;

    @Select(AuthState.isAdminAssistant) isAdminAssistant$: Observable<boolean>;
}
