import { Injectable } from '@angular/core'

import Campaign from './campaign.model';
import { CAMPAIGNS } from './mock-campaigns'

@Injectable()
export class CampaignService {
    campaigns: Campaign[];

    constructor() {
        this.campaigns = CAMPAIGNS;
    }

    get(): Campaign[] {
        return this.campaigns;
    }

    post(campaign: Campaign) {
        this.campaigns.push(campaign);
    }

    create(): Campaign {
        return new Campaign(
            this.campaigns.length + 1,
            null,
            null,
        );
    }
}
