import React from "react";

function BannerName({ name, discount, more }) {
  const currency = "$";
  return (
    <div className="bannerContent">
      <h3>Nice to Meet You {name},</h3>
      <p>
        Get Discount For Every <span>{`${currency}${discount}`}</span>{" "}
        purchase
      </p>
      <a href={more}>Explore More</a>
    </div>
  );
}

export default BannerName;
