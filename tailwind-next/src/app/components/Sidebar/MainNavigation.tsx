import {
  Home,
  BarChart,
  SquareStack,
  CheckSquare,
  Flag,
  Users,
} from 'lucide-react'
import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" Icon={Home} link="" />
      <NavItem title="Dashboard" Icon={BarChart} link="" />
      <NavItem title="Projects" Icon={SquareStack} link="" />
      <NavItem title="Tasks" Icon={CheckSquare} link="" />
      <NavItem title="Reporting" Icon={Flag} link="" />
      <NavItem title="Users" Icon={Users} link="" />
    </nav>
  )
}
