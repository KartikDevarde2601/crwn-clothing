import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action';
import WithSpinner from '../../components/with-spinner/with-spinner.styles';
import { createStructuredSelector } from 'reselect';
import { selectCollectionFetching} from '../../redux/shop/shop.selectors'


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);



class ShopPage extends React.Component  {  
 
  state ={
    loading:true
  };
  


  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {fetchCollectionsStartAsync} =this.props;
    fetchCollectionsStartAsync();
  }


render(){ 
const {match}=this.props;
const {isCollectionFetching} =this.state;
return(
  <div className='shop-page'>
  <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>}/>
  <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />} />
</div>
)
}
}
  
 const mapStateToProps = createStructuredSelector({
  isCollectionFetching:selectCollectionFetching
 })

 const mapDispatchToProps =disptch=>({
  fetchCollectionsStartAsync: ()=> disptch(fetchCollectionsStartAsync())
 })
export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);
