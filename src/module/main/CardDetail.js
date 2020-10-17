import React, { Component, Suspense, lazy } from 'react';
import { connect, Provider } from 'react-redux';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class CardDetailView extends Component {
    goBack =() =>{
      const {history} = this.props;
      console.log('::::::::::::::::::', history);
      history.push(`/products`);
    }
render() {
    const { product } = this.props;
    return(
    <>{product && 
        <>
        
        <IconButton
                    color="inherit"
                    aria-label="Back"
                    id="headerBackIcon"
                    onClick={() => this.goBack()}
                >
                    <ArrowBackIcon />
                </IconButton>
    <Card>
        <CardHeader
            title={product.productName}
        />
    <CardContent
    >
      <img
    src={`https://mobile-tha-server-8ba57.firebaseapp.com${product.productImage}`}
    alt="product image "
    key={product.productName} 
    />
      <span>Price :{product.price}</span>
      <span>In Stock :{product.inStock}</span>
      <span>Review Count :{product.reviewCount}</span>
      <span>Review Rating :{product.reviewRating}</span>
    </CardContent>
    </Card>
    </>
    }</>
        
    );
}
}

const mapStateToProps = state => {
    return {
        product: state.mainState.productDetail
    };
};


export default compose(
  connect(mapStateToProps, null)
)(CardDetailView);
