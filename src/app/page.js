"use client";
import Image from "next/image";
import Folder from "./components/Folder";
import CD from "./components/Disk";
import { useAudio } from "./components/AudioContext";

export default function Home() {
  const photos = [
    {
      text: "霸王别姬",
      href: "https://honey-red-b15.notion.site/1c2b2519c8c3804da834d8e0bbbca74b",
      image: "./images/folder/BaWangBieJi.webp",
    },
    {
      text: "穆桂英挂帅",
      href: "https://honey-red-b15.notion.site/1c2b2519c8c380ca9fabfc34473a98ba",
      image: "./images/folder/MuGuiYingGuaiShuai.webp",
    },
    {
      text: "四郎探母",
      href: "https://honey-red-b15.notion.site/1c2b2519c8c3801d9da9e08d03c8b141",
      image: "./images/folder/SiLangTanMu.webp",
    },
    {
      text: "谢瑶环",
      href: "https://honey-red-b15.notion.site/1c2b2519c8c3805a93a6f3350607b384",
      image: "./images/folder/XieYaoHuan.webp",
    },
  ];

  const projects = [
    {
      text: "Co-Hop",
      href: "https://www.notion.so/Co-Hop-1bfb2519c8c3807182b5e104b87b8b16",
      image: "./images/folder/CO-HOP.webp",
    },
    {
      text: "絆",
      href: "https://honey-red-b15.notion.site/1bfb2519c8c3802ab516cd59d16c1499",
      image: "./images/folder/Play.webp",
    },
    {
      text: "Commodified Wombs",
      href: "https://honey-red-b15.notion.site/Commodified-Wombs-1c2b2519c8c380fda66de4e8599b8e44",
      image: "./images/folder/Surrogacy.webp",
    },
  ];

  const others = [
    {
      image: "./images/folder/Other_1.webp",
    },
    {
      image: "./images/folder/Other_2.webp",
    },
    {
      image: "./images/folder/Other_3.webp",
    },
    {
      image: "./images/folder/Other_4.webp",
    },
  ];

  const { allSongs, currentSongIndex, status } = useAudio();
  const currentSongTitle = allSongs[currentSongIndex]?.name || "Nothing";

  return (
    <main className="relative h-screen w-full overflow-hidden text-[rgb(255,225,65)] text-lg">

      <div className="animate-fadein">
        <Folder
          title="photos"
          style="absolute top-[37%] left-[13%]"
          content={photos}
          position="top-[110%] left-[8%] origin-[0%-30%]"
        />
        <Folder
          title="projects"
          style="absolute top-[20%] right-[12%]"
          content={projects}
          position="top-[110%] right-[2%] origin-[100%-30%]"
        />
        <Folder
          title="others"
          style="absolute bottom-[25%] right-[15%]"
          content={others}
          position="bottom-[120%] right-[-60%] origin-bottom"
        />
      </div>
      <div className="flex flex-col mt-24 sm:mt-40 justify-center items-center text-center gap-2 text-neutral-600 relative">
        {/* <h1 className="font-serif italic text-5xl text-blue-700">Monica Fang</h1> */}
      </div>
    </main>
  );
}
