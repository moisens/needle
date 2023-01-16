interface SectionlideProps  {
  children: React.ReactNode;
}

interface SectionSlide extends SectionlideProps {
  className: string,
  key?: string
}

type Slides = SectionSlide;




const SectionSlide = ({children, className, key}: Slides) => {
  return (
    <section
      className={className}
      key={key}
    >
      {children}
    </section>
  )
}

export default SectionSlide;