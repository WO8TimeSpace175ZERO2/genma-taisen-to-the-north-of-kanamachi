import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-kirinuki-modal-content',
  templateUrl: './kirinuki-modal-content.component.html',
  styleUrls: ['./kirinuki-modal-content.component.scss'],
})
export class KirinukiModalContentComponent implements OnInit {

  @Input() enlargedImageURI: string;
  @Input() enlargedImageAlt: string;
  @Input() enlargedImageHeight: string;
  @Input() enlargedImageWidth: string;


  constructor(navParams: NavParams, public modalCtrl: ModalController) {
    console.log('enlargedImageURI : ' + navParams.get('enlargedImageURI'));
    this.enlargedImageURI =  navParams.get('enlargedImageURI');
    this.enlargedImageAlt =  navParams.get('enlargedImageAlt');
    this.enlargedImageHeight =  navParams.get('enlargedImageHeight');
    this.enlargedImageWidth =  navParams.get('enlargedImageWidth');
   }

  ngOnInit() {}

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
