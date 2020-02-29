import React, { useState } from "react";

export default function({ data }) {
  const [thumbnail, setThumbnail] = useState(data.thumbnail);

  switch (data.thumbnail) {
    case "self":
      console.log("self", data);
      return (
        <img
          height={50}
          width={70}
          src="https://www.reddit.com/static/self_default2.png"
          alt="thumbnail"
        ></img>
      );
    case "nsfw":
      console.log("nsfw", data);
      return (
        <img
          height={70}
          width={70}
          src="https://www.reddit.com/static/nsfw2.png"
          alt="thumbnail"
        ></img>
      );

    case "default":
      console.log("default", data);
      return (
        <img
          height={50}
          width={70}
          src="https://www.reddit.com/static/noimage.png"
          alt="thumbnail"
        ></img>
      );

    default:
      console.log(thumbnail);
      return (
        <img
          height={data.thumbnail_height}
          width={data.thumbnail_width || 140}
          src={thumbnail}
          onError={() => {
            console.log("IMG ERROR", data);
            setThumbnail("https://www.reddit.com/static/self_default.png");
          }}
          alt="thumbnail"
        ></img>
      );
  }
}
