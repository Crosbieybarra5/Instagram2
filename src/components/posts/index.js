import { useRef } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Image from "./Image";
import Actions from "./Actions";
import Footer from "./Footer";
import Comments from "./Comments";

export default function Post({ content }) {
  const commentInput = useRef(null);

  const handleFocus = () => commentInput.current.focus();
  // components
  // header, img, actions(like & comment icons), footer, comments
  return (
    <div className="col-span-4 rounded border bg-white border-gray-primary mb-12">
      <Header username={content.username} />
      <Image src={content.imageSrc} caption={content.caption} />
      <Actions
        docId={content.docId}
        totalLikes={content.likes.length}
        likedPhoto={content.userLikedPhoto}
        handleFocus={handleFocus}
      />
      <Footer caption={content.caption} username={content.username} />
      <Comments
        docId={content.docId}
        comments={content.comments}
        posted={content.dateCreated}
        commentInput={commentInput}
      />
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired,
    docId: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired,
    photoId: PropTypes.number.isRequired,
    userId: PropTypes.string.isRequired,
    userLatitude: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    userLongitude: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};
