import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = () => {
    const directorySections = useSelector(state => state.shop.sections)
    return (
        <div className="directory-menu">
            {
              directorySections.map(({id, title, ...otherSectionProps}) => (
                  <MenuItem key={id} title={title} {...otherSectionProps} />
              )) 
            }
        </div>
    )
}
export default Directory