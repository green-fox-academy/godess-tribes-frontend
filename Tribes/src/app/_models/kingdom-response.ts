import { Location } from './location';
import { Soldier } from './soldier';
import { Resource } from './resource';
import { Building } from './building';

export class KingdomResponse {

    id: number;
    kingdomName: string;
    userId: number;
    buildings: Building[];
    resources: Resource[];
    soldiers: Soldier[];
    location: Location;
}
