import { Component } from '@angular/core'

import { NavController } from 'ionic-angular'

import {CampaignAdd} from '../campaign/campaign.add'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }

  openAddCampaign() {
    this.navCtrl.push(CampaignAdd)
  }
}
