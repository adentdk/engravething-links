import { GoogleTagManager } from "@next/third-parties/google";

export default function Layout(props: {
  carousel: React.ReactNode;
  selectedProducts: React.ReactNode;
  links: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-col gap-4">
        <div className="hero min-h-screen bg-[url(https://firebasestorage.googleapis.com/v0/b/engravethingid.appspot.com/o/assets%2Fhero-1.webp?alt=media&token=6e05bbb0-5a7a-458c-a68a-402ddbbad492)]">
          <div className="hero-overlay bg-gradient-radial from-transparent to-black backdrop-blur-sm bg-black/50"></div>
          <div className="hero-content flex-col gap-4 w-full">
            {props.links}
            {props.carousel}
          </div>
        </div>

        {props.selectedProducts}
      </main>
      <GoogleTagManager gtmId="G-FW5V8QG2NN" />
    </>
  )
}