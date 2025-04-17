import PhotoFeed from "@/app/components/section/PhotoFeed"

export default async function languagePage({params}) {
  const {lang} = await params
  return (
    <>
    
    <PhotoFeed lang={lang}/>
    </>
  )
}
