import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRepoData } from "src/store/apis";
import { getRepo } from "src/store/actions/repo";

// import { Link } from "react-router-dom";
import Card from "src/components/Card";

const ProductPage = () => {
  const user = useSelector(state => state)
  const dispatch = useDispatch();

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
    console.log({user});

  }, [user]);

  return (
    <>
      <Card />
    </>
  )
}


export default ProductPage;