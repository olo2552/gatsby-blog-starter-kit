import React from 'react';
import GatsbyLink from 'gatsby-link';
import classNames from 'classnames';

import '../css/link.css';

class Link extends React.PureComponent {
  render() {
    const { children, className, to } = this.props;

    return (
      <GatsbyLink className={classNames(`link`, className)} to={to}>
        {children}
      </GatsbyLink>
    );
  }
}

export default Link;
