import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import TalksLayout from 'layouts/talks';
import { allOtherPages } from '.contentlayer/data';
import type { OtherPage } from '.contentlayer/types';

export default function Uses({ body: { code } }: OtherPage) {
  const Component = useMDXComponent(code);

  return (
    <TalksLayout>
      <Component components={components as any} />
    </TalksLayout>
  );
}

export async function getStaticProps() {
  const talks = allOtherPages.find((page) => page.slug === 'talks')!;

  return { props: talks };
}
