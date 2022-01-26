import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import ContinuityLayout from 'layouts/continuity';
import { allOtherPages } from '.contentlayer/data';
import type { OtherPage } from '.contentlayer/types';

export default function Uses({ body: { code } }: OtherPage) {
  const Component = useMDXComponent(code);

  return (
    <ContinuityLayout>
      <Component components={components as any} />
    </ContinuityLayout>
  );
}

export async function getStaticProps() {
  const continuity = allOtherPages.find((page) => page.slug === 'continuity')!;

  return { props: continuity };
}
