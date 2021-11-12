import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classes from './Whilst.module.css';
import { addToWhilstAction, removeFromWhilstAction } from '../../store/whilst/actions';
import { addToCartAction } from '../../store/cart/actions';
let productsArray = [];
const Whilst = () => {
  let displayProductList;
  const dispatch = useDispatch();
  const whilstProducts = useSelector(state => state.whilstProducts);
  if (whilstProducts.whilstProduct.length !== 0) {
    whilstProducts.whilstProduct.forEach(itemList => {
      if (productsArray.length === 0) {
        productsArray.push(itemList);
      } else {
        productsArray.push(itemList);
        const copyItem = [...productsArray];
        const ids = copyItem.map(o => o.id)
        productsArray = copyItem.filter(({ id }, index) => !ids.includes(id, index + 1))
      }
    });
  }

  const onDeleteProduct = (e) => {
    let copyProducts = [...productsArray];
    let listItem = copyProducts.filter(item => item.id !== +e.currentTarget.id);
    productsArray = listItem;
    const productObject = {
      whilstProduct: listItem
    };
    dispatch(addToWhilstAction(productObject));
  };
  const onAddToBag = (e) => {
    let copyProducts = [...productsArray];
    let addToCart = copyProducts.find(item => item.id === +e.currentTarget.id);
    const cartItemObject = {
      cartItem: addToCart
    };
    dispatch(addToCartAction(addToCart));
    productsArray = copyProducts.filter(item => item.id !== +e.currentTarget.id);
    // productsArray = listItem;
    // const productObject = {
    //   whilstProduct: listItem
    // };
    // dispatch(addToWhilstAction(productObject));

  };

  if (productsArray.length !== 0) {
    displayProductList = productsArray.map(product => {
      return <Card key={product.id} className={classes.card_container}>
        <Card.Img variant="top" src={product.image} className={classes.card_img} />
        <div className={classes.rating}>
          <span className={classes.rating}>{product.rating.rate}
            <i className="fa fa-star"></i>
          </span>
          <span className={classes.rating}>{product.rating.count}</span>
        </div>
        <Card.Body className={classes.card_body}>
          <Card.Title>
            <span className={classes.label}>Title: </span>{product.title}
          </Card.Title>
          <Card.Text>
            <p><span className={classes.label}>Description:</span>{product.description}</p>
            <p><span className={classes.label}>Price:</span>
              <i className="fa fa-inr"><b> {product.price}</b></i>
            </p>
          </Card.Text>
          <Button id={product.id} onClick={onDeleteProduct} className={classes.btns}>
            <i className="fa fa-trash"></i>
          </Button>
          <Button id={product.id} onClick={onAddToBag} variant="primary" className={classes.btns}>
            <i className="fa fa-shopping-bag"></i>
          </Button>
        </Card.Body>
      </Card>
    })
  } else {
    displayProductList = <h4 className={classes.noProduct}>No Products to display!</h4>
  }
  return (
    <div className={classes.container}>{displayProductList}</div>
  )
}

export default Whilst