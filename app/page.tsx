import Link from 'next/link'
import DownloadBtn from './download-btn'
import { Response } from './model'
import { getFileName } from './utils'

async function getData(): Promise<Response> {
  const url =
    'https://www.vistopia.com.cn/api/v1/content/play_list?api_token=sH7IC4mTWjkI47xwz0cyp8Ny6k94h3C5P8YSBK04rjSuM1vit6zIUzukxUEkkSRY&content_id=270'
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const { data } = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          vistopia articals backup&nbsp;
        </p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href={`https://www.vistopia.com.cn/detail/${data.content.content_id}`}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {data.content.title}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {`${data.content.text_desc}${data.content.author}`}
          </p>
        </a>
      </div>
      <DownloadBtn articles={data.articles} />
      <div className="mt-3">
        {data.articles.map(article => (
          <div className="mb-5" key={article.article_id}>
            <a
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              href={article.content_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{article.title}</span>
            </a>
            <audio
              className="px-5 py-4"
              src={article.media_key_full_url}
              controls
            />
            <Link
              className="px-5 py-4"
              href={`/api/download/${getFileName(
                article.media_key_full_url
              )}?id=${article.article_id}`}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              download
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
