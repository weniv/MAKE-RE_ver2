import { create } from 'zustand'
import { profileData } from '../data/dummy'

export const useProfileStore = create((set) => ({
  profileTestData: profileData,
  defaultProfileData: profileData,
  yourAction: (val) => set((state) => ({ yourState: state.yourState })),
}))
