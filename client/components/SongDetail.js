import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import query from '../queries/fetchSong';
import { Link } from 'react-router';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    if (!song) {
      return <div></div>;
    }
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
      </div>
    );
  }
}

export default graphql(query, {
  options(props) {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);