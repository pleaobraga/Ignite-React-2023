'use client'

import { Logo } from './Logo'
import { Cog, LifeBuoy, Menu, Search } from 'lucide-react'
import { MainNavigation } from './MainNavigation'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { Input } from '../Input/Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button/Button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 ">
      <div className="flex items-center justify-between">
        <Logo />

        <Collapsible.CollapsibleTrigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu className="w- h-6" />
          </Button>
        </Collapsible.CollapsibleTrigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control type="text" placeholder="Search" />
        </Input.Root>

        <MainNavigation />

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" Icon={LifeBuoy} link="" />
            <NavItem title="Settings" Icon={Cog} link="" />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200"></div>

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
