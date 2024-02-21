import path from 'path'
import { URL } from 'url'

export function getFileName(urlStr: string) {
  const parsedUrl = new URL(urlStr)
  const pathname = parsedUrl.pathname
  const basename = path.basename(pathname)
  const fileName = basename.split('.')[0]
  return fileName
}
