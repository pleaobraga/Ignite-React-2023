import { api } from '@/lib/axios'

export interface GetProfileResponse {
  phone: string | null
  email: string
  id: string
  name: string
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export const getProfile = async (): Promise<GetProfileResponse> => {
  const response = await api.get('/me')

  return response.data
}
