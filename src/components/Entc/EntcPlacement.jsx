<<<<<<< HEAD
import React, { memo } from 'react';

=======
>>>>>>> 1b62aa6 (push)
// Import profile images
import johnDoeImage from '../../assets/images/bca/sidharth.avif';
import janeSmithImage from '../../assets/images/bca/shwetank.avif';
import arjunPatelImage from '../../assets/images/bca/Vishwajeet_Mahendra_Ranaware.avif';
import snehaRaoImage from '../../assets/images/bca/amitsing.avif';
import aliKhanImage from '../../assets/images/bca/poornima.avif';
import meeraDasImage from '../../assets/images/bca/kushal.avif';

// Profile data
const profiles = [
<<<<<<< HEAD
  { name: "Mr. Siddhant Kadam", batch: "(Batch : 2024-25)", ctc: "CTC 27 LPA", image: johnDoeImage },
  { name: "Mr. Shwetank Upadhyay", batch: "(Batch : 2024-25)", ctc: "CTC 27 LPA", image: janeSmithImage },
  { name: "Mr. Vishwajeet ", batch: "(Batch : 2024-25)", ctc: "CTC 21 LPA", image: arjunPatelImage },
  { name: "Mr. Amitsingh Tanwar", batch: "(Batch : 2024-25)", ctc: "CTC 21 LPA", image: snehaRaoImage },
  { name: "Ms. Poornima Theurkar", batch: "(Batch : 2024-25)", ctc: "CTC 21 LPA", image: aliKhanImage },
  { name: "Mr. Kushal Swamy", batch: "(Batch : 2024-25)", ctc: "CTC 21 LPA", image: meeraDasImage },
];

const ProfileCard = memo(({ profile }) => (
  <div className="flex flex-col items-center text-center space-y-2">
    <img
      src={profile.image}
      alt={profile.name}
      className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border-4 border-[#36A5B9] object-cover object-top"
    />
    <div className="text-sm sm:text-base font-semibold text-gray-800 whitespace-nowrap">
      {profile.name}
    </div>
    <div className="text-xs sm:text-sm text-gray-600">{profile.batch}</div>

    {/* CTC Tag */}
    <div className="bg-gradient-to-l from-[#DC8620] via-[#FDD951] to-[#DC8620] px-3 py-1 rounded-full text-black font-bold text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center gap-1">
      <span className="font-medium">CTC</span>
      <span className="text-lg sm:text-xl md:text-2xl">
        {profile.ctc.match(/\d+(\.\d+)?/)}
      </span>
      <span className="font-medium">LPA</span>
    </div>
  </div>
));

function EntcPlacement() {
  return (
    <div className="py-10 px-4 md:px-16  md:px-8">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#555555]">
        Our <span className="text-[#117577]">Top</span> Placements
      </h1>

      {/* Responsive Profiles Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8 ">
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} profile={profile} />
=======
  {
    name: "Mr. Siddhant Kadam",
    batch: "(Batch : 2024-25)",
    ctc: "27",
    image: johnDoeImage,
  },
  {
    name: "Mr. Shwetank Upadhyay",
    batch: "(Batch : 2024-25)",
    ctc: "27",
    image: janeSmithImage,
  },
  {
    name: "Mr. Vishwajeet",
    batch: "(Batch : 2024-25)",
    ctc: "21",
    image: arjunPatelImage,
  },
  {
    name: "Mr. Amitsingh Tanwar",
    batch: "(Batch : 2024-25)",
    ctc: "21",
    image: snehaRaoImage,
  },
  {
    name: "Ms. Poornima Theurkar",
    batch: "(Batch : 2024-25)",
    ctc: "21",
    image: aliKhanImage,
  },
  {
    name: "Mr. Kushal Swamy",
    batch: "(Batch : 2024-25)",
    ctc: "21",
    image: meeraDasImage,
  },
];

function IntegratedBbaMbaPlacement() {
  return (
    <div className="py-10 px-4 sm:px-6 md:px-8">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#555555]">
        Our <span className="text-[#36A5B9]">Top</span> Placements
      </h1>

      {/* Responsive Profiles Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
        {profiles.map(({ name, batch, ctc, image }, index) => (
          <div key={`${name}-${index}`} className="flex flex-col items-center text-center space-y-2">
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border-4 border-[#36A5B9] object-cover object-top"
            />
            <div className="text-sm sm:text-base font-semibold text-gray-800 whitespace-nowrap">{name}</div>
            <div className="text-xs sm:text-sm text-gray-600">{batch}</div>

            {/* CTC Tag */}
            <div className="bg-gradient-to-l from-[#DC8620] via-[#FDD951] to-[#DC8620] px-3 py-1 rounded-full text-black font-bold text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center gap-1">
              <span className="font-medium">CTC</span>
              <span className="text-lg sm:text-xl md:text-2xl">{ctc}</span>
              <span className="font-medium">LPA</span>
            </div>
          </div>
>>>>>>> 1b62aa6 (push)
        ))}
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default memo(EntcPlacement);
=======
export default IntegratedBbaMbaPlacement;
>>>>>>> 1b62aa6 (push)
