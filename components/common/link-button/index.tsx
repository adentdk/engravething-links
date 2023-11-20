'use client'

import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";
import { useCallback } from "react";

type Props = {
  title: string
  href: string
  color?: string
  eventName?: string
  eventValue?: string | number
}

export default function LinkButton({ title, href, color = 'info', eventName, eventValue }: Props) {
  const target = href.startsWith('#') ? undefined : '_blank';

  const handleButtonClick = useCallback<React.MouseEventHandler<HTMLAnchorElement>>((e) => {
    const url = new URL(e.currentTarget.href);
    if (url.hostname === window.location.hostname && url.hash) {
      e.preventDefault();
      const element = document.getElementById(url.hash.slice(1))
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (!eventName) return;
    sendGTMEvent({
      event: eventName, value: eventValue
    })
  }, [eventName, eventValue])

  return (
    <Link
      href={href}
      target={target}
      onClick={handleButtonClick}
    >
      <button
        type="button"
        className={`btn btn-${color} btn-outline btn-block`}>
        {title}
      </button>
    </Link>
  )
}