import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classes from './Cart.module.css';
import { addToCartAction, checkoutFromCartAction, removeFromCartAction } from '../../store/cart/actions';

const Cart = () => {
  let displayCartList;
  const cartItems = useSelector(state => state.cartObject);
  const dispatch = useDispatch();
  console.log(cartItems);

  const onIncreseItem = (e) => {
    const copyItem = [...cartItems.products];
    const incrementItem = copyItem.find(item => item.id === +e.currentTarget.id);
    dispatch(addToCartAction(incrementItem));
  };
  const onDecreseItem = (e) => {
    dispatch(removeFromCartAction(+e.currentTarget.id));
  };

  const onCheckout = (e) => {
    dispatch(checkoutFromCartAction(+e.currentTarget.id));
  }

  if (cartItems.products.length !== 0) {
    displayCartList = cartItems.products.map(product => {
      return <Card key={product.id} className={classes.card_container}>
        <Card.Img variant="top" src={product.image} className={classes.card_img} />
        <Card.Body className={classes.card_body}>
          <Card.Title>
            <span className={classes.label}>Title: </span>{product.title}
          </Card.Title>
          <Card.Text>
            <p><span className={classes.label}>Price:</span>
              <i className="fa fa-inr"><b> ({product.price}/item)</b></i>
            </p>
            <p><span className={classes.label}>Total Price:</span>
              <i className="fa fa-inr"><b> {product.totalPrice}</b></i>
            </p>
            <p>
              <b> x{product.quantity} </b>
            </p>
          </Card.Text>
          <div className={classes.btnActions}>
            <Button id={product.id} onClick={onDecreseItem} className={classes.btns}>
              -
            </Button>
            <Button id={product.id} variant="primary" onClick={onIncreseItem} className={classes.btns}>
              +
            </Button>
          </div>
          <Button id={product.id} variant="primary" onClick={onCheckout} className={classes.btns}>
            Checkout
          </Button>
        </Card.Body>
      </Card>
    })
  } else {
    displayCartList = <h4 className={classes.noProduct}>No Products to display!</h4>
  }
  return (
    <div className={classes.container}>{displayCartList}</div>
  )
}

export default Cart;