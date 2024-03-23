import { LogOut } from 'lucide-react'
import { Button } from '../Button/Button'

export function Profile() {
  return (
    <div className="grid grid-cols-[max-content_1fr_min-content] items-center gap-3">
      <img
        src="https://github.com/pleaobraga.png"
        className="h-10 w-10 rounded-full"
        alt="Profile picture"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm/5 font-semibold text-zinc-700">
          Pedro leão
        </span>
        <span className="truncate text-sm/5 text-zinc-500">
          p_leao_braga@gmail.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
