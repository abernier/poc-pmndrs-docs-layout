import cn from '@/lib/cn'
import { ComponentProps, ReactNode } from 'react'

//
// https://codepen.io/abernier/pen/dyBwQqq?editors=1100
//
// import {
//   Layout,
//   LayoutContent,
//   LayoutHeader,
//   LayoutNav,
//   LayoutAside,
// } from "@/components/Layout"
//
// <Layout>
//   <LayoutHeader>header</LayoutHeader>
//   <LayoutContent>content</LayoutContent>
//   <LayoutNav>nav</LayoutNav>
//   <LayoutAside>aside</LayoutAside>
// </Layout>
//

export function Layout({ children }: { children?: ReactNode; header?: ReactNode; nav?: ReactNode; aside?: ReactNode }) {
  return (
    <div
      className={cn('grid gap-x-4 min-h-dvh', [
        'grid-cols-[1fr] grid-rows-[var(--header-height)_1fr] grid-areas-layout-1col',
        'md:grid-cols-[var(--side-w)_1fr] md:grid-areas-layout-2cols',
        'lg:grid-cols-[var(--side-w)_1fr_var(--side-w)] lg:grid-areas-layout-3cols'
      ])}>
      {children}
    </div>
  )
}

export function LayoutContent({ className, ...props }: ComponentProps<'main'>) {
  return <main className={cn('grid-in-m', className)} {...props} />
}

export function LayoutHeader({ className, ...props }: ComponentProps<'header'>) {
  return <header className={cn('grid-in-h sticky top-0 bg-red-200/50', className)} {...props} />
}

export function LayoutNav({ className, ...props }: ComponentProps<'nav'>) {
  return (
    <nav
      className={cn(
        'hidden md:[display:initial] overflow-auto',
        'grid-in-n sticky top-[--header-height] h-[calc(100dvh-var(--header-height))]',
        className
      )}
      {...props}
    />
  )
}

export function LayoutAside({ className, ...props }: ComponentProps<'aside'>) {
  return (
    <aside
      className={cn(
        'hidden lg:[display:initial] overflow-auto',
        'grid-in-t sticky top-[--header-height] h-[calc(100dvh-var(--header-height))]',
        className
      )}
      {...props}
    />
  )
}
