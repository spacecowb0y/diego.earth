import Container from 'components/Container';

export default function ContinuityLayout({ children }) {
  return (
    <Container
      title="Continuity – Diego Peralta"
      description="As this is written in late 2018, I have no reason to doubt that I will be active on the Internet and maintaining my site for another fifty years. On the other hand, I could be hit by a truck tomorrow."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-serif text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Continuity
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          As this is written in late 2018, I have no reason to doubt that I will be active on the Internet and maintaining my site for another fifty years. On the other hand, I could be hit by a truck tomorrow.
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
