import { Article } from "@/types";
import React, { useState, useMemo, useRef, MutableRefObject } from "react";
import TinderCard from "react-tinder-card";
import ArticleCard from "./ArticleCard";

function Advanced({ articles }: { articles: Article[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(articles.length - 1);
  const [lastDirection, setLastDirection] = useState<string | null>(null);
  
  // used for outOfFrame closure
  const currentIndexRef = useRef<number>(currentIndex);

  // Array of refs for the TinderCard components
  const childRefs = useMemo(
    () =>
      Array(articles.length)
        .fill(0)
        .map(() => React.createRef<React.RefObject<any>>()),
    [articles.length]
  );

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  // Set last direction and decrease current index
  const swiped = (direction: string, nameToDelete: string, index: number) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name: string, idx: number) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    if (currentIndexRef.current >= idx && childRefs[idx].current) {
      (childRefs[idx].current as unknown as { restoreCard: () => void }).restoreCard();
    }
  };

  return (
    <div className="flex flex-col justify-between p-4">
      <div className="relative w-full max-w-md h-54">
        {articles.map((article, index) => (
          <TinderCard
            ref={childRefs[index] as any}
            className="absolute w-full h-full bg-white"
            key={article.title}
            onSwipe={(dir) => swiped(dir, article.title, index)}
            onCardLeftScreen={() => outOfFrame(article.title, index)}
          >
            <div className="w-full h-full min-h-[60vh] bg-white">
              <ArticleCard article={article} />
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Advanced;
