import React from 'react'
import Button from './Button'
import Image from "next/image";

const Learn = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
        <div className="get-app">
            <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
                <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Start Learning Now</h2>
                <p className="regular-16 text-gray-10">Join a community of enthusiastic learners, engage with expert instructors, and unlock a world of possibilities through our diverse range of courses.</p>
                <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
                    <Button
                    type="button"
                    title="View Courses"
                    icon="/course-v.svg"
                    variant="btn_white"
                    />
                    <Button
                    type="button"
                    title="Play video"
                    icon="/blue-play.svg"
                    variant="btn_dark_green_outline"
                    />
                </div>
            </div>
            <div className="flex flex-1 items-center justify-end">
                <Image src="/course-app-screens.png" alt="phones" width={550} height={870} />
            </div>
        </div>
    </section>
  )
}

export default Learn