import React from 'react';
import Img from 'gatsby-image';

import './sidebar.css';

export default ({ sidebarStory, sidebarBody }) => (

    <div className="sidebar-story">
        <p className="sidebar-subject">{sidebarStory.subject}</p>
        <h3 className="sidebar-title">{sidebarStory.title}</h3>
        <small className="sidebar-datetime">{sidebarStory.publishDate}</small>
        <Img alt="" fluid={sidebarStory.heroImage} />
        <p className="sidebar-body">{sidebarBody}</p>
    </div>
)