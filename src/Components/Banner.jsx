const Banner = () => {
  return (
    <div className="mt-10">
      <div className="carousel w-96 md:w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="relative">
            <div>
              <img src="https://i.ibb.co/ZcdkkMp/1309186.jpg" className="w-full" alt="slide" />
            </div>
            <div className="absolute inset-0 my-auto h-96">
              <h1 className="mb-5 md:text-5xl font-bold"></h1>
              <p className="py-6 text-center md:text-xl font-semibold text-slate-50 ">Explore Unmatched Quality and Performance. Find Your Dream Car at Signature Car Emporium. Unleash Your Drive with Our Exceptional Collection!</p>
              <button className="flex mx-auto btn glass bg-red-500">Explore</button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <div className="relative">
            <div>
              <img src="
https://i.ibb.co/G2rYnMj/875694.jpg
" className="w-full" alt="slide" />
            </div>
            <div className="absolute inset-0 my-auto h-96">
              <h1 className="mb-5 text-5xl font-bold"></h1>
              <p className="py-6 text-center md:text-xl font-semibold text-slate-50 ">Explore Unmatched Quality and Performance. Find Your Dream Car at Signature Car Emporium. Unleash Your Drive with Our Exceptional Collection!</p>
              <button className="flex mx-auto btn glass bg-red-500">Explore</button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className="relative">
            <div>
              <img src="https://i.ibb.co/zZLTyKb/390232.jpg" className="w-full" alt="slide" />
            </div>
            <div className="absolute inset-0 my-auto h-96">
              <h1 className="mb-5 text-5xl font-bold"></h1>
              <p className="py-6 text-center md:text-xl font-semibold text-slate-50 ">Explore Unmatched Quality and Performance. Find Your Dream Car at Signature Car Emporium. Unleash Your Drive with Our Exceptional Collection!</p>
              <button className="flex mx-auto btn glass bg-red-500">Explore</button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <div className="relative">
            <div>
              <img src="https://i.ibb.co/khmPpng/942546.jpg.jpg" className="w-full" alt="slide" />
            </div>
            <div className="absolute inset-0 my-auto h-96">
              <h1 className="mb-5 text-5xl font-bold"></h1>
              <p className="py-6 text-center md:text-xl font-semibold text-slate-50 ">Explore Unmatched Quality and Performance. Find Your Dream Car at Signature Car Emporium. Unleash Your Drive with Our Exceptional Collection!</p>
              <button className="flex mx-auto btn glass bg-red-500">Explore</button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
