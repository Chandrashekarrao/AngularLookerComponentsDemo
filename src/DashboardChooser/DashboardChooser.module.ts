import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  AfterViewInit
} from "@angular/core";
import { IDashboard } from "@looker/sdk/lib/3.1/models";
import * as React from "react";
import * as ReactDOM from "react-dom";
import DashboardChooser, { DashboardChooserProps } from "./DashboardChooser";

@Component({
  selector: "app-dashboard-chooser",
  template: '<div [id]="rootId"></div>'
})
export class DashboardChooserComponent implements OnChanges, AfterViewInit {
  @Input() dashboards: IDashboard[];
  @Input() currentDashboardId: string | undefined;
  @Output() dashboardSelected = new EventEmitter<string>();

  public rootId = "dashboard-chooser-root";
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

    const props: DashboardChooserProps = {
      dashboards: this.dashboards,
      currentDashboardId: this.currentDashboardId,
      onChange: (res: string) => this.dashboardSelected.emit(res)
    };

    ReactDOM.render(
      React.createElement(DashboardChooser, props),
      document.getElementById(this.rootId)
    );
  }
}
