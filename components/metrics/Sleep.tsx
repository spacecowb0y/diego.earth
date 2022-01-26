import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Sleep } from 'lib/types';
import MetricCard from 'components/metrics/Card';

export default function SleepCard() {
  const { data } = useSWR<Sleep>('/api/sleep', fetcher);
  const link = 'https://dev.fitbit.com/build/reference/web-api/sleep/get-sleep-goals/';

  let efficiency = new String(data?.efficiency);;

  return (
    <MetricCard
      header="Hours of Sleep"
      link={link}
      metric={efficiency}
      isSleep={true}
    />
  );
}
