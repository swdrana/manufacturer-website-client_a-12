import React from "react";
const About = () => {
  return (
    <>
      <div className="hero py-10 bg-base-200 lg:px-20">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
          <div className="text-center lg:text-left">
            <h4 className="text-md">Hey! I'm</h4>
            <h4 className="text-3xl">
              <span className="font-bold text-red-500">Masuduzzaman</span>{" "}
            </h4>
            <p className=" text-orange-500 font-bold tracking-widest ">
              MERN Stack Developer
            </p>
            <hr class=" border-[1px] border-yellow-400" />
            <p className="py-4">
              I am a computer science student. My mission this year is to be a
              web developer. I am constantly working hard for this and hopefully
              I will be able to reach my destination. you can see some, of my
              project bellow.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <img
              src="https://swdrana.github.io/personal-portfolio-m1-final/img/swdrana.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="hero bg-base-200 w-full">
        <div className="hero-content flex-col gap-10 lg:flex-row">
          <div class="stack">
            <div class="card shadow-md bg-[#E32227] text-primary-content">
              <div class="card-body">
                <h2 class="card-title">Notification 1</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>

            <div class="card shadow bg-[#E84B4F] text-primary-content">
              <div class="card-body"></div>
            </div>
            <div class="card shadow-sm bg-[#ED7377] text-primary-content">
              <div class="card-body"></div>
            </div>
          </div>
          <div class="stack">
            <div class="card shadow-md bg-[#2BB02B] text-primary-content">
              <div class="card-body">
                <h2 class="card-title">Notification 1</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>

            <div class="card shadow bg-[#3ACF3A] text-primary-content">
              <div class="card-body"></div>
            </div>
            <div class="card shadow-sm bg-[#5FD85F] text-primary-content">
              <div class="card-body"></div>
            </div>
          </div>
          <div class="stack">
            <div class="card shadow-md bg-[#3F33BD] text-primary-content">
              <div class="card-body">
                <h2 class="card-title">Notification 1</h2>
                <p>You have 3 unread messages. Tap here to see.</p>
              </div>
            </div>

            <div class="card shadow bg-[#5A4FCF] text-primary-content">
              <div class="card-body"></div>
            </div>
            <div class="card shadow-sm bg-[#7C73D9] text-primary-content">
              <div class="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
