interface ImageProps {
  src: string | undefined;
  alt: string | undefined;
  title?: string | undefined;
}

const Images = ({ src, alt, title }: ImageProps) => {
  return <img src={src} alt={alt} title={title} />;
};

export default Images;
