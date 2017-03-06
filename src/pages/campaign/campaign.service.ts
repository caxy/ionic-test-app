import { Injectable } from '@angular/core'

import Campaign from './campaign.model';
import { CAMPAIGNS } from './mock-campaigns'
import {Storage} from "@ionic/storage";

@Injectable()
export class CampaignService {
    campaigns: Campaign[];

    constructor(private storage: Storage) {
        this.campaigns = [];
        this.boot();
    }

    boot() {
        this.storage.ready().then(() => {
            this.storage.get('campaigns').then(campaigns => {
                this.campaigns = Array.isArray(campaigns) ? campaigns : [...CAMPAIGNS];
                this.campaigns = this.campaigns.map((c: Campaign) => new Campaign(c));
                this.save();
                console.log([typeof campaigns, Array.isArray(campaigns), campaigns]);
            });
        });
    }

    get(): Campaign[] {
        return this.campaigns;
    }

    post(campaign: Campaign) {
        this.campaigns.push(campaign);
        return this.save();
    }

    create(): Campaign {
        return new Campaign({
            id: this.campaigns.length + 1,
            title: null,
            description: null,
            punters: null,
        });
    }

    save() {
        return this.storage.set('campaigns', this.campaigns);
    }

    punt(campaign: Campaign) {
        campaign.punt();
        return this.save();
    }
}
