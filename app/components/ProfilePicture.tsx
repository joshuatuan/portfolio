import Image from "next/image";

export default function ProfilePicture({
  profilePicUrl,
}: {
  profilePicUrl: string;
}) {
  return (
    <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full shadow-xl md:mb-9 md:h-60 md:w-60 lg:order-2 lg:h-96 lg:w-96">
      <Image
        src={profilePicUrl}
        alt="Portrait of Joshua Miguel Tuan"
        quality={50}
        className="object-cover"
        fill
        priority
      />
    </div>
  );
}
