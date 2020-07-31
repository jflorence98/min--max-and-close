import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from './../../projects/ng-modal-lib/src/lib/modal/modal-module';

import { AppComponent } from './app.component';
import { ModalDemoComponent} from './modal-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalDemoComponent
   
  ],
  imports: [
    BrowserModule,
    ModalModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
