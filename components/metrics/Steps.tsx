import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Steps } from 'lib/types';
import MetricCard from 'components/metrics/Card';

export default function SleepCard() {
  const { data } = useSWR<Steps>('/api/activity', fetcher);
  const link = 'https://dev.fitbit.com/build/reference/web-api/activity/get-lifetime-stats/';

  let steps = new Number(data?.total);;

  return (
    <MetricCard
      header="Lifetime Steps"
      link={link}
      metric={steps}
      isSleep={false}
    />
  );
}
