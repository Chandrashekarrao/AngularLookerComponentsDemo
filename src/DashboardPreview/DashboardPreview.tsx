import * as React from "react";
import {
  ButtonOutline,
  ComponentsProvider,
  Card,
  CardContent,
  Heading,
  Link,
  Paragraph
} from "@looker/components";
import { IDashboard } from "@looker/sdk";

export interface DashboardPreviewProps {
  dashboard: IDashboard;
}

const instanceUrl = "http://faux-instance.looker.com/dashboards-next/";

const DashboardPreview: React.FC<DashboardPreviewProps> = ({ dashboard }) => (
  <ComponentsProvider>
    <Card raised>
      <CardContent>
        <Heading fontSize="xxxxlarge" pb="small">
          {dashboard.title}
        </Heading>
        <Paragraph color="text2" pb="large">
          {dashboard.description}
        </Paragraph>

        <Link href={`${instanceUrl}${dashboard.id}`} target="_blank">
          <ButtonOutline iconBefore="External">View Dashboard</ButtonOutline>
        </Link>
      </CardContent>
    </Card>
  </ComponentsProvider>
);

export default DashboardPreview;
