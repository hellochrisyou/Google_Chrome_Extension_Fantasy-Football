export const qbCol: string[] = [
    'name',
    'passingYard',
    'passingTD',
    'interception',
    'rushingYard',
    'rushingTD',
    'fumble',
    'points'
];
export const rbCol: string[] = [
    'name',
    'rushingYard',
    'rushingTD',
    'receivingYard',
    'receivingTD',
    'fumble',
    'points'
];
export const wrCol: string[] = ['name',
    'receivingYard',
    'receivingTD',
    'fumble',
    'points'];

export const teCol: string[] = ['name',
    'receivingYard',
    'receivingTD',
    'fumble',
    'points'];
export const defenseCol: string[] = [
    'name',
    'TD',
    'interception',
    'fumblesRecovered',
    'blocked',
    'safety',
    'sack',
    'points'
];
export const kickerCol: string[] = [
    'name',
    'PAT',
    'fg0To39',
    'fg40To49',
    'fg50Plus',
    'missFG0To39',
    'missFG40To49',
    'points',
];

export const enum ApiUrls {
    season = 'https://api.fantasy.nfl.com/v1/players/'
}
