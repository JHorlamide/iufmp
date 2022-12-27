import React from "react";

interface ImageProps {
  id?: string;
  parentClassName?: string;
  imageClassName?: string;
  image: string;
  alt?: string;
}

const Image = ({
  id,
  parentClassName,
  imageClassName,
  image,
  alt
}: ImageProps) => {
  return (
    <div className={parentClassName}>
      <img
        id={id}
        className={imageClassName}
        src={image}
        alt={alt}
        loading="lazy"
      />
    </div>
  );
};

export default Image;
