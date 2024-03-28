import { api } from '@/lib/axios'

export interface GetManagedRestaurantResponse {
  name: string
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export const getManagedRestaurant =
  async (): Promise<GetManagedRestaurantResponse> => {
    const response = await api.get('/managed-restaurant')

    return response.data
  }
