import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getElectronicsAction, getJewelleryAction, getMensClothingAction, getwomensClothingAction } from '../../store/get-products/actions';
import ProductItem from '../ProductItem/ProductItem';

const Products = (props) => {
  const productsList = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (props.location.category_name.name) {
      case 'men_clothing':
        return dispatch(getMensClothingAction());
      case 'women_clothing':
        return dispatch(getwomensClothingAction());
      case 'jewellery':
        return dispatch(getJewelleryAction());
      case 'electronics':
        return dispatch(getElectronicsAction());
      default:
        return productsList;
    }

  }, [props.location.category_name]);

  console.log(productsList.products);
  return (
    <Fragment>
      <ProductItem productsData={productsList} />
    </Fragment>

  )
}

export default Products;