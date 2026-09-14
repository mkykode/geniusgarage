'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps } from "react"

type NavLinkProps = ComponentProps<typeof Link>

export default function NavLink(props: NavLinkProps) {
  const { href, style, children } = props
  const pathname = usePathname()
  const activeStyle = pathname === href ? { color: "red" } : {}

  const newStyle = {
    ...style,
    ...activeStyle
  }
  return href && <Link
    href={href}
    style={newStyle}
  >{children}</Link>

}
