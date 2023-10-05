import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
  const data = [
    {
      key: 1,
      value:
        "How to deal with a situation where following the rules is made very difficult?",
    },
    { key: 2, value: "Low digit addition generator" },
    {
      key: 3,
      value:
        "Would it be appropriate to point out an error in another paper during a referee report?",
    },
    {
      key: 4,
      value:
        "How to deal with a situation where following the rules is made very difficult?",
    },
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
     light-border sticky top-0 flex
       h-screen w-[340px]
       flex-col overflow-y-auto border-l
       p-6 pt-36 shadow-light-300 dark:shadow-none
      max-xl:hidden"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Question</h3>
        <div className="mt-7 flex flex-col justify-between gap-[30px]">
          {data.map((item) => {
            return (
              <Link
                href="/"
                className="flex cursor-pointer flex-row items-center justify-between gap-1"
                key={item.key}
              >
                <p className="body-medium text-dark500_light700">
                  {item.value}
                </p>
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
                _id={`${tag._id}`}
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
