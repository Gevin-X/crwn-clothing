import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selector";

import MenuItem  from "../menu-item/menu-item.component";
import './directory.style.scss'


const Directory = ({sections}) => (
  <div className="directory-menu">
      {sections.map(({id, ...otherSectionProps})=>(  // ({title,imageUrl,id})  write fot "section" |||||>>>>>>>>  {this.state.section.map(section=>( <MenuItem key={section.id} title={section.title} /> ))} >>>>>>title,imageUrl,id,size > ...otherSectionProps
          <MenuItem key={id} {...otherSectionProps} /> // title={title} imageUrl={imageUrl} size={size} >>>> {...otherSectionProps}
      ))}
  </div>
  );

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})


export default connect (mapStateToProps)(Directory);