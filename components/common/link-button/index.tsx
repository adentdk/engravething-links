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

  const handleButtonClick = useCallback(() => {
    if (!eventName) return;
    sendGTMEvent({
      event: eventName, value: eventValue
    })
  }, [eventName, eventValue])
  return (
    <Link
      href={href}
      target={target}
    >
      <button
        type="button"
        onClick={handleButtonClick}
        className={`btn btn-${color} btn-outline btn-block`}>
        {title}
      </button>
    </Link>
  )
}