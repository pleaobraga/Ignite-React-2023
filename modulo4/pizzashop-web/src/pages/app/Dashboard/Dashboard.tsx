import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import MonthRevenueCard from './MonthRevenueCard'
import MonthOrderAmountCard from './MonthOrderAmountCard'
import DayOrderAmountCard from './DayOrderAmountCard'
import MonthCanceledOrderAmountCard from './MonthCanceledOrderAmountCard'
import RevenueChart from './RevenueChart'

export function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dasboard</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <MonthRevenueCard />
        <MonthOrderAmountCard />
        <DayOrderAmountCard />
        <MonthCanceledOrderAmountCard />
      </div>

      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
      </div>
    </div>
  )
}
