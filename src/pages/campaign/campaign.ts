import {Component, Input} from '@angular/core'

import Campaign from './campaign.model'
import {CampaignService} from "./campaign.service"

@Component({
    selector: 'campaign-card',
    templateUrl: 'campaign-card.html'
})
export default class CampaignComponent {
    @Input() campaign: Campaign

    constructor(private campaignService: CampaignService) {

    }

    punt() {
        this.campaignService.punt(this.campaign)
    }
}
