import { mainGalleryImages } from "../../constants";
import GalleryTemplate from "../common/GalleryTemplate";

const Gallery = () => {
  return (
    <section className="container my-12">
      <GalleryTemplate imagesArr={mainGalleryImages} headerTitle="Galeri" />
    </section>
  );
};

export default Gallery;
