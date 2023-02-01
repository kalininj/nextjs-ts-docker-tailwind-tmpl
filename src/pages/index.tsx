import Layout from '../components/layout'

const Index = () => {

  return (
    <Layout>
      <h1 className="text-2xl font-bold">
        Boilerplate Nextjs Tailwind
      </h1>
      <p>
        Next.js Boilerplate is a starter code for Next js project by
        putting developer experience first .{' '}
        <span role="img" aria-label="zap">
          ⚡️
        </span>{' '}
        Made with Next.js, TypeScript, ESLint,
        VSCode, Tailwind CSS.
      </p>
    </Layout>
  );
};

export default Index;
