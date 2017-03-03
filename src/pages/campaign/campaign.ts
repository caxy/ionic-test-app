import {Component, Input} from '@angular/core';

import Campaign from './campaign.model';

@Component({
    selector: 'campaign-card',
    templateUrl: 'campaign-card.html'
    // template: `<p>{{ campaign }}</p>`
})
export default class CampaignComponent {
    @Input() campaign: Campaign;
}
