import React from 'react';
import {createStructuredSelector } from 'reselect';
import MenuItem from '../menu-item/menu-item.component';
import {selectDirectorySelectors} from'../../redux/directory/directory.selectors'

import './directory.styles.scss';
import { connect } from 'react-redux';

const Directory =({sections})=> (
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );

  const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySelectors
  })

export default connect(mapStateToProps) (Directory);
