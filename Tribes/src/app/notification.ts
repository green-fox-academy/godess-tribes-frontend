export class Notification {
    imgURL?: string;
    type: string;
    level: number;
    statusMessage: string;

    constructor(imgURL: string, type: string, level: number, statusMessage: string) {
        this.imgURL = imgURL;
        this.type = type;
        this.level = level;
        this.statusMessage = statusMessage;
    }
}