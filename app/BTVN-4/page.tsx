import Image from "next/image";

export default function Page() {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between px-[50px] py-[25px]">
        <div className="text-xl font-semibold">LOGO</div>
        <div className="xl:hidden">...</div>
        <div className="hidden xl:flex gap-12">
          <div>About</div>
          <div>Word</div>
          <div>Contact</div>
        </div>
      </div>
      {/* Avatar */}
      <div className="bg-[#F9E6F0]">
        <div className="px-8 py-[120px] grid grid-cols-1 gap-[78px] xl:grid-cols-2 xl:gap-[70px] xl:max-w-[780] xl:mx-auto">
          <div>
            <Image src="/BTVN4/Pablo.png" alt="Anh" width={195} height={185} />
            <h2 className="font-bold text-xl">Pablo Designero</h2>
            <p className="text-xl font-regular">Designer & Unicorn Trainer</p>
          </div>
          <div>
            <p className="font-bold ">Bio:</p>
            <p className="font-regular">
              Father of 3 humans, 5 unicorns & 2 dogs,I design since I can
              remember it. I often get asked where I get my inspiration from: in
              everyday’s lil’ details. And sometimes in leftover food I find in
              my beard.
            </p>
          </div>
        </div>
      </div>
      {/* Document */}
      <div className="px-8 py-[120px] grid grid-cols-1 gap-[60px] xl:max-w-[880] xl:mx-auto">
        <div>
          <p className="text-2xl font-regular font-bold">
            When I was 5, I got adbucted by a unicorn family. When they returned
            me to earth, I joined a designer school. But, fo’ real, what I
            learned with my kidnaptive family really gave an edge to my creative
            language.
          </p>
        </div>

        <div className="text-2xl font-regular">
          <p className="bg-[#009379] text-white">
            Being a human is way too complicated. Time to be a unicorn.
          </p>
          <p>
            Try it and you’ll see. Then your Figma files are just gonna fly in
            color, glitter, interactions and autolayout.
          </p>
          <p className="bg-[#009379] text-white">
            Also, grow a beard. Check my bio if that is not clear.
          </p>
          <p>
            Available for projects, from Monday to Tuesday, mainy between 14 and
            16. (Unless there is a unicorn race on TV - DUH -in that case, come
            back another day).
            <br /> Projects include, RocknRoll covers, furniture refurbishing,
            Unicorn potty training and more.
          </p>
        </div>
      </div>
      <div className="w-[90%] max-w-[1080px] h-[1px] bg-gray-300 mx-auto my-10"></div>
      {/*gạch chân 90%* 1080/}
      {/* Let work */}
      <div className="px-8 grid grid-cols-1 gap-[80px] xl:grid-cols-2 xl:gap-[190px] xl:max-w-[1080] xl:mx-auto">
        <div>
          <h1 className="font-semibold text-3xl mb-10">
            Let’s work <br className="xl:hidden" />
            together
          </h1>
          <p className="font-regular text-xl mb-15">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </p>
          <div className="flex gap-3 ">
            <Image src="/discord.png" alt="Anh" width={36} height={36} />

            <Image src="/facebook.png" alt="Anh" width={36} height={36} />

            <Image src="/dribbble1.png" alt="Anh" width={36} height={36} />

            <Image src="/nstagram.png" alt="Anh" width={36} height={36} />

            <Image src="/behance.png" alt="Anh" width={36} height={36} />
          </div>
        </div>
        <div>
          <form className="flex flex-col gap-10">
            <input
              type="text"
              placeholder="Name"
              className="px-7 py-5 bg-[#F3F3F3] outline-none text-xl font-regular"
            />

            <input
              type="email"
              placeholder="Email"
              className="px-7 py-5 bg-[#F3F3F3] outline-none text-xl font-regular"
            />

            <textarea
              placeholder="Type your message here"
              rows={6}
              className="px-7 py-5 bg-[#F3F3F3] outline-none text-xl font-regular"
            />

            <button className="bg-[#2D2D2D] text-[20px] font-semibold px-20 py-6 self-start text-white text-center">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
