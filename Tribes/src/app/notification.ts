export class Notification {
    imgURL?: string;
    type: string;
    level: number;
    statusMessage: string;

    constructor(type: string, level: number, statusMessage: string) {
        this.imgURL = './assets/images/' + type.toLowerCase() + '.png';
        this.type = type;
        this.level = level;
        this.statusMessage = statusMessage;
    }
}
