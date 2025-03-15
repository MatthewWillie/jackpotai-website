// components/Carousel.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full max-w-4xl mt-12 mx-auto">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70 transition"
      >
        &larr;
      </button>

      <div
        ref={carouselRef}
        className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth space-x-4 px-12 scrollbar-hide"
      >
        {images.map((imgSrc, idx) => (
          <div
            key={idx}
            className="snap-center flex-shrink-0 w-[260px] md:w-[300px] h-auto bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-2 shadow-lg"
          >
            <Image
              src={imgSrc}
              alt={`App Preview ${idx + 1}`}
              width={300}
              height={600}
              className="rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10 hover:bg-black/70 transition"
      >
        &rarr;
      </button>
    </div>
  );
}
