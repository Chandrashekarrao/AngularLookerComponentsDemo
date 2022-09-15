import * as React from "react";
import { ComponentsProvider, FieldRadioGroup } from "@looker/components";
import { IDashboard } from "@looker/sdk";

export interface DashboardChooserProps {
  dashboards: IDashboard[];
  currentDashboardId?: string;
  onChange: (id: string) => void;
}

const DashboardChooser: React.FC<DashboardChooserProps> = ({
  dashboards,
  onChange,
  currentDashboardId
}) => {
  const options = dashboards.map((dashboard) => {
    return { label: dashboard.title, value: dashboard.id };
  });

  const onDashboardSelection = React.useCallback(
    (value: string) => {
      onChange(value);
    },
    [onChange]
  );

  return (
    <ComponentsProvider>
      <FieldRadioGroup
        label="Dashboards"
        value={currentDashboardId}
        onChange={onDashboardSelection}
        options={options}
      />
    </ComponentsProvider>
  );
};

export default DashboardChooser;
