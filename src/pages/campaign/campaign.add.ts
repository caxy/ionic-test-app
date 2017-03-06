import {Component} from "@angular/core";
import Campaign from "./campaign.model";
import {CampaignService} from "./campaign.service";
import {NavController} from "ionic-angular";
import {HomePage} from "../home/home";

@Component({
    selector: 'campaign-add',
    templateUrl: 'campaign.add.html',
})
export class CampaignAdd {
    campaign: Campaign;

    constructor(public navCtrl: NavController, public campaignService: CampaignService) {
        this.campaign = this.campaignService.create();
        this.campaign.mine = true;
    }

    save() {
        this.campaignService
            .post(this.campaign)
            .then(v => {this.close();})
        ;
    }

    close() {
        this.navCtrl.push(HomePage);
    }
}
