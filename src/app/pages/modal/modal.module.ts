import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@NgModule({
  entryComponents:[
    ModalInfoPage
  ],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    ModalInfoPage
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}
