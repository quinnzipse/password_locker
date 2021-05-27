import Head from 'next/head'

// @ts-ignore
import nightwind from 'nightwind/helper'
interface MetaProps {
  title?: string,
  keywords?: string,
  description?: string
}

const Meta = ({ title, keywords, description }: MetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='keywords' content={keywords} />
      <meta name="description" content={description} />

      <link rel="icon" href="/favicon.ico" />
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5' />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#317EFB"/>

      <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Password Locker',
  keywords: 'Keywords',
  description: 'Description'
}

export default Meta
