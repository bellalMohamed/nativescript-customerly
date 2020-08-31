import { Observable } from 'tns-core-modules/data/observable';

export class Common extends Observable {
    public appId: string;

    constructor(appId: string) {
        super();
        this.appId = appId;
    }
}

