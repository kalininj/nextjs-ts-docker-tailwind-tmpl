// import { useRouter } from 'next/router';

import Layout from '../components/layout'

const Index = () => {
  // const router = useRouter();

  return (
    <Layout>
      <h1 className="text-2xl font-bold">
        About
      </h1>
      <p>
        About Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aspernatur praesentium doloribus temporibus molestiae, in ex itaque exercitationem sit fugiat consectetur labore tempore accusamus enim quod. Cum laboriosam soluta voluptatum!
      </p>
    </Layout>
  );
};

export default Index;
