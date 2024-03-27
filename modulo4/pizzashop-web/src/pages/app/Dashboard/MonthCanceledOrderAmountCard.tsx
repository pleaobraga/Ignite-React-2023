import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'

function MonthCanceledOrderAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mes)
        </CardTitle>
        <DollarSign className="h4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">10</span>
        <p className="text-sm text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">-20%</span>{' '}
          em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}

export default MonthCanceledOrderAmountCard
