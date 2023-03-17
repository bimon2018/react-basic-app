import { useEffect } from "react";
import { useSelector } from "react-redux";

// import { getRepoData } from "src/store/apis";
// import { getRepo } from "src/store/actions/repo";

// import { Link } from "react-router-dom";

import { dummyProducts } from "src/utils/dummy";

import PageLayout from "src/components/Layout";
// import Card from "src/components/Card";
import ProductsList from "src/components/Products";

const ProductPage = () => {
  const datas = dummyProducts;



  const repo = useSelector(state => state.repoReducer.repository);


  useEffect(() => {

    console.log({repo});
    
  }, [repo]);


  return (
    <>
      <PageLayout>
        <ProductsList datas={datas} />
      </PageLayout>
    </>
  )
}


export default ProductPage;