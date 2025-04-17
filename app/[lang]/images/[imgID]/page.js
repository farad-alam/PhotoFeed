import pins from "@/public/imageData";
import { getDectionary } from "../dictionaries";
import ImageModal from "@/app/components/ui/ImageModal";
export default async function ImageDetailPage({ params }) {
  const { imgID, lang } = params;
  const dictionari = await getDectionary(lang);
  // Find the pin with matching ID
  const pin = pins.find((pin) => pin.id === imgID);
console.log(imgID);
// console.log(dictionari);
console.log(pin);
  if (!pin) {
    return (
      <div className="flex items-center justify-center h-screen">
        Image not found
      </div>
    );
  }

  return (
    <>
      
        <div className="min-h-screen bg-gray-100 p-8">
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Left side - Image */}
              <div className="md:w-2/3 p-4">
                <img
                  src={pin.imageUrl}
                  alt={pin.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              </div>

              {/* Right side - Details */}
              <div className="md:w-1/3 p-6 border-l border-gray-200">
                <div className="flex justify-between items-start">
                  <h1 className="text-2xl font-bold text-gray-800">
                    {pin.title}
                  </h1>
                  <button className="text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
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
                  </button>
                </div>

                <p className="text-gray-600 mt-2">{pin.description}</p>

                <div className="mt-6">
                  <div className="flex items-center text-gray-700 mb-2">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>
                      {dictionari.author}
                      {": "} {pin.author}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-700 mb-2">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{pin.location}</span>
                  </div>

                  <div className="flex items-center text-gray-700 mb-2">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>
                      {dictionari.createdAt}{" "}
                      {new Date(pin.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-700 mb-4">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span>
                      {pin.views.toLocaleString()} {dictionari.views}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {dictionari.tags}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {pin.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
                  Download Normal
                </button>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
