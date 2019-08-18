
export interface QB {
    name: string;
    passingYard: number; // 1 point per 25 yd     
    passingTD: number; // 4 points
    interception: number; // -2 points
    rushingYard: number;  // 1 point per 10 yd 
    rushingTD: number; // 6 points
    fumble: number; // -2 points
    points?: number;
}

export interface RB {
    name: string;
    rushingYard: number  // 1 point per 10 yd 
    rushingTD: number; // 6 points
    receivingYard: number; // 1 point per 10 yd    
    receivingTD: number; // 6 points
    fumble: number; // -2 points
    points?: number;
}

export interface WR {
    name: string;
    receivingYard: number; // 1 point per 10 yd    
    receivingTD: number; // 6 points
    fumble: number; // -2 points
    points?: number;
}

export interface TE {
    name: string;
    receivingYard: number; // 1 point per 10 yd    
    receivingTD: number; // 6 points    
    fumble: number; // -2 points
    points?: number;
}


export interface Defense {
    name: string;
    TD: number; // 3 points
    interception: number; // 2 points
    fumblesRecovered: number; // 2 points
    blocked: number; // 2 points
    safety: number; // 2 points
    sack: number; // 1 point
    points?: number;
}

export interface Kicker {
    name: string;
    PAT: number; // 1 point
    fg0To39: number; // 3 points
    fg40To49: number; // 4 points
    fg50Plus: number; // 5 points
    missFG0To39: number // -2 points
    missFG40To49: number // -1 point
    points?: number;
}

export interface Option {
    value: number;
}

export interface OptionsGroup {
    dateType: string
    option: {}
}

