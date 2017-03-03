import {Component} from "@angular/core";
import Campaign from "./campaign.model";
import {CampaignService} from "./campaign.service";
import {NavController} from "ionic-angular";
import {HomePage} from "../home/home";
@Component({
    selector: 'campaign-add',
    providers: [CampaignService],
    templateUrl: 'campaign.add.html'
})
export class CampaignAdd {
    campaign: Campaign;

    constructor(public navCtrl: NavController, public campaignService: CampaignService) {
        this.campaign = campaignService.create();
        this.campaign.mine = true;
    }

    save() {
        this.campaignService.post(this.campaign);
        this.close();
    }

    close() {
        this.navCtrl.push(HomePage);
    }
}
