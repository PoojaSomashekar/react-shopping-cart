import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/whilst/actions';
import { addToCartAction } from '../../store/cart/actions';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  let displayProductList;
  let whilstedIcon = false;
  let itemList = [];

  const onWhilstProduct = (e) => {
    const copyProduct = [...props.productsData.products];
    let id = e.currentTarget.id;
    let singleProduct = copyProduct.filter(list => list.id === +id);
    if (itemList.length === 0) {
      itemList.push(singleProduct[0]);
    } else {
      itemList.push(singleProduct[0]);
      const copyItem = [...itemList];
      const ids = copyItem.map(o => o.id)
      itemList = copyItem.filter(({ id }, index) => !ids.includes(id, index + 1))
    }
    const productObject = {
      whilstProduct: itemList
    };
    dispatch(actions.addToWhilstAction(productObject));
  };
  const onAddToBag = (e) => {
    let copyProducts = [...props.productsData.products];
    let addToCart = copyProducts.find(item => item.id === +e.currentTarget.id);
    dispatch(addToCartAction(addToCart));
  };

  if (props.productsData.products.length !== 0) {
    displayProductList = props.productsData.products.map(product => {
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
          <Button id={product.id} onClick={onWhilstProduct} className={classes.btns}>
            <i className="fa fa-heart"></i>
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
    <div className={classes.container}>
      {displayProductList}
    </div>
  )
};

export default ProductItem;