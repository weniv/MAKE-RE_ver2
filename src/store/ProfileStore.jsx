import { create } from 'zustand'
import { profileData } from '../data/dummy'

export const useProfileStore = create((set) => ({
  defaultProfileData: profileData,
  profileTestData: [],
  updateDefaultProfile: (val) => {
    set((prev) => ({
      defaultProfileData: { ...prev.defaultProfileData, ...val },
    }))
  },
}))
