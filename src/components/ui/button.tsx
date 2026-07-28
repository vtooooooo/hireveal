"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const MAGNET_RADIUS = 6

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  style,
  onMouseMove,
  onMouseLeave,
  onPointerDown,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"
  const ref = React.useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    onMouseMove?.(e as never)
    if (shouldReduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * MAGNET_RADIUS * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * MAGNET_RADIUS * 2
    ref.current.style.setProperty("--magnet-x", `${x}px`)
    ref.current.style.setProperty("--magnet-y", `${y}px`)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    onMouseLeave?.(e as never)
    ref.current?.style.setProperty("--magnet-x", "0px")
    ref.current?.style.setProperty("--magnet-y", "0px")
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLElement>) => {
    onPointerDown?.(e as never)
    if (shouldReduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const ripple = document.createElement("span")
    const size = Math.max(rect.width, rect.height) * 1.6
    ripple.style.position = "absolute"
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`
    ripple.style.width = `${size}px`
    ripple.style.height = `${size}px`
    ripple.style.borderRadius = "9999px"
    ripple.style.background = "currentColor"
    ripple.style.opacity = "0.25"
    ripple.style.pointerEvents = "none"
    ripple.style.transform = "scale(0)"
    ripple.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out"
    ref.current.appendChild(ripple)
    requestAnimationFrame(() => {
      ripple.style.transform = "scale(1)"
      ripple.style.opacity = "0"
    })
    setTimeout(() => ripple.remove(), 550)
  }

  return (
    <Comp
      ref={ref as React.Ref<HTMLButtonElement>}
      data-slot="button"
      data-variant={variant}
      data-size={size}
      style={{
        ...style,
        transform: shouldReduceMotion
          ? undefined
          : "translate(var(--magnet-x, 0px), var(--magnet-y, 0px))",
        transition: shouldReduceMotion ? undefined : "transform 0.15s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onPointerDown={handlePointerDown}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
