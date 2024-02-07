import React, { useState } from "react";

function Post({ postInfo }) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleMoreInfoClick = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <>
      <h1>{postInfo.title}</h1>
      <button onClick={handleMoreInfoClick}>more info</button>
      {showMoreInfo && (
        <div>
          <p>Additional information:</p>
          <p>{postInfo.body}</p>
        </div>
      )}
      <p>-----------------------</p>
    </>
  );
}

export default Post;
