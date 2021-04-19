import  React from 'react';

import './product-row.style.css';

const ProductRow = () => {
    return (
        
        <div >
                    <div className="red">
                        Football &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $49.99
                    </div>
                    <div className="red">
                        Baseball &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $9.99
                    </div>
                    <div className="red">
                        <span id="red">Basketball</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $29.99
                    </div>
            
                                
        </div>
    );
    
}
export default ProductRow;


export function ProductRow2()  {
    return (
        
        <div >

                    <div className="red">
                        ipod Touch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $99.99
                    </div>
                    <div className="red">
                        <span id="red">Iphone 5</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $399.99
                    </div>
                    <div className="red">
                        Nexus 7 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $199.99
                    </div>
        </div>
                    );
            }
            
