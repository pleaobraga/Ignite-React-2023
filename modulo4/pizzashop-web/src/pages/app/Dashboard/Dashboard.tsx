import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './DayOrderAmountCard'
import { MonthCanceledOrdersAmountCard } from './MonthCanceledOrderAmountCard'
import { MonthOrdersAmountCard } from './MonthOrderAmountCard'
import { MonthRevenueCard } from './MonthRevenueCard'
import { PopularProductsChart } from './PopularProductsChart'
import { RevenueChart } from './RevenueChart'

export function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dasboard</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <MonthRevenueCard />
        <MonthOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthCanceledOrdersAmountCard />
      </div>

      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </div>
  )
}
