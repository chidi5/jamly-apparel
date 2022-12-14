import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/product';
import Layout from '../components/Layout';
import Load from '../components/Load';
import Product from '../components/Product';
import ProductContainer from './ProductContainer'
import ScreenContainer from './ScreenContainer';

function ProductScreen() {

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, products} = productList

    const storeFront = useSelector(state => state.storeFront)
    const { loading:storeLoading, store } = storeFront

    useEffect(() => {
        if(store){
            dispatch(listProducts(store.store_data._id))
        }

    }, [dispatch, store])

    return (
        <Layout
            showFooter={true}
            showHeader={true} 
        >
            {storeLoading || loading  ? <Load />
            :
            products &&
            <ScreenContainer>
                <ProductContainer>
                    <div className='relative my-8 flex flex-row-reverse items-center justify-between border-t border-b border-gray-300 min-h-[48px] min-w-[80px]'>
                    </div>
                    <div className='py-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                        {products.map(product => (
                            <div key={product._id} className='flex flex-col'>
                                <Product product={product} />
                            </div>
                        ))}
                    </div>
                </ProductContainer>
            </ScreenContainer>
            }
        </Layout>
    )
}

export default ProductScreen