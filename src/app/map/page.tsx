import { PhotoMap } from "@/components/PhotoMap";
import { MAPBOX_ACCESS_TOKEN } from "@/config";

const MapPage = () => {
  return (
    <div>
      <PhotoMap accessToken={MAPBOX_ACCESS_TOKEN} />
    </div>
  );
};
export default MapPage;
