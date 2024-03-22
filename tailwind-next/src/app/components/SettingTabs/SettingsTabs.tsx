'use client'

import * as Tabs from '@radix-ui/react-tabs'
import TabItem from './TabItem'
import { useState } from 'react'

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
    </Tabs.Root>
  )
}
