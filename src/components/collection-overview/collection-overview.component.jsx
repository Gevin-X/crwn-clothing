import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import './collection-overview.style.scss'



const CollectionOverView = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({id, ...otherCollectionProps}) =>(
        <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
    </div>
)


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps) (CollectionOverView);