import { style } from "@angular/animations";

export const slideOutLeft = [
    style({
        left: "-50%",
        offset: 0
    }),
    style({
        left: "-99%",
        position: "fixed",
        offset: 1
    })
];

export const slideOutRight = [
    style({
        left: "50%",
        offset: 0
    }),
    style({
        left: "99%",
        position: "fixed",
        offset: 1
    })
];

export const slideInLeft = [
    style({
        left: "-99%",
        position: "initial",
        offset: 0
    }),
    style({
        left: "0",
        offset: 1
    })
];

export const slideInRight = [
    style({
        left: "99%",
        position: "initial",
        offset: 0
    }),
    style({
        left: "0",
        offset: 1
    })
];