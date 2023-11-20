'use client'

import { sendGTMEvent } from "@next/third-parties/google";
import classNames from "classnames";
import Link from "next/link";
import { useCallback } from "react";

type Props = {
  title: string
  href: string
  color?: string
  eventName?: string
  eventValue?: string | number
}

export default function LinkButton({ title, href, color, eventName, eventValue }: Props) {
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
        style={color ? {
          color: `${color} !important`,
          borderColor: `${color} !important`,
        } : {}}
        className={classNames(`btn btn-block glass`)}>
        {title}
      </button>
    </Link>
  )
}