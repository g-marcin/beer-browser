import { FC, useEffect, useState } from 'react';
import { Loader } from '..';

type AsyncImageProps = {
  src: string;
  alt: string;
  className: string;
};

export const AsyncImage: FC<AsyncImageProps> = ({ src, alt, className }) => {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  useEffect(() => {
    setLoadedSrc(null);
    if (src) {
      const handleLoad = () => {
        setLoadedSrc(src);
      };
      const image = new Image();
      image.addEventListener('load', handleLoad);
      image.src = src;
      return () => {
        image.removeEventListener('load', handleLoad);
      };
    }
  }, [src]);
  if (loadedSrc === src) {
    return <img src={src} alt={alt} className={className} />;
  }
  return <Loader />;
};
