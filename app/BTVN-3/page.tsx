import Image from "next/image";

interface User {
  name: string;
  company: string;
  image: string;
  rating: string;
  title: string;
}
interface Mo {
  name: string;
  image: string;
  title: string;
}
const users = [
  {
    name: "Gemma Noden",
    company: "Google",
    image: "/Author.png",
    rating: 5,
    title:
      "his is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },

  {
    name: "Gemma Noden",
    company: "Google",
    image: "/Author1.png",
    rating: 5,
    title:
      "his is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },

  {
    name: "Gemma Noden",
    company: "Google",
    image: "/Author2.png",
    rating: 5,
    title:
      "his is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
];

const Mos = [
  {
    name: "Product design",
    image: "/lien.png",
    title:
      "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },

  {
    name: "Product design",
    image: "/dut.png",
    title:
      "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },

  {
    name: "Product design",
    image: "/lc.png",
    title:
      "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
];
export default function Page() {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between px-[50px] py-[25px]">
        <div className="text-xl font-semibold">LOGO</div>
        <div className="xl:hidden">...</div>
        <div className="xl:flex gap-12 hidden">
          <div>About</div>
          <div>Work</div>
          <div>Contact</div>
        </div>
      </div>

      {/* Branding */}
      <div className="grid grid-cols-1 px-8 py-12 xl:grid-cols-2 gap-[60px] xl:gap-7 xl:max-w-[1080] xl:mx-auto">
        <div className="flex h-full flex-col items-center justify-center gap-5 xl:items-start">
          <h2 className="h-8 text-xl font-semibold">Branding | Image making</h2>
          <div className="text-center text-[48px] font-semibold xl:text-start xl:text-[70px]">
            My Awesome Portfolio
          </div>
          <p className="text-center text-base xl:text-start">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
        </div>

        <div>
          <Image src="/header.jpg" alt="Anh" width={495} height={425} />
        </div>
      </div>
      <div className="w-[90%] max-w-[1080px] h-[1px] bg-gray-300 mx-auto my-10"></div>
      {/*gạch chân 90%* 1080/}
      {/* Ảnh */}
      <div
        className="grid grid-cols-2 gap-16 place-items-center px-7 
                  md:grid-cols-3 xl:flex xl:justify-between xl:items-center xl:flex-1 xl:max-w-[1080px] xl:mx-auto"
      >
        <Image
          src="/behance.png"
          alt="Anh"
          width={54}
          height={34}
          className="order-2 xl:order-1"
        />
        <Image
          src="/google.png"
          alt="Anh"
          width={104}
          height={34}
          className="order-1 xl:order-2"
        />
        <Image
          src="/apple.png"
          alt="Anh"
          width={38}
          height={47}
          className="order-4 xl:order-3"
        />
        <Image
          src="/Dribbble.png"
          alt="Anh"
          width={104}
          height={34}
          className="order-3 xl:order-4"
        />
        <Image
          src="/awwwards.png"
          alt="Anh"
          width={214}
          height={34}
          className="justify-self-center order-5 col-span-2 xl:order-5 xl:col-span-1"
        />
      </div>
      <div className="w-[90%] max-w-[1080px] h-[1px] bg-gray-300 mx-auto my-10"></div>
      {/*gạch chân 90%* 1080/}
      {/* Phần 3 */}
      <div className="py-[150px] xl:max-w-[1000] xl:mx-auto">
        <div className="grid grid-cols-1 gap-[125px] px-7 text-center xl:grid-cols-3 xl:px-24 ">
          {Mos.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="mb-8"
              />

              <h3 className="text-2xl font-semibold mb-4">{item.name}</h3>

              <p className="text-lg text-gray-600 max-w-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* My latest work */}
      <div>
        <h1 className="font-semibold text-3xl text-center px-23 py-10 xl:max-w-[1080] xl:mx-auto">
          My latest work
        </h1>
        <div className="flex flex-wrap justify-center gap-17 mb-15">
          <Image src="/Word0.png" alt="Anh" width={315} height={315} />
          <Image src="/Word.png" alt="Anh" width={315} height={315} />
          <Image src="/Word1.png" alt="Anh" width={315} height={315} />
        </div>

        <div className="flex flex-wrap justify-center gap-17 mb-10">
          <Image src="/Word2.png" alt="Anh" width={315} height={315} />
          <Image src="/Word3.png" alt="Anh" width={315} height={315} />
          <Image src="/Word4.png" alt="Anh" width={315} height={315} />
        </div>
      </div>

      {/* Client */}
      <div className="flex flex-col items-center xl:max-w-[1080] xl:mx-auto px-8 py-15">
        <div className="text-3xl font-semibold ">Clients</div>
        <div className="grid w-full grid-cols-1 gap-16 p-7 xl:grid-cols-3">
          {users.map((user, index) => (
            <div
              className="w-full border-2 border-[#FFD285] bg-[#FFFCF5] p-7"
              key={index}
            >
              <p className="text-xl font-semibold">{user.title}</p>

              <div className="mt-20 flex gap-5">
                <Image
                  src={user.image}
                  alt="anh"
                  width={50}
                  height={50}
                  className="h-12 w-12"
                />

                <div className="">
                  <div className="flex gap-1">
                    {Array(user.rating)
                      .fill(0)
                      .map((_, index) => (
                        <div key={index}>★</div>
                      ))}
                  </div>
                  <div>
                    {user.name}, <br />
                    {user.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[90%] max-w-[1080px] h-[1px] bg-gray-300 mx-auto my-10"></div>
      {/*gạch chân 90%* 1080/}
      {/* Let Work */}
      <div className="h-full grid grid-cols-1 gap-20 px-8 xl:grid-cols-2 xl:gap-[190px] xl:max-w-[1080] xl:mx-auto ">
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
