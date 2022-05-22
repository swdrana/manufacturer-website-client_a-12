import React from "react";
import Header from "../components/Header/Header";
import Product from "../components/Product";
import b1 from "./../img/human-use-computer-control-robot-arms-working-procuction-convoyed-smart-factory-industry-4_1150-43048.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";
import Review from "../components/Review";
const Home = () => {
  return (
    <div>
      {/* banner section  */}
      <div class="hero min-h-screen banner-bg">
        <div class="hero-overlay"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="px-16">
            <h1 class="mb-5 text-5xl font-bold">NEED NEW TOOLS?</h1>
            <p class="mb-5">
              Electronics manufacturing software is a set of tools used by
              manufacturers to plan, execute, and report on the production of
              electronic goods. Common features include supply chain management,
              material supplier planning, recall management, and make/buy
              reporting, among others. By streamlining and automating routine
              processes, electronics manufacturing software helps manufacturers
              increase production while using fewer resources.
            </p>
            <button class="btn btn-primary">Explore Now!</button>
          </div>
        </div>
      </div>

      {/* Tools/Parts */}
      <div className="py-16 bg-lime-100">
        <h1 className="text-4xl text-center">Top Tools</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-20 gap-x-4 gap-y-10 place-items-center my-20">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>

      <div class="carousel rounded-box product-carousel">
        <div class="carousel-item">
          <img
            src="https://i.ibb.co/jrR1KhS/image.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://i.ibb.co/z8TK53Y/image.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://i.ibb.co/kGc0jxk/image.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://i.ibb.co/fGMnHSW/image.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://i.ibb.co/gMfYg05/image.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://i.ibb.co/47hzcCx/image.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://i.ibb.co/V9q5zbH/image.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://i.ibb.co/y87729w/image.png"
            className="h-80"
            alt="Burger"
          />
        </div>
      </div>

      <div className="reviews flex flex-col lg:flex-row justify-center items-center py-20 bg-slate-400">
        <div className="w-full lg:w-2/5">
          <h1 class="text-5xl font-bold text-center mb-20 lg:mb-0">Our Client’s Speak</h1>
        </div>
        <div className="w-full md:w-3/5">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            partialVisible
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 0,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 0,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: -40,
              },
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <Review />
            <Review />
            <Review />
            <Review />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
