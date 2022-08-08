import ImageGallery from 'react-image-gallery';
import galleryStyles from "../styles/Gallery.module.scss"

function Gallery({ images }) {
  const imageList = images.map((image) => {
    return {
      original: image.download_url,
      thumbnail: image.download_url,
      originalHeight: 500,
      originalWidth: 400,
      thumbnailHeight: 70,
      thumbnailWidth: 100,
    }
  })
  return (
    <section className={galleryStyles.galleryWrapper}>
      <h2 className={galleryStyles.galleryTitle}>THƯ VIỆN</h2>

      <ImageGallery
        items={imageList}
        showFullscreenButton={false}
        showPlayButton={false}
        lazyLoad={true}
      />
    </section>
  )
}


export default Gallery