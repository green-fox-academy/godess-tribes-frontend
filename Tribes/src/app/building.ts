export class Building {
    id: number;
    buildingTypeENUM: string;
    level: number;
    startedAt: number;
    finishedAt: number;
    imageURL?: string;

    constructor(id: number, buildingTypeEnum: string, level: number, startedAt: number, finishedAt: number) {
        this.id = id;
        this.buildingTypeENUM = buildingTypeEnum;
        this.level = level;
        this.startedAt = startedAt;
        this.finishedAt = finishedAt;
        this.imageURL = 'assets/images/' + buildingTypeEnum + '.png';
    }

}
