// import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularReactBrowserModule } from "@angular-react/core";

import { AppComponent } from "./app.component";
import { DashboardChooserComponent } from "../DashboardChooser/DashboardChooser.module";
import { DashboardPreviewComponent } from "../DashboardPreview/DashboardPreview.module";

@NgModule({
  imports: [AngularReactBrowserModule],
  declarations: [
    AppComponent,
    DashboardChooserComponent,
    DashboardPreviewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
