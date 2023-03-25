import React from "react";
import SHOP_DATA from './shop.data.js';
import Collectionpreview from "../../components/collection-preview/collection-preview.component.jsx";

class ShopPage extends React.Component{
    constructor(props){
        super(props);

    this.state ={
      collections:SHOP_DATA
    }
};

render(){
    const {collections} = this.state //destructuring
    return (
    <div>
        {
        collections.map(({id, ...othercollectionprops}) => (
          <Collectionpreview key={id} {...othercollectionprops}/>
        ))
       }
    </div>
    );

}
}

export default ShopPage;
