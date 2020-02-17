import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
// needed for adding aeicons component
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage],
  // needed for adding aeicons component
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsPageModule { }
