import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { format, quality, dpr } from "@cloudinary/url-gen/actions/delivery";


import { CLOUDINARY_CLOUD_NAME } from "@/constants";

// Cloudinary instance.
const cld = new Cloudinary({
  cloud: {
    cloudName: CLOUDINARY_CLOUD_NAME,
  },
});

export const bannerPhoto = (imageCldPubId: string) => {
  return (
    cld
      .image(imageCldPubId)

      .resize(
        fill().width(1200).height(297) // Aspect ratio 5:1
      )
      // Optimize for web
      .delivery(format("auto"))
      .delivery(quality("auto"))
      .delivery(dpr("auto"))
      
  );
};