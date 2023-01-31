import type { ReactNode } from 'react';

import Navbar from '../navbar'
import Footer from '../footer'

type LayoutProps = {
  children: ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      asd
      <Footer />
    </>
  )
}
