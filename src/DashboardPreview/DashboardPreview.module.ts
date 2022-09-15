import { Component, Input, AfterViewInit } from "@angular/core";
import { IDashboard } from "@looker/sdk/lib/3.1/models";
import * as React from "react";
import * as ReactDOM from "react-dom";
import DashboardPreview, { DashboardPreviewProps } from "./DashboardPreview";

@Component({
  selector: "app-dashboard-preview",
  template: '<div [id]="rootId"></div>'
})
export class DashboardPreviewComponent implements AfterViewInit {
  @Input() dashboard: IDashboard;

  public rootId = "dashboard-preview-root";
  private hasViewLoaded = false;

  public ngOnChanges() {
    this.renderComponent();
  }

  public ngAfterViewInit() {
    this.hasViewLoaded = true;
    this.renderComponent();
  }

  private renderComponent() {
    if (!this.hasViewLoaded) {
      return;
    }

    const props: DashboardPreviewProps = {
      dashboard: this.dashboard
    };

    ReactDOM.render(
      React.createElement(DashboardPreview, props),
      document.getElementById(this.rootId)
    );
  }
}
