import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { ImgStyle } from '../../../ImgStyle';

@Component({
  selector: 'app-kirinuki-modal-content',
  templateUrl: './kirinuki-modal-content.component.html',
  styleUrls: ['./kirinuki-modal-content.component.scss'],
})
export class KirinukiModalContentComponent implements OnInit {

  @Input() enlargedImageURI: string;
  @Input() enlargedImageAlt: string;
  @Input() enlargedImageStyle: ImgStyle;



  constructor(navParams: NavParams, public modalCtrl: ModalController) {
    this.enlargedImageURI =  navParams.get('enlargedImageURI');
    this.enlargedImageAlt =  navParams.get('enlargedImageAlt');
    this.enlargedImageStyle =  navParams.get('enlargedImageStyle');
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
