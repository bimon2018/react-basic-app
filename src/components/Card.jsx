
const Card = (props) => {
  // console.log('props card : ', props);

  return (
    
    <div className="p-4 w-full bg-white shadow-md rounded-xl">
      <picture className="rounded-lg block overflow-hidden">
          {
            props.image &&
          
            <img
              className="w-full hover:scale-125"
              src={props.image}
              alt="gambar-custom"
            />
          }
        
      </picture>

      <h1 className="mt-4 mb-2 text-xl font-bold">{props.title}</h1>
      <p className="text-sm text-gray-600">{props.subtitle}</p>
    </div>
  )
}



// import { Link, useNavigate } from "react-router-dom";

// const Card1 = () => {
//   const navigate = useNavigate();

//   const goToProduct = () => {
//     navigate('/product');
//   }
//   const goToHome = () => {
//     navigate('/');
//   }

//   return (
//     <div>
      
//       <button type="button" onClick={goToProduct}>Go To Product</button>
//       <br/>
//       <button type="button" onClick={goToHome}>Go To Home</button>

//       <div>
//         Menggunakan Link to
//       </div>

//       <Link to="/product">
//         <button type="button">Go To Product</button>
//       </Link>
//       <br />
      
//       <Link to="/">
//         <button type="button">Go To Home</button>
//       </Link>

//     </div>
//   )
// }


export default Card;

