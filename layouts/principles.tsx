import Container from 'components/Container';

export default function PrinciplesLayout({ children }) {
  return (
    <Container
      title="Principles – Diego Peralta"
      description="Some of the ideas I stand for."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-serif text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Principles
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Some of the ideas I stand for.
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
