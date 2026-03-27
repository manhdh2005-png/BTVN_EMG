// In your component file (must be a Client Component if defined inline)
import Image, { ImageLoaderProps } from 'next/image';

const imageLoader = ({ src, width, quality } : ImageLoaderProps) => {
  return `https://another-cdn.com{src}?w=${width}&q=${quality || 75}`;
};

export default function ImageCustomLoader() {
  return (
    <Image
      loader={imageLoader}
      src="my-image.jpg"
      alt="Description"
      width={500}
      height={500}
    />
  );
}
