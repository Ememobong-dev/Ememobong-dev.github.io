import React from "react";
import { Button } from "./buttons/Button";

interface ArticleCardProps {
  articleTitle: string;
  articleDescription: string;
  articleTagOne: string;
  articleTagTwo: string;
  articleDate: string;
}

export const ArticlesCard: React.FC<ArticleCardProps> = ({
  articleTitle,
  articleDescription,
  articleTagOne,
  articleTagTwo,
  articleDate,
}) => {
  return (
    <div className="w-full h-[350px] 3xl:h-[200px] border bg-[#0A0A0C] p-5 rounded-lg flex flex-col gap-4 3xl:gap-0 justify-between">
      <h3 className="underline cursor-pointer text-white font-azeret-mono font-semibold text-lg">
        {" "}
        {articleTitle}{" "}
      </h3>
      <span>
        <p className="font-azeret-mono">{articleDescription}</p>
      </span>
      <div className="flex items-center flex-wrap gap-4 justify-between">
        <div className="flex gap-3 flex-wrap">
          <Button text={articleTagOne} variant="bordered" />
          <Button text={articleTagTwo} variant="bordered" />
        </div>
        <div>
          <p className="articleDate font-azeret-mono font-semibold text-base">{articleDate}</p>
        </div>
      </div>
    </div>
  );
};
