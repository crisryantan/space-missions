/*
 * SpaceMissions
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import './SpaceMissions.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class SpaceMissions extends React.PureComponent {
  render() {
    return (
      <h1>
        <div>Header component here..</div>
        <div className="wrapper">
          <div>Search Filters component here..</div>
          <div> Search Results component here..</div>
        </div>
      </h1>
    );
  }
}
