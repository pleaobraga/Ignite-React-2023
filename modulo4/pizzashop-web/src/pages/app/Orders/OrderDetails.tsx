import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface OrderDetailsProps {
  orderId: string
}

export function OrderDetails() {
  // Add your component logic here

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 12e12319u</DialogTitle>
        <DialogDescription>Detalhes do Pedido</DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">Pedro Leão</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">31 9 9999-9999</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Email</TableCell>
              <TableCell className="flex justify-end">
                p_leao_braga@hotmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">3 min</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza de Calabresa</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 45,90</TableCell>
              <TableCell className="text-right">R$ 91,80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza de Frango com Catupiry</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">R$ 39,90</TableCell>
              <TableCell className="text-right">R$ 39,90</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza de Mussarela</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">R$ 35,90</TableCell>
              <TableCell className="text-right">R$ 35,90</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right font-medium">
                R$ 535,90
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
