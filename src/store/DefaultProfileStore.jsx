import { create } from 'zustand'
import { profileData } from '../data/dummy'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useDefaultProfileStore = create(
  persist(
    (set, get) => ({
      defaultProfileName: '',
      defaultProfileData: profileData,
      updateDefaultProfileName: (e) => {
        set({
          defaultProfileName: e.target.value,
        })
      },
      updateDefaultProfile: (e) => {
        set((state) => ({
          defaultProfileData: {
            ...state.defaultProfileData,
            [e.target.name]: e.target.value,
          },
        }))
      },
      updateDefaultDataWithVal: (key, value) => {
        set((state) => ({
          defaultProfileData: {
            ...state.defaultProfileData,
            [key]: value,
          },
        }))
      },
    }),
    {
      name: 'makere-default-profile-name',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ defaultProfileName: state.defaultProfileName }),
    }
  )
)
