import BackButton from "@/components/back-button";
import { Badge } from "@/components/ui/badge";
import React from "react";

const page = () => {
  return (
    <>
      <section className="pb-24 pt-40">
        <div className="container">
          <div>
            <BackButton href="/courses" text="Back to courses" />
          </div>

          <div className="mt-6 flex flex-col gap-x-10 gap-y-10 lg:flex-row">
              {/* Course detail */}
          <div className='flex-1'>
            <div className='flex items-center gap-x-3'>
              <h3 className='text-xl font-semibold'>Learn NextJs</h3>
            </div>
            <p className='text-xs font-light text-muted-foreground'>
              By <span>By Hamed Bahram</span>
            </p>
            <div className='mt-4 text-sm text-muted-foreground'>
            Unlock the potential of Next.js with this in-depth course tailored for web developers. Learn how to create fast, SEO-friendly, and scalable web applications using Next.js. Explore server-side rendering, static site generation, API routes, and advanced routing techniques. Gain practical experience through hands-on projects and real-world examples, preparing you to build production-ready applications with ease and efficiency.
            </div>
            <div className='mt-6 flex items-center justify-between gap-2'>
              <span className='-mt-1.5 font-serif text-2xl'>
              $37.00
              </span>
              <div className='mt-0.5 flex items-center gap-2'>
                <span className='text-xs font-light text-muted-foreground'>
                  Category
                </span>
                <Badge variant='secondary'>Fullstack</Badge>
              </div>
            </div>
            {/* <CoursePurchaseForm
              courseId={course.id}
              userId={userId}
              firstLessonSlug={firstLessonSlug}
            /> */}
          </div>

          {/* lessons */}
          <div className='flex-1'>
            
          </div>
        </div>
          </div>
      </section>
    </>
  );
};

export default page;
