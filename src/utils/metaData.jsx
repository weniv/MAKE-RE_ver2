import { Helmet } from 'react-helmet-async'
import OG from '../assets/OG.png'

function MetaData({ meta }) {
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta
        name="keywords"
        content="메이커리, 위니브, 제주코딩베이스캠프, 개발자 이력서, 이력서, 개발자 커뮤니티, 개발자 이력서 makere, makere, weniv, jejucodingbasecamp,"
      />

      {/* OG */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      {/* <meta property="og:site_name" content={props.title} /> */}
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={OG} />
      <meta property="og:url" content={meta.url} />

      {/* twitter */}
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={OG} />
    </Helmet>
  )
}

export { MetaData }
