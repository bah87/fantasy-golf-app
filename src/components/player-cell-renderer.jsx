import React from 'react';
import { Link } from 'react-router-dom';

export class PlayerCellRenderer extends React.Component {
  get playerURL() {
    if (this.props.value && this.props.data && this.props.data.id) {
      return `/player/${this.props.data.id}/${this.props.value
        .split(' ')
        .join('-')}`;
    }

    return undefined;
  }

  render() {
    return this.playerURL ? (
      <Link to={this.playerURL}>{this.props.value}</Link>
    ) : (
      this.props.value
    );
  }
}
