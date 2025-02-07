import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const SITE_CONFIG = {
  default: {
    title: 'Limitex Docs',
    description: 'Developer Documentation by Limitex',
    ogImage: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp.png`,
    keywords: 'Documentation, Limitex, Unity, VRChat, UI Framework'
  },
  paths: [
    {
      pattern: '/vrc/monoui',
      config: {
        title: 'Mono UI',
        description: 'UI Framework MonoUI Documentation for VRChat',
        ogImage: `${process.env.NEXT_PUBLIC_SITE_URL}/ogp-monoui.png`,
        keywords: 'MonoUI, VRChat, UI Framework, Unity, Documentation'
      }
    }
  ]
}

const getPageConfig = (path, frontMatter, title) => {
  const matchedConfig = SITE_CONFIG.paths.find(
    ({ pattern }) => path.startsWith(pattern))?.config || SITE_CONFIG.default

  const titles = [title || frontMatter.title, matchedConfig.title, SITE_CONFIG.default.title]
    .filter((t, i, arr) => t && t !== arr[i - 1])

  return {
    title: titles.join(' - '),
    description: frontMatter.description || matchedConfig.description,
    ogImage: matchedConfig.ogImage,
    keywords: frontMatter.keywords || matchedConfig.keywords
  }
}

export default {
  logo: <span>Limitex Documents</span>,
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter, title } = useConfig()
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}${asPath}`
    const config = getPageConfig(asPath, frontMatter, title)

    return (
      <>
        <title>{config.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={config.description} />
        <meta name="keywords" content={config.keywords} />
        <meta name="author" content="Limitex" />
        <meta name="theme-color" content="#111111" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
        <meta property="og:title" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={config.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:description" content={config.description} />
        <meta property="og:site_name" content={SITE_CONFIG.default.title} />
        <meta property="og:locale" content="en_US" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={config.ogImage} />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
      </>
    )
  },
  project: {
    link: "https://github.com/Limitex/docs",
  },
  docsRepositoryBase: "https://github.com/Limitex/docs/blob/main",
  feedback: {
    content: "Feedback →",
    useLink: () => "https://github.com/Limitex/docs/issues/new",
  },
  footer: {
    content: (
      <span>
        © {new Date().getFullYear()}{" "}
        <a href="https://github.com/Limitex" target="_blank">
          Limitex
        </a>
        .
      </span>
    ),
  },
};
