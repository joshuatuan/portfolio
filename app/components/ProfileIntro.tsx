export default function ProfileIntro({ introText }: { introText: string }) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-2xl font-bold md:mb-4 lg:text-3xl">
        Hi there 👋 I am
      </p>
      <h1 className="mb-8 text-4xl font-bold md:mb-6 lg:mb-9 lg:text-5xl xl:text-6xl">
        Joshua Miguel Tuan
      </h1>
      <p className="text-xl font-[450] leading-relaxed text-stone-800 md:max-w-2xl lg:px-0 xl:text-2xl xl:leading-loose">
        {introText}
      </p>
    </div>
  );
}
