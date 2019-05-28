export class Building {
    id: number;
    buildingTypeENUM: string;
    level: number;
    startedAt: Date;
    finishedAt: Date;
    imageURL?: string;

    constructor(id: number, type: string, level: number, startedAt: Date, finishedAt: Date) {
        this.id = id;
        this.buildingTypeENUM = type;
        this.level = level;
        this.startedAt = startedAt;
        this.finishedAt = finishedAt;
        this.imageURL = 'assets/images/' + type + '.png';
    }

}
