
import { CLOUDINARY__IMAGE_PREFIX } from "../Commons/constant";
const RestrauntCard = ({ cloudinaryImageId, name, cuisines, deliveryTime }) => {
  return (
    <div className="w-48 p-2 m-2 shadow-lg bg-pink-50 rounded-lg">
      <img
        src={CLOUDINARY__IMAGE_PREFIX + cloudinaryImageId}
        alt="Restaraunt-image"
      />
      <h2 className="font-bold">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{deliveryTime} Minutes </h3>
    </div>
  );
};

export default RestrauntCard;
