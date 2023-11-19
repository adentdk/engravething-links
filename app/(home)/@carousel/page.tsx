import Image from "next/image";

export default function Page() {
  return null;
  return (
    <div className="max-w-lg w-full ">
      <div className="carousel rounded-md">
        <div id="slide1" className="carousel-item relative w-full h-48">
          <Image
            width={200}
            height={200}
            className="object-cover w-full"
            src="https://firebasestorage.googleapis.com/v0/b/engravethingid.appspot.com/o/assets%2Fhero-1.webp?alt=media&token=ea9529b3-3853-4d92-9759-87ecd7d9a345"
            alt="slide"
          />
        </div>
        <div id="slide2" className="carousel-item relative w-full h-48">
          <Image
            width={200}
            height={200}
            className="object-cover w-full"
            src="https://firebasestorage.googleapis.com/v0/b/engravethingid.appspot.com/o/assets%2Fhero-1.webp?alt=media&token=ea9529b3-3853-4d92-9759-87ecd7d9a345"
            alt="slide"
          />
        </div>
        <div id="slide3" className="carousel-item relative w-full h-48">
          <Image
            width={200}
            height={200}
            className="object-cover w-full"
            src="https://firebasestorage.googleapis.com/v0/b/engravethingid.appspot.com/o/assets%2Fhero-1.webp?alt=media&token=ea9529b3-3853-4d92-9759-87ecd7d9a345"
            alt="slide"
          />
        </div>
        <div id="slide4" className="carousel-item relative w-full h-48">
          <Image
            width={200}
            height={200}
            className="object-cover w-full"
            src="https://firebasestorage.googleapis.com/v0/b/engravethingid.appspot.com/o/assets%2Fhero-1.webp?alt=media&token=ea9529b3-3853-4d92-9759-87ecd7d9a345"
            alt="slide"
          />
        </div>
      </div>
    </div>
  )
}