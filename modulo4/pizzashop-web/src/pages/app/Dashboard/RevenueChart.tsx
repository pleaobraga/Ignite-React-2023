import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import colors from 'tailwindcss/colors'

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
} from 'recharts'

const data = [
  { date: '10/12', revenue: 400 },
  { date: '10/13', revenue: 450 },
  { date: '10/14', revenue: 500 },
  { date: '10/15', revenue: 550 },
  { date: '10/16', revenue: 1000 },
  { date: '10/17', revenue: 650 },
  { date: '10/18', revenue: 500 },
  { date: '10/19', revenue: 750 },
  { date: '10/20', revenue: 900 },
  { date: '10/21', revenue: 300 },
]

function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no Periodo
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Receita diária no perídodo
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart style={{ fontSize: 12 }} data={data}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default RevenueChart
