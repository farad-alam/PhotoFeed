import PhotoFeed from "../components/section/PhotoFeed"

export default function languagePage({params}) {
  const {lang} = params
  return (
    <>
    <h1>Within language page {lang}</h1>
    <PhotoFeed lang={lang}/>
    </>
  )
}
