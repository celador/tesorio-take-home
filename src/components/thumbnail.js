import React, { useState } from "react";

export default function({ data }) {
  const [thumbnail, setThumbnail] = useState(data.thumbnail);

  switch (data.thumbnail) {
    case "self":
      return (
        <img
          height={50}
          width={70}
          src="https://www.reddit.com/static/self_default2.png"
          alt="thumbnail"
        ></img>
      );
    case "nsfw":
      return (
        <img
          height={70}
          width={70}
          src="https://www.reddit.com/static/nsfw2.png"
          alt="thumbnail"
        ></img>
      );

    case "default":
      return (
        <img
          height={50}
          width={70}
          src="https://www.reddit.com/static/noimage.png"
          alt="thumbnail"
        ></img>
      );

    default:
      return (
        <img
          height={data.thumbnail_height}
          width={data.thumbnail_width || 140}
          src={thumbnail}
          onError={() => {
            setThumbnail("https://www.reddit.com/static/self_default.png");
          }}
          alt="thumbnail"
        ></img>
      );
  }
}
