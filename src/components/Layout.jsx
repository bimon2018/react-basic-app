import React from 'react';
import { HeaderSection } from "src/components/Header";
import { FooterSection } from "src/components/Footer";


const PageLayout = ({children}) => {
  return (
    <>
      <HeaderSection />
        {children}
      <FooterSection />
    </>
  )
}

export default PageLayout;