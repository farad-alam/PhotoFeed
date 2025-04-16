"use client"

function LikedButton({ toggleLike , pin}) {
  return (
    <>
      <button
        onClick={() => toggleLike(pin.id)}
        className={`flex items-center ${
          pin.liked ? "text-red-500" : "text-gray-400"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          fill={pin.liked ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        {pin.liked ? "Liked" : "Like"}
      </button>
    </>
  );
}

export default LikedButton