import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngxs/store';

import { GetContractDetailQuery } from '@network/shared/contracts';

import { ContractsState } from '@contracts/store/contracts.state';
import { Actions } from '@contracts/store/contracts.actions';

@Component({
    selector: 'contract-edit-page',
    templateUrl: './contract-edit-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContractEditPageComponent implements OnInit {
    public contractEditForm: FormGroup;

    constructor(private store: Store,
                private formBuilder: FormBuilder) { }

    public ngOnInit(): void {
        const contract = this.store.selectSnapshot(ContractsState.contract);

        this.initContractEditForm(contract);
    }

    public onSubmit(): void {
         const contract = this.contractEditForm.value;

        if (contract.id === 0) {
            this.store.dispatch(new Actions.CreateContract(contract));
        } else {
            this.store.dispatch(new Actions.UpdateContract(contract));
        }
    }

    // private parse(item: User): void {
    //     if (item.birthday) {
    //         item.birthday = new Date(item.birthday);
    //     }
    //     this.userEditForm.patchValue(item);
    //     this.userId = item.id;
    // }

    private initContractEditForm(contract: GetContractDetailQuery.Response): void {
        this.contractEditForm = this.formBuilder.group({
            id: [contract.id || 0],
            personId: [contract.personId, Validators.required],
            salary: [contract.salary || 0, Validators.required],
            startDate: [contract.startDate, Validators.required],
            endDate: [contract.endDate, Validators.required]
        });
    }
}
