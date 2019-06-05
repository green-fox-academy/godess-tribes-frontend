export class Notification {
    imgURL?: string;
    type: string;
    level: number;
    statusMessage: string;
    startedAt: number;
    finishedAt: number;

    constructor(type: string, level: number, statusMessage: string, startedAt: number, finishedAt: number) {
        this.imgURL = './assets/images/' + type.toLowerCase() + '.png';
        this.type = type;
        this.level = level;
        this.statusMessage = statusMessage;
        this.startedAt = startedAt;
        this.finishedAt = finishedAt;
    }
}
