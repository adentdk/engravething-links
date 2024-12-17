import Image from "next/image";

export default async function Home() { 
  return (
    <div className="max-w-lg w-full">
      <div className="flex flex-col items-center gap-2">
        <div className="rounded-full shadow-md p-2 overflow-hidden glass bg-neutral-50 bg-opacity-10">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/engravethingid.appspot.com/o/assets%2Flogo.png?alt=media&token=db00e878-9618-44a8-a446-bffd62cda999"
            alt="Engravething ID" width={100} height={100} />
        </div>
        <span className="font-bold text-lg text-white drop-shadow-md shadow-slate-300 text-center">“Kami grafir apapun yang kamu mau”</span>
      </div>
    </div>
  )
}
