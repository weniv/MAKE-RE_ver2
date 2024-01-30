import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { resumeItem } from '../data/dummy'
import { getCurrentDate } from '../utils'

export const useResumeStore = create(
  persist(
    (set) => ({
      // 이력서 리스트
      resumeList: [
        { id: 1, content: resumeItem, lastModified: getCurrentDate() },
      ],
      // 이력서 관리 > 새로운 이력서 생성
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
      // 이력서 관리 > 이력서 삭제
      deleteResume: (id) =>
        set((prev) => ({
          resumeList: prev.resumeList.filter((e) => e.id !== id),
        })),
      // 이력서 관리 > 이력서 이름 수정
      updateResumeName: (id, name) =>
        set((prev) => ({
          resumeList: prev.resumeList.map((el) =>
            el.id === id ? { ...el, content: { ...el.content, name } } : el
          ),
        })),
      // 이력서 내부 정보 수정
      // updateResumeData: (id, chapter, key, value) =>
      //   set((prev) => ({
      //     resumeList: prev.resumeList.map((el) =>
      //       el.id === id
      //         ? { ...el, content: { ...el.content[chapter], [key]: value } }
      //         : el
      //     ),
      updateProfileData: (id, key, value) => {
        set((state) => ({
          resumeList: state.resumeList.map((el) =>
            Number(el.id) === Number(id)
              ? {
                  ...el,
                  content: {
                    ...el.content,
                    profile: {
                      ...el.content.profile,
                      [key]: value,
                    },
                  },
                }
              : el
          ),
        }))
      },
      // 수정된 이력서 정보를 명시적으로 저장 ex. 버튼 클릭 등
      saveResumeData: () => {
        const currentData = JSON.parse(
          localStorage.getItem('makere-resume-list')
        )
        console.log('save save')
        localStorage.setItem('makere-resume-list', JSON.stringify(currentData))
      },
    }),
    {
      name: 'makere-resume-list',
      storage: createJSONStorage(() => localStorage), // 이력서 생성, 이름 수정, 삭제 관련
      partialize: (state) => ({ resumeList: state.resumeList }),
      onRehydrate: (state) => {
        // 로컬 스토리지에서 데이터가 재로딩될 때 실행되는 함수
        // resumeList의 길이가 변경되었을 때만 로컬 스토리지에 저장
        if (
          state.resumeList.length !==
          JSON.parse(localStorage.getItem('makere-resume-list')).length
        ) {
          localStorage.setItem(
            'makere-resume-list',
            JSON.stringify(state.resumeList)
          )
        }
      },
    }
  )
)
