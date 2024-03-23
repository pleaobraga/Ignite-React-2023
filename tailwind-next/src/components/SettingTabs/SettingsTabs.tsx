'use client'

import { useState } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import * as Scroll from '@radix-ui/react-scroll-area'

import TabItem from './TabItem'

export default function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')

  const tabs = [
    { title: 'My Details', value: 'myDetails' },
    { title: 'Profile', value: 'profile' },
    { title: 'Password', value: 'password' },
    { title: 'Team', value: 'team' },
    { title: 'Plan', value: 'plan' },
    { title: 'Billing', value: 'billing' },
    { title: 'Email', value: 'email' },
    { title: 'Notifications', value: 'notifications' },
    { title: 'Integrations', value: 'integrations' },
    { title: 'Api', value: 'api' },
  ]

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Scroll.Root className="w-full" type="scroll">
        <Scroll.ScrollAreaViewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
            {tabs.map((tab) => {
              return (
                <TabItem
                  key={tab.value}
                  title={tab.title}
                  value={tab.value}
                  isSelected={currentTab === tab.value}
                />
              )
            })}
          </Tabs.List>
        </Scroll.ScrollAreaViewport>

        <Scroll.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <Scroll.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </Scroll.Scrollbar>
      </Scroll.Root>
    </Tabs.Root>
  )
}
