export default class Campaign {
    punted: boolean;

    constructor(
        public id: number,
        public title: string,
        public description: string,
        public punters: number = 0,
        public mine: boolean = false,
    ){
        this.punted = false;
    }

    punt() {
        if (this.punted) {
            this.punters--;
        } else {
            this.punters++;
        }

        this.punted = !this.punted;
    }
}
