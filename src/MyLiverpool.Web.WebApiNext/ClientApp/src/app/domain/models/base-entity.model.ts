export abstract class BaseEntity<T> {

    public constructor(fields?: Partial<T>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }

}
