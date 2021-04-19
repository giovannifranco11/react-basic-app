import  React from 'react';
import ProductRow, { ProductRow2 } from '../product-row/product-row.comp';

import './product-category.style.css';

const ProductCategory = () => {
    return (
        
        <div >
            <div className="name-price">
                &nbsp;&nbsp;Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price
            </div>            
                    <div className="product-category-container">
                        Sporting Goods
                    </div>
                    <div>
                    <ProductRow/>
                    </div>
            
            <div className="product-category-container">
                Electronics
            </div>
                <div>
                   <ProductRow2/> 
                </div>
        </div>
    );
    
}

export default ProductCategory;