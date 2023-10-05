import React, { useContext } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewSubtitle } from '../../atoms/Title'
import PreviewLink from '../../atoms/PreviewItem/PreviewLink'

export default function EducationPreview() {
  const { data } = useContext(LocalContext)
  const urlData = data.url
  const urlList = urlData.filter((url) => url.content.trim() || url.link.trim())

  return (
    <>
      {!!urlList.length && (
        <section>
          <PreviewSubtitle>Url</PreviewSubtitle>
          {urlList.map((url) => (
            <div>
              <p>{url.content}</p>
              <PreviewLink link={url.link} />
            </div>
          ))}
        </section>
      )}
    </>
  )
}
