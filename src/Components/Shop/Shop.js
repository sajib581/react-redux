import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import Product from '../Product/Product';

const Shop = (props) => {
    const {products, addToCart} = props
    console.log(props);
    return (        
        <div>
            <h2>This is Shop</h2>
            {
                products.map(pd => <Product 
                    key={pd.id} 
                    product={pd} 
                    addToCart={addToCart}
                ></Product>)
            }
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        cart : state.cart,
        products : state.products        
    }
}
const mapDispatchToProps  = {
    addToCart : addToCart    ///bujhlam nah
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
