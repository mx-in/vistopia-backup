'use client'

import { useRouter } from 'next/navigation'
import { Article } from './model'

function prepareMedia(mediaData: any): string {
  if (mediaData instanceof Blob) {
    return URL.createObjectURL(mediaData)
  }
  return mediaData
}

function downloadMp3(url: string, fileName = 'audio') {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      console.log('blob', blob)
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${fileName}.mp3`
      a.click()
      window.URL.revokeObjectURL(url)
    })
    .catch(error => console.error(error))
}

export async function fetchBlob(blobUrl: string) {
  console.log('fetchblob', blobUrl)
  const response = await fetch(blobUrl)
  console.log('fetchblob res', response)
  return response.blob()
}

export default function DownloadBtn({ articles }: { articles: Article[] }) {
  const router = useRouter()
  const onDownloadBtnClick = () => {
    const article = articles[0]
    console.log(article)
    downloadMp3(article.media_key_full_url)
    articles.slice(0, 2).forEach(article => {
      downloadMp3(article.media_key_full_url, article.title)
    })
  }
  return (
    <button
      className="mt-3 text-sm text-gray-500 underline"
      onClick={() => onDownloadBtnClick()}
    >
      下载全部音频
    </button>
  )
}
