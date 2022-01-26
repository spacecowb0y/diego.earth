import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import PrinciplesLayout from 'layouts/principles';
import { allOtherPages } from '.contentlayer/data';
import type { OtherPage } from '.contentlayer/types';

export default function Uses({ body: { code } }: OtherPage) {
  const Component = useMDXComponent(code);

  return (
    <PrinciplesLayout>
      <Component components={components as any} />
    </PrinciplesLayout>
  );
}

export async function getStaticProps() {
  const principles = allOtherPages.find((page) => page.slug === 'principles')!;

  return { props: principles };
}
