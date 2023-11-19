import Image from "next/image"
import { getLinks } from "~/app/actions"
import LinkButton from "~/components/common/link-button"

export default async function Page() {
  const links = await getLinks()
  return (
    <div className="max-w-lg w-full">
      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="rounded-full shadow-md p-2 overflow-hidden glass bg-neutral-50 bg-opacity-10">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/engravethingid.appspot.com/o/assets%2Fcropped-EngraveThing-1-270x270.png?alt=media&token=4a59f11c-176a-4335-9ea8-f74ec778e3f0"
            alt="Engravething ID" width={100} height={100} />
        </div>
        <span className="font-bold text-lg text-neutral-100 drop-shadow-md shadow-white">“Kami grafir apapun yang kamu mau”</span>
      </div>
      <div className="flex flex-col gap-2">
        {links.map((link, linkIndex) => (
          <LinkButton
            key={['Link', linkIndex].join('-')}
            href={link.url}
            title={link.title}
          />
        ))}
      </div>
    </div>
  )
}