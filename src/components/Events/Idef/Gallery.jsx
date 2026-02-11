import GalleryTemplate from "../../common/GalleryTemplate";
import { galleryImages } from "../../../constants";

const Gallery = () => {
  return (
    <section className="mb-20">
      <GalleryTemplate imagesArr={galleryImages} headerTitle="IDEF'25 Anı Galerisi" />
    </section>
  );
};

export default Gallery;
