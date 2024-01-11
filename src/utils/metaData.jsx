import { Helmet } from 'react-helmet-async'
import OG from '../assets/OG.png'

const meta = {
  title: 'MAKE:RE',
  description: '쉽게 빠르게 이력서를 커스텀할 수 있는 웹 서비스',
  url: 'https://make-re.weniv.co.kr/',
}

function MetaData({ meta }) {
  //   console.log(meta)
  //   const path = useLocation().pathname.substring(1)
  //   console.log(path)
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

      {/* <title>MAKE:RE</title>
      <meta
        property="description"
        content="쉽게 빠르게 이력서를 커스텀할 수 있는 웹/앱 서비스"
      />
      <meta
        property="keywords"
        content="메이커리, 위니브, 제주코딩베이스캠프, 개발자 이력서, 이력서, 개발자 커뮤니티, 개발자 이력서 makere, makere, weniv, jejucodingbasecamp,"
      />

      {/* OG */}
      {/* <meta property="og:type" content="website" />
      <meta property="og:title" content="메이커리" />
      <meta
        property="og:description"
        content="쉽게 빠르게 이력서를 커스텀할 수 있는 웹/앱 서비스"
      />
      <meta property="og:image" content={OG} />
      <meta property="og:url" content="https://make-re.weniv.co.kr/" />
      <meta property="og:site_name" content="메이커리" />

      {/* twitter */}
      {/* <meta name="twitter:title" content="메이커리" />
      <meta
        name="twitter:description"
        content="쉽게 빠르게 이력서를 커스텀할 수 있는 웹/앱 서비스"
      />
      <meta name="twitter:image" content={OG} />  */}
    </Helmet>
  )
}

export { MetaData }
