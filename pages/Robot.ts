export class Robot {
    constructor(protected _name: string) {
    }

    set name(value: string) {
        this._name = value;
    }

    get name() {
        return this._name;
    }
}

class FlyingRobot extends Robot {
    // can't modify after construction
    private jetSize: number;
    constructor(name: string, jetSize: number) {
        super(name);
        this.jetSize = jetSize;
    }

    get getJetSize() {
        return this.jetSize;
    }
}

const flyingRobot = new FlyingRobot('name', 3);
// console.log(flyingRobot.jetSize);
// FlyingRobot.name = 'name2';
console.log(flyingRobot);