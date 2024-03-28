import { Building, ChevronDown, LogOut } from 'lucide-react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getProfile } from '@/api/get-profile'
import { getManagedRestaurant } from '@/api/get-managed-restaurant'
import { Skeleton } from './ui/skeleton'
import { Dialog, DialogTrigger } from './ui/dialog'
import { StoreProfileDialog } from './StoreProfileDIalog'
import { signOut } from '@/api/sign-out'
import { useNavigate } from 'react-router-dom'

function AccountMenu() {
  const navigate = useNavigate()

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryFn: getProfile,
    queryKey: ['profile'],
    staleTime: Infinity,
  })

  const { data: restaurant, isLoading: isLoadingRestaurant } = useQuery({
    queryFn: getManagedRestaurant,
    queryKey: ['managed-restaurant'],
    staleTime: Infinity,
  })

  const { mutateAsync: signOutfn, isPending: isSigningOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate('/sign-in', { replace: true })
    },
  })

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex select-none items-center gap-2"
          >
            {isLoadingRestaurant ? (
              <Skeleton className="h-4 w-40" />
            ) : (
              restaurant?.name
            )}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            {isLoadingProfile ? (
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            ) : (
              <>
                <span className="text-sm">{profile?.name}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {profile?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Building className="mr-2 h-4 w-4" />
              Perfil da Loja
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem
            asChild
            className=" cursor-pointer text-rose-500 dark:text-rose-400"
            disabled={isSigningOut}
          >
            <button className="w-full" onClick={() => signOutfn()}>
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <StoreProfileDialog />
    </Dialog>
  )
}

export default AccountMenu
