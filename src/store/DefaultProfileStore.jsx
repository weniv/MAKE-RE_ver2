import { create } from 'zustand'
import { profileData } from '../data/dummy'

export const useDefaultProfileStore = create((set) => ({
  defaultProfileData: profileData,
  updateDefaultProfile: (e) => {
    set((state) => ({
      defaultProfileData: {
        ...state.defaultProfileData,
        [e.target.name]: e.target.value,
      },
    }))
  },
}))
