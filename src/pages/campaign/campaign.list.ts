import {Component} from "@angular/core";
import Campaign from "./campaign.model";
import {CampaignService} from "./campaign.service";

@Component({
    selector: 'campaign-list',
    templateUrl: 'campaign.list.html'
})
export class CampaignList {
    campaigns: Campaign[];
    filter: string;

    constructor(campaignService: CampaignService) {
        this.campaigns = campaignService.get();
    }

    applyFilter() {
        return !this.filter ? this.campaigns : this.campaigns.filter(c => c[this.filter])
    }
}
