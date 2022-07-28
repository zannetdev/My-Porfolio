import { Image } from 'next/image'

const ImageSSR = ({url})=>{
    console.log(url)
    return(
        <Image
    src={url}
    alt="AnhellO :: Top Langs"
  />
    )
}
export default ImageSSR