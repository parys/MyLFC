import { PollAnswer } from "./pollAnswer.model";

export class Poll {
    id: number = 0;

    answers: PollAnswer[] = [];

    question: string;

    startTime: Date = new Date();

    endTime: Date;
}