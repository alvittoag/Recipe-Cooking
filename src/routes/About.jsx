import React from "react";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <div class="pt-10 md:pt-24 md:px-10 mb-10">
        <div class="flex flex-wrap">
          <div class="w-full self-center px-7 lg:px-14 lg:w-1/2">
            <h1 class="text-base font-semibold text-slate-700 md:text-xl">
              Let me introduce myself,
              <span class="block font-bold text-4xl text-dark mt-1 lg:text-5xl">
                Alvitto <span className="text-sky-600">Aprilian</span> Gumay
              </span>
            </h1>
            <h2 class="font-medium text-slate-700 text-lg mb-5 lg:text-2xl">
              Mahasiswa | Front-End
            </h2>
            <p class="font-medium text-slate-700 mb-10 leading-relaxed">
              I am a student with information systems who are studying Front-end
              web and this is one of my personal portfolio projects
            </p>
            <div className="flex flex-wrap self-center">
              <div className="mx-auto flex">
                <a href="https://www.instagram.com/alvittoag_/">
                  <BsInstagram className="text-xl mr-5" />
                </a>
                <a href="https://web.facebook.com/Alvitto.15/">
                  <BsFacebook className="text-xl  mr-5" />
                </a>
                <a href="https://github.com/Alvittoag15">
                  <BsGithub className="text-xl  mr-5" />
                </a>
              </div>
            </div>
          </div>

          <div class="w-full self-end px-8 lg:w-1/2">
            <div class="mt-8 lg:mt-0 lg:right-0">
              <img
                src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?w=740&t=st=1659151084~exp=1659151684~hmac=8c55b22d97052c6b02db388197a3d20ee52a8d1fb791a4b13a0048d4a0ce98b0"
                alt="alvitto"
                class="max-w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
