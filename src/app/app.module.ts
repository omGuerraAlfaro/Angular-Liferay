import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { ChangeViewComponent } from './components/change-view/change-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
      const appElement = createCustomElement(AppComponent, {
        injector: this.injector
      });
      customElements.define("search-portlet-neoris", appElement);
    }
}
