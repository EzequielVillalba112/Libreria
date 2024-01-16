import Star0 from "../../img/star/E-0.png";
import Star1 from "../../img/star/E-1.png";
import Star2 from "../../img/star/E-2.png";
import Star3 from "../../img/star/E-3.png";
import Star4 from "../../img/star/E-4.png";
import Star5 from "../../img/star/E-5.png";

export const StarRatio = (numStar) => {
  if (numStar == 0) {
    return Star0;
  }
  if (numStar == 1) {
    return Star1;
  }
  if (numStar == 2) {
    return Star2;
  }
  if (numStar == 3) {
    return Star3;
  }
  if (numStar == 4) {
    return Star4;
  }
  if (numStar == 5) {
    return Star5;
  }
};
