import  React from 'react';
import ProductCategory from '../product-category-row/product-category.comp';
import ProductRow from '../product-row/product-row.comp';


import './product-table.style.css';

const ProductTable = () => {
    return (
        <div className="product-table-container">
           <ProductCategory/>           
        </div>
    );    
}

export default ProductTable;