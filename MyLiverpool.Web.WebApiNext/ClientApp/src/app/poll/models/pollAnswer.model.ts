export class PollAnswer {
    constructor(pollId: number) {
         this.pollId = pollId;
    }

    id: number;
    pollId: number;
    text: string;
}