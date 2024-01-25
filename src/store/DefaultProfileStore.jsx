import { create } from 'zustand'
import { profileData } from '../data/dummy'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useDefaultProfileStore = create(
  // persist(
  (set) => ({
    // defaultProfileName: '',
    defaultProfileData: profileData,
    updateDefaultProfile: (e) => {
      set((state) => ({
        defaultProfileData: {
          ...state.defaultProfileData,
          [e.target.name]: e.target.value,
        },
      }))
    },
  })
  // {
  //   name: 'makere-default-profile-name',
  //   storage: createJSONStorage(() => sessionStorage),
  //   partialize: (state) => ({ defaultProfileName: state.defaultProfileName }),
  // }
  // )
)
