import {Component} from "@angular/core"
import Campaign from "./campaign.model"
import {CampaignService} from "./campaign.service"

@Component({
    selector: 'campaign-list',
    templateUrl: 'campaign.list.html'
})
export class CampaignList {
    filter: string

    constructor(private campaignService: CampaignService) {
    }

    applyFilter(): Campaign[] {
        let campaigns = this.campaignService.get()
        return !this.filter ? campaigns : campaigns.filter(c => c[this.filter])
    }
}
