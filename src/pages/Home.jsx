// import { useState, useEffect } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Card from "src/components/Card";
import { dummyProducts } from "src/utils/dummy";
import { getUserData, getRepoData } from "src/store/apis";
import { getUser } from "src/store/actions/user";
import { getRepo } from "src/store/actions/repo";
import { getIsProductShown } from "src/store/actions/product";

import PageLayout from "src/components/Layout";
import ProductsList from "src/components/Products";

const Home = () => {
  const datas = dummyProducts;
  // const [showProduct, setShowProduct] = useState(false);

  // const repo = useSelector(state => state.repoReducer.repository);
  const showProduct = useSelector(state => state.productReducer.showProduct);
  const dispatch = useDispatch();

  const getUserProfile = async () => {
    const res = await getUserData('bimon2018');
    if(res.name){
      dispatch(getUser(res));
    }
  };

  const getUserRepo = async () => {
    const res = await getRepoData('bimon2018', 'challenge-html-css-duplicate-web');
    if(res.name){
      dispatch(getRepo(res));
    }
  };

  // getUserProfile();
  // getUserRepo();


  useEffect(()=>{
    getUserProfile()
    getUserRepo();
  
    console.log('getuserProfile dan getUserRepo di-exec');
    

  }, []);


  useEffect(()=>{
    // console.log({repo});
    console.log({showProduct});

  }, [showProduct]);

  

  // useEffect(()=>{
  //   console.log('val show Product : ', showProduct);
  //   // console.log('val show Product : ');
  // }, [showProduct]);

  const handleShowProduct = (val) => {
    dispatch(getIsProductShown(!val));
    console.log('handleShowProduct executed : ', val);

    // setShowProduct(!val);
  };

  return (
    <>
      {/* <HeaderSection showProduct={showProduct} repo={repo?.name} /> */}
      <PageLayout>
      
        <button 
          className="bg-black text-white rounded-lg px-4 py-2 my-8 ml-4" 
          type="button"
          onClick={ e => handleShowProduct(showProduct)}
        >
          {showProduct ? "Hide" : "Show"} Product
        </button>

        <ProductsList datas={datas} />


      </PageLayout>

      <div className="min-h-screen"></div>
    </>
  )
}

export default Home;