import { Component } from "@angular/core";
import { mockDashboards } from "./dashboards";

@Component({
  selector: "app-root",
  template: `
    <main>
      <aside>
        <h1>Dashboard Chooser</h1>
        <app-dashboard-chooser
          [dashboards]="dashboards"
          [currentDashboardId]="currentDashboard.id"
          (dashboardSelected)="dashboardSelected($event)"
        ></app-dashboard-chooser>
      </aside>
      <section>
        <h1>Dashboard Preview</h1>
        <app-dashboard-preview
          [dashboard]="currentDashboard"
        ></app-dashboard-preview>
      </section>
    </main>
  `
})
export class AppComponent {
  dashboards = mockDashboards;
  currentDashboard = mockDashboards[1];

  dashboardSelected($event: string) {
    this.currentDashboard = mockDashboards.find(
      (dashboard) => dashboard.id === $event
    );

    console.log("Change to dashboard: ", this.currentDashboard);
  }
}
