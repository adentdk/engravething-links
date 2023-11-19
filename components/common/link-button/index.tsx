import Link from "next/link";

type Props = {
  title: string
  href: string
  color?: string
}

export default function LinkButton({ title, href }: Props) {
  const target = href.startsWith('#') ? undefined : '_blank';
  return (
    <Link
      href={href}
      target={target}
    >
      <button
        type="button"
        className="btn btn-info btn-outline btn-block">
        {title}
      </button>
    </Link>
  )
}