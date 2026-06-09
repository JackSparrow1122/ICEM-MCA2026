import React from 'react';
import placementImage from '../../assets/images/topplace.avif';
import placementImageMobile from '../../assets/images/homemobile.avif';

function CommonPlacement() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Desktop Placement Image */}
      <div className="hidden md:block w-full">
        <img
          src={placementImage}
          alt="College Top Placements"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      {/* Mobile Placement Image */}
      <div className="block md:hidden w-full">
        <img
          src={placementImageMobile}
          alt="College Top Placements Mobile"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default CommonPlacement;
