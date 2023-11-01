import React from "react";
import Common from "../components/common";

const Result = ({ route }) => {
  const score = route.params.score;
  let banner =
    score > 4
      ? "https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png"
      : "https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png";

  return (
    <Common
      titleText="RESULTS"
      route="Home"
      score={score}
      banner={banner}
      buttonText="GO TO HOME"
    />
  );
};

export default Result;
