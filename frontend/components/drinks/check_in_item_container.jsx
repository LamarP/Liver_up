import React from 'react';
import { connect } from 'react-redux';

const CheckIn = ({ checkIn, author }) => {
  const { rating, body } = checkIn;
  return (
    <div>
      <ul>
        <li>Rating: {rating}</li>
        <li>{body} - by {author.username}</li>

      </ul>
    </div>
  );
};

const mapStateToProps = ({entities: { users }}, { checkIn }) => {
  return {
    author: users[checkIn.author_id]
  };
};

export default connect(mapStateToProps)(CheckIn);