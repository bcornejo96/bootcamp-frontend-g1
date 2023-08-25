import { ImageList } from "@mui/material"
import ProductItem from "./ProductItem"



const ProductList = ({ products }) => {
  return (
    <ImageList>
      {/* {JSON.stringify(products)} */}
      {products && products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
      </ImageList>
    
  )
}

export default ProductList