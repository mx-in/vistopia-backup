type GetParams = {
  params: {
    filename: string
  }
}

// export an async GET function. This is a convention in NextJS
export async function GET(req: Request, { params }: GetParams) {
  // filename for the file that the user is trying to download
  const filename = params.filename
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const DUMMY_URL = `http://cdn.vistopia.com.cn/${filename}.mp3`

  console.log('DUMMY_URL', DUMMY_URL)
  // use fetch to get a response
  const response = await fetch(DUMMY_URL)

  // return a new response but use 'content-disposition' to suggest saving the file to the user's computer
  return new Response(response.body, {
    headers: {
      ...response.headers, // copy the previous headers
      'content-disposition': `attachment; filename="${id}.mp3"`
    }
  })
}
