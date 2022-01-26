import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import OfficeLayout from 'layouts/office';
import { allOtherPages } from '.contentlayer/data';
import type { OtherPage } from '.contentlayer/types';

export default function Uses({ body: { code } }: OtherPage) {
  const Component = useMDXComponent(code);

  return (
    <OfficeLayout>
      <Component components={components as any} />
    </OfficeLayout>
  );
}

export async function getStaticProps() {
  const officeHours = allOtherPages.find((page) => page.slug === 'office-hours')!;

  return { props: officeHours };
}
