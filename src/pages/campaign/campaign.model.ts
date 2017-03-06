export default class Campaign {
    public id: number;
    public title: string;
    public description: string;
    public punters: number;
    public mine?: boolean|void;
    public punted?: boolean|void;

    constructor(object: Campaign) {
        this.id = object.id;
        this.title = object.title;
        this.description = object.description;
        this.punters = object.punters;
        this.mine = object.mine || false;
        this.punted = object.punted || false;
    }

    punt?() {
        this.punters += this.punted ? -1 : 1;
        this.punted = !this.punted;
    }
}
