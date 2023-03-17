import React from 'react';

import Card from "src/components/Card";

const ProductsList = ({ datas }) => {
  return (
    <div className="w-full container px-4 m-auto my-8">
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
  )
}

export default ProductsList;