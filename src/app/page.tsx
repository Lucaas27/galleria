import db from "@/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (images, { desc }) => [desc(images.createdAt)],
  });
  return (
    <div className="grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* This is a hack to make the images repeat during development*/}
      {[...images, ...images, ...images, ...images, ...images].map((image, index) => (
        <div key={image.id + index} className="overflow-hidden transition-transform hover:scale-105">
          <div className="aspect-square cursor-pointer">
            <img src={image.url} alt={`Image ${image.name}`} className="h-full w-full object-cover" />
          </div>
          <p className="mt-2 truncate">{image.name}</p>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-wrap gap-4">
      <SignedOut>
        <div className="w-full px-4 py-8 md:px-8">
          {/* Hero section */}
          <div className="mb-12 text-center">
            <h1 className="mb-3 text-7xl font-extrabold tracking-tight">
              <span className="logo-text inline-block pb-2">Galleria</span>
            </h1>
            <p className="mx-auto max-w-xl text-lg text-gray-400">
              Your personal image collection, beautifully organized and always available.
            </p>
          </div>

          {/* Staggered gallery grid */}
          <div className="mx-auto mb-10 max-w-7xl columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3 lg:columns-4">
            {Array.from({ length: 12 }).map((_, index) => {
              // Randomize the heights to create visual interest
              const aspectRatio = ["aspect-square", "aspect-[4/5]", "aspect-[3/4]", "aspect-[4/3]", "aspect-[5/4]"][
                index % 5
              ];

              return (
                <div
                  key={index}
                  className="group relative mb-4 inline-block w-full overflow-hidden rounded-lg ring-1 ring-white/10 transition-all duration-300 hover:ring-teal-400/50"
                >
                  <div className={`${aspectRatio} w-full bg-gradient-to-b from-slate-800 to-slate-900`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-slate-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

                    {/* Shimmer effect overlay */}
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 cursor-pointer bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute right-0 bottom-0 left-0 p-4">
                        <p className="font-medium text-white">Unlock to view this image</p>
                        <p className="text-sm text-gray-400">Sign in required</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="text-center">
            <div className="group inline-block overflow-hidden rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 p-[1px]">
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span>Sign in to browse your gallery</span>
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </div>
  );
}
