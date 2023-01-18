import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ParentModule } from '@test-migration/parent';
import * as apiServices from '@test-migration/services';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, ParentModule],
  providers: [
    {
      provide: apiServices.BASE_PATH,
      useFactory: () => 'token',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
