import Image from "next/image";
export default function About() {
  return (
    <main className="w-full min-h-screen py-10 px-4">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start text-center gap-8 sm:gap-12 text-neutral-600">
        <div className="relative group h-fit mt-8 opacity-0 animate-slidein [--slidein-delay:400ms]">
          <Image
            src="/images/monica-about.webp"
            width={300}
            height={500}
            alt="Monica Fang"
            className="rotate-90"
          />
        </div>

        <div className="flex flex-col font-sans gap-4 mb-20 sm:mt-6 w-8/12 sm:w-1/3 text-center sm:text-left bg-[rgba(255,255,255,0.85)] backdrop-blur-sm p-6 rounded-2xl">
          <h1 className="font-serif italic text-2xl animate-slidein opacity-0 [--slidein-delay:200ms]">
          About me
          </h1>
          <div className="flex flex-col gap-6 text-sm sm:text-base">
            <p className="animate-slidein opacity-0 [--slidein-delay:400ms]">
              Hi, I’m Monica Fang, a UX/UI designer passionate about creating intuitive and impactful digital experiences. With a background in global business and digital art, I merge creativity with strategy to design user-centered solutions that engage and inspire. My work isn’t just about aesthetics—it’s about crafting meaningful interactions that give a voice to those who are often unheard.
            </p>
            <p className="animate-slidein opacity-0 [--slidein-delay:500ms]">
              My journey into UX/UI design started unexpectedly, sparked by a simple yet profound question from my brother during a frustrating gaming experience: “Why do they ask for feedback but nothing ever improves?” This curiosity led me to explore the world of design, first through high school internships, then a summer program at Cornell, and eventually through my studies at the University of Waterloo. While my coursework strengthened my app design and refinement techniques, I realized my true passion lay in interactive installations and spatial computing—areas where art and technology converge to create immersive experiences.
            </p>
            <p className="animate-slidein opacity-0 [--slidein-delay:600ms]">
              At the heart of my portfolio is a commitment to storytelling and social impact. I create projects that amplify voices and bring attention to overlooked narratives, using design as a tool to foster empathy and awareness. Whether through transmedia storytelling, interactive installations, or digital platforms, my goal is to push the boundaries of user experience and challenge conventional perspectives.
            </p>
            <p className="animate-slidein opacity-0 [--slidein-delay:600ms]">
              I’m always eager to collaborate, learn, and innovate in the ever-evolving landscape of design. If you’re interested in working together or just want to chat about UX, digital art, or emerging technologies, feel free to reach out!
            </p>
        </div>
      </div>
    </main>
  );
}
