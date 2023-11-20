import { getLinks } from "~/app/actions"
import LinkButton from "~/components/common/link-button"

export const revalidate = 600

export default async function Page() {
  const links = await getLinks()
  return (
    <div className="max-w-lg w-full">
      <div className="flex flex-col gap-2">
        {links.map((link, linkIndex) => (
          <LinkButton
            key={['Link', linkIndex].join('-')}
            eventName="main_link_clicked"
            eventValue={link.title}
            href={link.url}
            title={link.title}
          />
        ))}
      </div>
    </div>
  )
}