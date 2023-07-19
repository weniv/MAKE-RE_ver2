import React, { createContext } from 'react'
import { DndContext, closestCenter } from '@dnd-kit/core'
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export const dndContext = createContext(null)

export default function Dnd({ children, state, setState }) {
  const handleDragEnd = (e) => {
    const { active, over } = e
    setState((state) => {
      const oldIdx = state.findIndex((data) => data.id === active.id)
      const newIdx = state.findIndex((data) => data.id === over.id)
      return arrayMove(state, oldIdx, newIdx)
    })
  }

  const Sort = (id) => {
    return useSortable({
      id: id,
    })
  }

  const Style = (transform, transition) => {
    return {
      transform: CSS.Transform.toString(transform),
      transition,
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={state} strategy={verticalListSortingStrategy}>
        <dndContext.Provider
          value={{
            Style,
            Sort,
          }}
        >
          {children}
        </dndContext.Provider>
      </SortableContext>
    </DndContext>
  )
}
