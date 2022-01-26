import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import AboutLayout from 'layouts/about';
import { allOtherPages } from '.contentlayer/data';
import type { OtherPage } from '.contentlayer/types';

export default function About({ body: { code } }: OtherPage) {
  const Component = useMDXComponent(code);

  return (
    <AboutLayout>
      <Component components={components as any} />
    </AboutLayout>
  );
}

export async function getStaticProps() {
  const about = allOtherPages.find((page) => page.slug === 'about')!;

  return { props: about };
}
