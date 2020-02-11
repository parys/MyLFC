export class ChangeMobile {
    static readonly type = '[Core] Change mobile view';
    constructor(public readonly payload: boolean) { }
}

export class SetNotificationsCount {
    static readonly type = '[Core] Set notifications count';
    constructor(public readonly payload: number) { }
}

export class SetPmsCount {
    static readonly type = '[Core] Set pms count';
    constructor(public readonly payload: number) { }
}


