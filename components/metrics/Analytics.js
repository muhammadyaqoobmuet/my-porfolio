import useSWR from "swr";
import format from "comma-number";

import fetcher from "@/lib/fetcher";
import MetricCard from "@/components/metrics/Card";

export default function Analytics() {
  // const { data } = useSWR("/api/views", fetcher);

  const pageViews = format("");
  const link = "https://yaqoobhalepoto.engineer";

  return (
    <MetricCard header="Total Website Views" link={link} metric={pageViews} />
  );
}
