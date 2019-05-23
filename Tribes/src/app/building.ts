export class Building {
    id: number;
    buldingTypeENUM: string;
    level: number;
    startedAt: number;
    finishedAt: number;
    imageURL?: string;

    constructor(id: number, type: string, level: number, startedAt: number, finishedAt: number) {
        this.id = id;
        this.buldingTypeENUM = type;
        this.level = level;
        this.startedAt = startedAt;
        this.finishedAt = finishedAt;
        this.imageURL = 'assets/images/' + type + '.png';
    }

}
