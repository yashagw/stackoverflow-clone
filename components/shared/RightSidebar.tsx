import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
  const data = [
    "Would it be appropriate to point out an error in another paper during a referee report?",
    "How to deal with a situation where following the rules is made very difficult?",
    "Low digit addition generator",
  ];

  const popularTags = [
    { _id: 1, name: "javascript", totalQuestion: 5 },
    { _id: 2, name: "react", totalQuestion: 5 },
    { _id: 3, name: "nodejs", totalQuestion: 5 },
    { _id: 4, name: "express", totalQuestion: 5 },
    { _id: 5, name: "mongodb", totalQuestion: 5 },
  ];

  return (
    <section
      className="custom-scrollbar background-light900_dark200 
      sticky rigth-0 top-0 flex flex-col
       h-screen w-[340px]
       overflow-y-auto p-6 pt-36
       light-border border-l shadow-light-300 dark:shadow-none
      max-xl:hidden"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Question</h3>
        <div className="mt-7 flex flex-col justify-between gap-[30px]">
          {data.map((item) => {
            return (
              <Link
                href="/"
                className="flex flex-row cursor-pointer items-center justify-between gap-1"
              >
                <p className="body-medium text-dark500_light700">{item}</p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="stackoverflow"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <p className="h3-bold text-dark200_light900">Popular Tags</p>
        <div className="mt-7 flex flex-col justify-between gap-3">
          {popularTags.map((tag) => {
            return (
              <RenderTag
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                totalQuestions={tag.totalQuestion}
                showCount
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
