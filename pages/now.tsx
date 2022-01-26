import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import NowLayout from 'layouts/now';
import { allOtherPages } from '.contentlayer/data';
import type { OtherPage } from '.contentlayer/types';

export default function Uses({ body: { code } }: OtherPage) {
  const Component = useMDXComponent(code);

  return (
    <NowLayout>
      <Component components={components as any} />
    </NowLayout>
  );
}

export async function getStaticProps() {
  const now = allOtherPages.find((page) => page.slug === 'now')!;

  return { props: now };
}
