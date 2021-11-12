import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card'
import { BrowserRouter as Router, Link } from "react-router-dom";

import classes from './Categories.module.css';
import menClothingImg from '../../men_clothing.jpg';
import womenClothingImg from '../../women_clothing.jpg';
import jewellsImg from '../../jewells.jpg';
import electronicsImg from '../../electronics_1.jpg';

const Categories = (props) => {
  const category = {
    men_clothing: 'men_clothing',
    women_clothing: 'women_clothing',
    jewellery: 'jewellery',
    electronics: 'electronics'
  }
  return (
    <Card className={classes.cards_container}>
      <Card className={classes.image_card}>
        <Link to={{
          pathname: '/products',
          category_name: {
            name: 'men_clothing'
          }
        }}>
          <Card.Img variant="top" className={classes.category_img} src={menClothingImg} />
          <Card.Body>
            <Card.Title className={classes.card_title}>Men</Card.Title>
          </Card.Body>
        </Link>
      </Card>
      <Card className={classes.image_card}>
        <Link to={{
          pathname: '/products',
          category_name: {
            name: 'women_clothing'
          }
        }}>
          <Card.Img variant="top" className={classes.category_img} src={womenClothingImg} />
          <Card.Body>
            <Card.Title className={classes.card_title}>Women</Card.Title>
          </Card.Body>
        </Link>
      </Card>
      <Card className={classes.image_card}>
        <Link to={{
          pathname: '/products',
          category_name: {
            name: 'jewellery'
          }
        }}>
          <Card.Img variant="top" className={classes.category_img} src={jewellsImg} />
          <Card.Body>
            <Card.Title className={classes.card_title}>Jewellery</Card.Title>
          </Card.Body>
        </Link>
      </Card>
      <Card className={classes.image_card}>
        <Link to={{
          pathname: '/products',
          category_name: {
            name: 'electronics'
          }
        }}>
          <Card.Img variant="top" className={classes.category_img} src={electronicsImg} />
          <Card.Body>
            <Card.Title className={classes.card_title}>Electronics</Card.Title>
          </Card.Body>
        </Link>
      </Card>
    </Card>
  );
}

export default Categories;