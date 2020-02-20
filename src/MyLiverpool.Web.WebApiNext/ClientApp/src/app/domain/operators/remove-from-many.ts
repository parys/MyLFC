import { Predicate } from '@ngxs/store/operators/internals';

/**
 * @param selector - predicate to remove multiple items from an array by predicate
 *
 * Example of usage:
 *
 * removeMany<{ patientId: string }>(item => item.patientId === patientId) })
 *
 */
export function removeMany<T>(selector: Predicate<T>) {
    return function removeItemsOperator(existing: Readonly<T[]>): T[] {
        return existing.filter(item => !selector(item as any));
    };
}
