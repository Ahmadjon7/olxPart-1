import React , { useEffect, useState} from 'react';
import Container from './../../utils/Container';
import instance from '../../api/instance';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './MainProducts.scss';

const MainProducts = () => {
    const [productData, setProdductData] = useState([])

    useEffect(() =>{ 
        instance.get("/products?offset=0&limit=20")
        .then(response => setProdductData(response.data))
        .catch(err => console.log(err))
    },[])

    function trimDescription(str){
        return str.split(" ").slice(0 , 8).join(" ") + "..."
    }

    return (
        <section className="main-products">
            <h2 className='main-products--title'>Premium reklamalar</h2>
            <Container>
                <div className="main-product--wrapper">
                    {
                        productData.map(product => 
                            <div key={product.id} className="product-item">
                                <Link to="/product" className='prodcut-item--link'>
                                    <img src={product.images[0]} alt="" className='product-item__image' />
                                    <h3 className='product-item__title'>{product.title}</h3>
                                </Link>
                                <div className='prodcut-item__tabs'>
                                    <div>
                                        <p className='product-item__text'>{trimDescription(product.description)}</p>
                                        <strong className='product-item__price'>${product.price}</strong>
                                    </div>
                                    <FiHeart/>
                                </div>
                            </div>    
                        )
                    }
                </div>
            </Container>
        </section>
    );
};

export default MainProducts;