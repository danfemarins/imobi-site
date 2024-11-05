import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

// Importing the avatars CSS
import "@/app/css/additional-styles/avatars.css";

// Avatar images
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

const avatars = [
  { src: Avatar01, alt: "Avatar 01", speech: "Interested Buy" },
  { src: Avatar02, alt: "Avatar 02", speech: "Great Platform" },
  { src: Avatar03, alt: "Avatar 03", speech: "Considering It" },
  { src: Avatar04, alt: "Avatar 04", speech: "Love Interface" },
  { src: Avatar05, alt: "Avatar 05", speech: "Recommend It" },
  { src: Avatar06, alt: "Avatar 06", speech: "Sign Up" },
];

// Function to generate a random delay between 0.5s and 2s for each avatar
const getRandomDelay = () => Math.random() * (2 - 0.5) + 0.5;

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="flex justify-center flex-wrap">
                {avatars.map((avatar, index) => (
                  <div
                    key={index}
                    className="avatar-wrapper"
                    style={{
                      animationDelay: `${getRandomDelay()}s`, // Randomized delay for each avatar
                    }}
                  >
                    <Image
                      className="box-content rounded-full border-2 border-gray-50"
                      src={avatar.src}
                      width={48}
                      height={48}
                      alt={avatar.alt}
                    />
                    <div className="avatar-speech-bubble">
                      {avatar.speech}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              The website builder you're <br className="max-lg:hidden" />
              looking for
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Simple is a modern website builder powered by AI that changes
                how companies create user interfaces together.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start Free Trial{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
