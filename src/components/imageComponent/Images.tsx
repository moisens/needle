interface ImageProps {
  src: string;
  alt: string;
  title: string;
}

const Images = ({ src, alt, title }: ImageProps) => {
  return <img src={src} alt={alt} title={title} />;
};

export default Images;
