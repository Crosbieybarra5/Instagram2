import PropTypes from "prop-types";
import { useState, Fragment } from "react";
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";
import AddComment from "./AddComment";

export default function Comments({
  docId,
  comments: allComments,
  posted,
  commentInput,
}) {
  const [comments, setComments] = useState(allComments);
  return (
    <Fragment>
      <div className="p-4 pt-1 pb-4">
        {comments.length >= 3 && (
          <p className="text-sm text-gray-base mb-1 cursor-pointer">
            View all comments
          </p>
        )}
        {comments.slice(0, 3).map((item) => (
          <p key={`${item.comment}-${item.displayName}`} className="m-1">
            <Link to={`/p/${item.displayName}`}>
              <span className="mr-1 font-bold">{item.displayName}</span>
            </Link>
            <span>{item.comment}</span>
          </p>
        ))}
        <p className="text-gray-base uppercase tet-xs mt-2">
          {formatDistance(posted, new Date(), { addSuffix: true })}
        </p>
      </div>
      <AddComment
        docId={docId}
        comments={comments}
        setComments={setComments}
        commentInput={commentInput}
      />
    </Fragment>
  );
}

Comments.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  posted: PropTypes.number.isRequired,
  commentInput: PropTypes.object.isRequired,
};
