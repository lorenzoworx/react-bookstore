import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <li>
    <div className="bookContainer">
      <h2>{book.Title}</h2>
      <p>{book.Author}</p>
      <div className="actionsContainer">
        <button type="button">Comment</button>
        <button type="button">Comment</button>
        <button type="button">Comment</button>
      </div>
    </div>
    <div className="progressDiv">
      <button type="button">Update Progress</button>
    </div>
  </li>
);

Book.propTypes = {
  book: PropTypes.shape({
    ID: PropTypes.number,
    Title: PropTypes.string,
    Author: PropTypes.string,
  }).isRequired,
};

export default Book;
