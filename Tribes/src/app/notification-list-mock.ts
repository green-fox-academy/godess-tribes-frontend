import { Notification } from './notification';

export const NOTIFICATIONS: Notification[] = [
    new Notification('./assets/images/farm.png', 'FARM', 1, 'Under construction'),
    new Notification('./assets/images/mine.png', 'MINE', 1, 'Under construction'),
    new Notification('./assets/images/barrack.png', 'BARRACK', 1, 'Under construction'),
    new Notification('./assets/images/farm.png', 'FARM', 2, 'Leveling up 2 --> 3'),
    new Notification('./assets/images/farm.png', 'FARM', 1, 'Leveling up 1 --> 2'),
    new Notification('./assets/images/mine.png', 'MINE', 2, 'Leveling up 2 --> 3'),
    new Notification('./assets/images/mine.png', 'MINE', 1, 'Leveling up 1 --> 2'),
];
