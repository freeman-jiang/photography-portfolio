import { PhotoMap } from "@/components/PhotoMap";
import { MAPBOX_ACCESS_TOKEN } from "@/config";
import { fetchAllPhotos } from "@/contentful";

const MapPage = async () => {
  const allPhotos = await fetchAllPhotos();

  return (
    <div>
      <PhotoMap photos={allPhotos} accessToken={MAPBOX_ACCESS_TOKEN} />
    </div>
  );
};
export default MapPage;
