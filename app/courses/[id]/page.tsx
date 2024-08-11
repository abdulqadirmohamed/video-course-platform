import BackButton from "@/components/back-button";
import React from "react";

const page = () => {
  return (
    <section className="pb-24 pt-40">
      <div className="container">
      <div>
          <BackButton href='/' text='Back to courses' />
        </div>
      </div>
    </section>
  );
};

export default page;
