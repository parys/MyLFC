import { keyframes, style, } from "@angular/animations";

export const slideOutLeft = [
    style({ transform: "translate3d(0, 0, 0)", offset: .2 }),
    style({ transform: "translate3d(-100%, 0, 0)", display: "none", offset: 1 })
];

export const slideOutRight = [
    style({ transform: "translate3d(0, 0, 0)", offset: .2 }),
    style({ transform: "translate3d(100%, 0, 0)", display: "none", offset: 1 })
];

export const slideInLeft = [
    style({ transform: "translate3d(-100%, 0, 0)", offset: 0.1 }),
    style({ transform: "translate3d(-50%, 0, 0)", display: "flex", offset: 0.5 }),
    style({ transform: "translate3d(0, 0, 0)", offset: 1 })
];

export const slideInRight = [
    style({ transform: "translate3d(100%, 0, 0)", offset: 0.1 }),
    style({ transform: "translate3d(50%, 0, 0)", display: "flex", offset: 0.5 }),
    style({ transform: "translate3d(0, 0, 0)", offset: 1 })
];