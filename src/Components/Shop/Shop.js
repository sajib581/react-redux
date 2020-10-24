import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        {name : 'Lenevo Laptop', id:1},
        {name : 'Asus', id:2},
        {name : 'Dell Laptop', id:3},
        {name : 'HP Laptop', id:4},
        {name : 'Toshiba Laptop', id:5}        
    ]
    return (        
        <div>
            <h2>This is Shop</h2>
            {
                products.map(pd => <Product product={pd}></Product>)
            }
        </div>
    );
};

// const mapStateToProps = state =>{
//     return {
//         cart : state.cart,
//         products : state.products        
//     }
// }
// const mapDispatchToProps  = {
//     addToCart : addToCart    
// }

// const connectToStor = connectToStor(mapStateToProps, mapDispatchToProps)
// connect(mapStateToProps, mapDispatchToProps)(Shop)

// export default connect(mapStateToProps, mapDispatchToProps)

export default Shop ;