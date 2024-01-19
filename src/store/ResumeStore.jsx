import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { resumeItem } from '../data/dummy'
import { getCurrentDate } from '../utils'

export const useResumeStore = create(
  persist(
    (set) => ({
      resumeList: [
        { id: 1, content: resumeItem, lastModified: getCurrentDate() },
      ],
      createNewResume: (val) =>
        set((prev) => ({
          resumeList: [
            ...prev.resumeList,
            {
              id: val.id,
              content: val.content,
            },
          ],
        })),
      deleteResume: (id) =>
        set((prev) => ({
          resumeList: prev.resumeList.filter((e) => e.id !== id),
        })),
      updateResumeName: (id, name) =>
        set((prev) => ({
          resumeList: prev.resumeList.map((el) =>
            el.id === id ? { ...el, content: { ...el.content, name } } : el
          ),
        })),
    }),
    {
      name: 'resume-list',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
