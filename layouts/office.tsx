import Container from 'components/Container';

export default function OfficeLayout({ children }) {
  return (
    <Container
      title="Office Hours – Office Hours"
      description="I’d like to help give back to an industry that’s given me so much."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-serif text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Office Hours
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          I’d like to help give back to an industry that’s given me so much.
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
