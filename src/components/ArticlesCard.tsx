import React from "react";
import { Button } from "./buttons/Button";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  articleTitle: string;
  articleDescription: string;
  articleTagOne: string;
  articleTagTwo: string;
  articleDate: string;
  imageSrc?: string;
  articleSlug?: string;
}

export const ArticlesCard: React.FC<ArticleCardProps> = ({
  articleTitle,
  articleDescription,
  articleTagOne,
  articleTagTwo,
  articleDate,
  imageSrc,
  articleSlug,
}) => {
  return (
    <div className="w-full h-full border border-white/50 bg-[#0A0A0C] p-5 rounded-lg flex flex-col gap-4 3xl:gap-8 justify-between">
      {imageSrc && (
        <Image
          src={imageSrc}
          className="object-cover w-full h-auto"
          width={100}
          height={100}
          alt="article_img"
        />
      )}
      <Link href={`/articles/${articleSlug}`} className="underline cursor-pointer text-white font-azeret-mono font-semibold text-lg">
        <h3>{articleTitle}</h3>
      </Link>
      <span>
        <p className="font-azeret-mono">{articleDescription.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </span>
      <div className="flex items-center flex-wrap gap-4 justify-between">
        <div className="flex gap-3 flex-wrap">
          <Button text={articleTagOne} variant="bordered" />
          <Button text={articleTagTwo} variant="bordered" />
        </div>
        <div>
          <p className="articleDate font-azeret-mono font-semibold text-base">
            {articleDate}
          </p>
        </div>
      </div>
    </div>
  );
};
