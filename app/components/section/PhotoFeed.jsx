// components/PinterestGrid.tsx
"use client"
import Link from "next/link";
import LikedButton from "../ui/LikedButton";
import imageData from "@/public/imageData"
  // Mock data for pins
 const pins = imageData


const PhotoFeed = ({lang}) => {


  const toggleLike = (id) => {
    // In a real app, you would update the state or make an API call here
    console.log(`Toggled like for pin ${id}`);
  };

  return (
    <div className="p-4">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {pins.map((pin) => (
          <div
            key={pin.id}
            className="break-inside-avoid rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <Link href={`${lang}/${pin.id}`}>
              <img
                src={pin.imageUrl}
                alt={pin.title}
                className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Link>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-500">
                {pin.title}
              </h3>
              <p className="text-gray-400 mb-2">{pin.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{pin.views.toLocaleString()} views</span>
                <LikedButton toggleLike={toggleLike} pin={pin} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoFeed;


