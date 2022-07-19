import ImageGallery from 'react-image-gallery';
import galleryStyles from "../styles/Gallery.module.scss"

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];
function Gallery() {


  return (
    <section>
      <div className="container">
        <ImageGallery items={images} />
      </div>
    </section>
  )
}

export default Gallery