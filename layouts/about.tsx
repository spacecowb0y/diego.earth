import Container from 'components/Container';

export default function AboutLayout({ children }) {
  return (
    <Container
      title="About – Diego Peralta"
      description="The stuff I'm currently focus on."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-serif text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hi there 👋
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          My name is Diego Peralta, I’m a self-taught programmer and entrepreneur from South America. 
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
