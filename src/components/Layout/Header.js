import React from 'react';
import classes from './Header.module.css'
import mealsImage from '../../assets/lily-banse--YHSwy6uqvk-unsplash.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
      <React.Fragment>
        <header className={classes.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton onShowCart={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
          <img src={mealsImage} alt="Meal" />
        </div>
      </React.Fragment>
    );
}

export default Header;