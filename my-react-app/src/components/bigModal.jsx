import React from 'react';
import YouTube from 'react-youtube';
import { useEffect } from 'react';

export default function BigModal({ 
  movie, 
  title, 
  posterPath, 
  rating, 
  releaseDate, 
  language, 
  overview, 
  trailer, 
  className = "", 
}) {
  if (!movie) return null;

  const videoId = typeof trailer === "string" ? trailer : trailer?.key;

    useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
    }, []);

  return (
      <div className="relative w-full max-w-4xl md:max-w-5xl aspect-video overflow-y-auto rounded-xl bg-background text-white shadow-2xl border border-background/50 overflow-y-auto snap-y snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">

        {/* Modal Flex */}
        <div className="flex flex-cols-1 md:flex-cols-3 gap-6 p-6 md:p-8">

          {/* Details Section */}
          <div className="md:col-span-2 flex flex-col justify-between items-center space-y-4">
            {/*Trailer section*/}
                <div className="relative w-full max-w-5xl md:max-w-6xl aspect-video">
                    {videoId ? (
                        <YouTube iframeClassName='rounded-xl'
                            videoId={videoId}
                            className="absolute inset-0 w-full h-full"
                            opts={{
                            width: "100%",
                            height: "100%"
                            }}
                            onReady={(event) => {
                                event.target.playVideo();
                            }}                        
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full bg-zinc-900 text-zinc-400 rounded-lg">
                            No trailer available
                        </div>
                    )}
                </div>
            <div className="flex flex-row gap-4">
                <div>
                    <img src={posterPath} className='rounded-lg' />
                </div>
                <div>
                    <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2">
                        {title}
                    </h2>
              
                    {/* Meta Badges */}
                    <div className="flex flex-wrap gap-3 items-center text-sm font-semibold text-zinc-400 mb-4">
                    <span className="bg-amber-500 text-black px-2 py-0.5 rounded font-bold">
                      ★ {rating?.toFixed(1) || 'N/A'}
                    </span>
                    <span>{releaseDate ? new Date(releaseDate).getFullYear() : 'Unknown Year'}</span>
                    <span className="uppercase bg-zinc-800 px-2 py-0.5 rounded text-xs tracking-wider">
                      {language}
                    </span>
                </div>

              {/* Story Overview */}
              <p className="text-zinc-300 text-base leading-relaxed font-normal">
                {overview || "No overview available for this title."}
              </p>
                </div>

            </div>
          </div>

        </div>
      </div>
  );
}
