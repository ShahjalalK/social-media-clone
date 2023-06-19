import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Link from "next/link";
type Props = {};

const AddsCard = (props: Props) => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="bg-white shadow rounded-lg overflow-hidden"
    >
      <SwiperSlide className="group">
        <Link
          href="https://www.fiverr.com/shahjalalk/code-clickable-html-email-signature-for-outlook-gmail-and-apple"
          target="_blank"
          className="w-full h-52 block overflow-hidden"
        >
          <Image
            src="/signaturegig.jpg"
            width={500}
            height={500}
            alt="ads"
            className="w-full h-full "
          />
        </Link>

        <p className="p-3">
          <Link
            href="https://www.fiverr.com/shahjalalk/code-clickable-html-email-signature-for-outlook-gmail-and-apple"
            target="_blank"
            className="group-hover:text-[#1DBF73] hover:underline-offset-4 hover:underline line-clamp-2"
          >
            I will code clickable HTML email signature for outlook, gmail, and
            apple
          </Link>
        </p>
      </SwiperSlide>

      <SwiperSlide className="group">
        <Link
          href="https://www.fiverr.com/shahjalalk/do-professional-sendinblue-html-email-newsletter-template"
          target="_blank"
          className="w-full h-11 overflow-hidden"
        >
          <Image
            src="/emailtemplategig.webp"
            width={500}
            height={500}
            alt="ads"
            className="w-full h-52 block overflow-hidden "
          />
        </Link>
        <Link
          href="https://www.fiverr.com/shahjalalk/do-professional-sendinblue-html-email-newsletter-template"
          target="_blank"
          className="inline-block p-3 group-hover:text-[#1DBF73] hover:underline-offset-4 hover:underline line-clamp-2"
        >
          I will design a responsive HTML email newsletter template
        </Link>
      </SwiperSlide>

      <SwiperSlide className="group">
        <Link
          href="https://www.fiverr.com/shahjalalk/do-full-stack-development-with-react-next-js-firebase-sanity-sendinblue"
          target="_blank"
          className="w-full h-11 overflow-hidden"
        >
          <Image
            src="/webgig.jpg"
            width={500}
            height={500}
            alt="ads"
            className="w-full h-52 block overflow-hidden "
          />
        </Link>

        <p className="p-3">
          <Link
            href="https://www.fiverr.com/shahjalalk/do-full-stack-development-with-react-next-js-firebase-sanity-sendinblue"
            target="_blank"
            className="group-hover:text-[#1DBF73] hover:underline-offset-4 hover:underline line-clamp-2"
          >
            I will do full stack development with react, next js, firebase,
            sanity, sendinblue
          </Link>
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default AddsCard;
