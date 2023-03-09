import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div>
      Kartu
      <div>Kartu</div>
      <div>Kartu</div>

      <a href="/product">
        <button>Go To Product</button>
      </a>
      <br />
      <a href="/">Go To Home</a>
    </div>
  )
}


export default Card;