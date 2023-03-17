import { Link } from "react-router-dom";
// import { useEffect } from "react";
import { useSelector } from "react-redux";


export const FooterSection = (props) => {
  const user = useSelector(state => state.userReducer.user);
  const showProduct = useSelector(state => state.productReducer.showProduct);


  return (
    <div className="w-full bg-rose-200 sticky bottom-0 z-50">
      <div className="flex items-center p-4 container m-auto">
        <div className="font-bold">
          <Link to="/">Home</Link>
        </div>


        {
          showProduct ?( 
            <div className="font-bold ml-4">
              <Link to="/product">Product</Link>
            </div>
          ):(
            <></>
          )
        }

        
        {
          user?.name && (
            <div className="ml-4 font-bold">{user.name}</div>
          )
        }
        
        {
          props.repo && (
            <div className="ml-4 font-bold">{props.repo}</div>
          )
        }
        
        
      </div>
      
    </div>
  )
}
