import { Injectable } from '@angular/core'

import Campaign from './campaign.model';
import { CAMPAIGNS } from './mock-campaigns'
import {Storage} from "@ionic/storage";

@Injectable()
export class CampaignService {
    campaigns: Campaign[];

    constructor(private storage: Storage) {
        this.campaigns = [];

        this.storage.ready().then(() => {
            this.storage.get('campaigns').then(campaigns => {
                console.log([typeof campaigns, Array.isArray(campaigns), campaigns]);
                if (!Array.isArray(campaigns)) {
                    this.storage.set('campaigns', CAMPAIGNS);
                    this.campaigns = CAMPAIGNS;
                } else {
                    this.campaigns = campaigns;
                }
            });
        });
    }

    get(): Campaign[] {
        return this.campaigns;
    }

    post(campaign: Campaign) {
        this.campaigns.push(campaign);
        this.storage.set('campaigns', this.campaigns);
    }

    create(): Campaign {
        console.log(['campaigns length', this.campaigns.length]);
        return new Campaign(
            this.campaigns.length + 1,
            null,
            null,
        );
    }
}
