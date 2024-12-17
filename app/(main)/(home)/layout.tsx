export default function Layout(props: {
  children: React.ReactNode;
  carousel: React.ReactNode;
  selectedProducts: React.ReactNode;
  links: React.ReactNode;
}) {
  return (
    <>
      <section
        className="hero min-h-screen"
        style={{
          backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/engravethingid.appspot.com/o/assets%2Flogo.png?alt=media&token=db00e878-9618-44a8-a446-bffd62cda999)'
        }}>
        <div className="hero-overlay bg-gradient-radial from-transparent to-black backdrop-blur-sm bg-black/50"></div>
        <div className="hero-content flex-col gap-4 w-full">
          {props.children}
          {props.links}
          {props.carousel}
        </div>
      </section>
        
      {props.selectedProducts}
    </>
  )
}