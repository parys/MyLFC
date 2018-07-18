import { PollAnswer } from "./pollAnswer.model";

export class Poll {
    constructor() {
        this.answers = [];
    }
    id: number;

    answers: PollAnswer[];

    question: string;

    startTime: Date;

    endTime: Date;
}