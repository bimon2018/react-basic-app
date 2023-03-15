// import { useState, useEffect } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "src/components/Card";
import { HeaderSection } from "src/components/Header";
import { dummyProducts } from "src/utils/dummy";
import { getUserData, getRepoData } from "src/store/apis";
import { getUser } from "src/store/actions/user";
import { getRepo } from "src/store/actions/repo";
import { getIsProductShown } from "src/store/actions/product";


const Home = () => {
  const datas = dummyProducts;
  // const [showProduct, setShowProduct] = useState(false);

  const repo = useSelector(state => state.repoReducer.repository);
  const showProduct = useSelector(state => state.productReducer.showProduct);
  const dispatch = useDispatch();

  const getUserProfile = async () => {
    const res = await getUserData('bimon2018');
    if(res.name){
      dispatch(getUser(res));
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserRepo = async () => {
    const res = await getRepoData('bimon2018', 'challenge-html-css-duplicate-web');
    if(res.name){
      dispatch(getRepo(res));
    }
  };

  useEffect(() => {
    getUserRepo();
  }, []);


  useEffect(()=>{
    console.log({repo});
    console.log({showProduct});

  }, [repo, showProduct]);

  

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
      <HeaderSection repo={repo?.name} />
      
      <button 
        className="bg-black text-white rounded-lg px-4 py-2 my-8 ml-4" 
        type="button"
        onClick={ e => handleShowProduct(showProduct)}
      >
        {showProduct ? "Hide" : "Show"} Product
      </button>

      <div className="w-full container px-4 m-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            datas.map((data, index) => {
              return (
                // <div key={`product-${index}`}>
                  <Card 
                    key={`product-${index}`}
                    image={data.image}
                    title={data.title}
                    subtitle={data.subtitle} 
                  />
                // </div>
              )
            })
          }
        </div>
      </div>


      <div className="min-h-screen"></div>
    </>
  )
}

export default Home;