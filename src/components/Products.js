import React from 'react'
import Product from './Product'
import { Link, Route, useRouteMatch } from "react-router-dom";

function Products() {
    const productData = [
        {
          id: 1,
          name: "NIKE Liteforce Blue Sneakers",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
          status: "Available",
        },
        {
          id: 2,
          name: "Stylised Flip Flops and Slippers",
          description:
            "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
          status: "Out of Stock",
        },
        {
          id: 3,
          name: "ADIDAS Adispree Running Shoes",
          description:
            "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
          status: "Available",
        },
        {
          id: 4,
          name: "ADIDAS Mid Sneakers",
          description:
            "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
          status: "Out of Stock",
        },
      ];
      
      const { url } = useRouteMatch();
      const linkList = productData.map((product) => {
        return (
          <li key={product.id}>
            <Link to={`${url}/${product.id}`}>{product.name}</Link>
          </li>
        );
      })
    return (
        <div>
               <div>
          <h3>Products</h3>
          <ul>{linkList}</ul>
        </div>
        <Route path={`${url}/:productId`}>
        <Product data={productData} />
      </Route>
      <Route exact path={url}>
        <p style={{ textAlign: "center" }}>Please select a product.</p>
      </Route>
        </div>
    )
}

export default Products
