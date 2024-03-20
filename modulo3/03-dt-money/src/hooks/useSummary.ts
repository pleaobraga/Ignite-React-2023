import { TransactionsContext } from '../contexts/TransactionContext'
import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = transactions.reduce(
    (acc, item) => {
      if (item.type === 'income') {
        acc.income += item.price
        acc.total += item.price
      }

      if (item.type === 'outcome') {
        acc.outcome += item.price
        acc.total -= item.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  )

  return summary
}
