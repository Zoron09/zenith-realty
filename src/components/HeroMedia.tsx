import Image from "next/image";

// Both branches fill the same box, so swapping mediaType can't change layout.
const FILL = "absolute inset-0 h-full w-full object-cover";

export type HeroMediaProps = {
  /** Swap to "video" to drop a real reel in without restructuring the hero. */
  mediaType?: "image" | "video";
  src: string;
  alt: string;
  /** Still frame shown while a video buffers. Ignored for images. */
  poster?: string;
};

export default function HeroMedia({
  mediaType = "image",
  src,
  alt,
  poster,
}: HeroMediaProps) {
  if (mediaType === "video") {
    return (
      <video
        className={FILL}
        src={src}
        poster={poster}
        aria-label={alt}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      // Next 16: `priority` is deprecated in favour of `preload`.
      preload
      sizes="100vw"
      className="object-cover"
    />
  );
}
