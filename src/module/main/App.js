import React, { Component, Suspense, lazy } from 'react';
import { connect, Provider } from 'react-redux';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import {
    TablePagination
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import compose from 'recompose/compose';
import { Action } from './Action';
import { MainAction } from './MainAction';
import  CardDetailView  from './CardDetail';
import LoaderComponent from '../components/loaderComponent/loaderComponentView';
import ErrorComponent from '../components/error_handling/ErrorHandling';
/**
 * ...
 * It act as the root container for the application
 */
class App extends Component {
    /**
     * @constructor
     * @param {object} props
     */
    constructor(props) {
        super(props);
        this.state= {
          pageNumber:1,
          pageSize:8
        }
    }

    componentDidMount() {
      const{ pageNumber,pageSize}= this.state;
      const { getproductData } = this.props;
      getproductData(pageNumber,pageSize);
    }

    /**
     * ...
     * This method is change page nd set new value to the page
     */

    handleChangePage = (event, newPage) => {
      const { pageSize } = this.state;
      const { getproductData } = this.props;
        this.setState({
            pageNumber: newPage
        });
        // getproductData(newPage,pageSize);
    };

    /**
     * ...
     * This method is to change rows on selection of dropdown
     */

    handleChangeRowsPerPage = event => {
      const { pageSize } = this.state;
      const { getproductData } = this.props;
        this.setState({ pageSize: +event.target.value, pageNumber: 1 });
        getproductData(1, +event.target.value);
    };

    cardClick = (product) =>{
      const {history, setParticularProduct} = this.props;
      history.push(`/product-details/${product.productId}`);
      setParticularProduct(product);
    }
    /**
     * ...
     * @ReactRender
     */
    render() {
      const { productData, classes } = this.props;
      const{ pageNumber,pageSize, id}= this.state;
      console.log(':::::::::::::::::::App', );
      return (
    <div>{productData.loading && <LoaderComponent />}
    {productData.data && <Grid container spacing={16}>
      <Grid item xs={12} md={12}><h1 >List of Products</h1></Grid>
      {
        productData.data.products.map(product => {
          return (
            <Grid item xs={12} md={6}>
                    <Card onClick={()=> this.cardClick(product)}>
                                        <CardHeader
                                            title={product.productName}
                                        />
                                    <CardContent
                                    >
                                      <img
                src={`https://mobile-tha-server-8ba57.firebaseapp.com${product.productImage}`}
                alt="product image  "
                key={product.productName} 
            />
                                      <span>Price :{product.price}</span>
                                      <span>In Stock :{product.inStock}</span>
                                      <span>Review Count :{product.reviewCount}</span>
                                      <span>Review Rating :{product.reviewRating}</span>
                                    </CardContent>
                    </Card>
                    {/* { id === product.productId && <CardDetailView product={product} />} */}
                </Grid>
          )
        })
      }
      
      <TablePagination
                    rowsPerPageOptions={[8, 16, 24]}
                    component="div"
                    count={productData.data.products.length}
                    rowsPerPage={pageSize}
                    page={pageNumber}
                    backIconButtonProps={{
                        'aria-label': 'previous page'
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'next page'
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    id="table-pagination"
                />
                
                </Grid>}
    {productData.error && <ErrorComponent />}</div>
      )
    }
}

const mapStateToProps = state => {
    return {
        productData: state.mainState.productData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getproductData: (num, size) => {
            const action = Action.Create(MainAction.GET_CARDS_DATA,{
              num,size
            });
            dispatch(action);
        },
        setParticularProduct: (product) => {
          const action = Action.Create(MainAction.GET_PARTICULA_PRODUCT_DATA,{
            product
          });
          dispatch(action);
      },
      }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(App);
