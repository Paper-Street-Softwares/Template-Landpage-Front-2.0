import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgAboutPhone from "../../assets/imgs/about/aboutPhone.jpg";

export default function AboutImgRight() {
  return (
    <SectionArea className="bg-quinary">
      <SectionWrapper className="flex flex-col-reverse desktop1:flex-row gap-[40px] desktop1:gap-0 desktop1:justify-between">
        <div className="desktop1:w-[450px] desktop2:w-[570px]">
          <SectionTitles className="mb-[18px] desktop1:mb-[26px]">
            Me siga nas redes sociais
          </SectionTitles>
          <Paragraphs className="mb-[36px] phone3:mb-[60px] desktop1:mb-[92px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </Paragraphs>
          <div className="flex flex-col gap-[16px] text-paragraph4 phone3:text-title2">
            <div className="flex gap-[26px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <p className="flex items-center font-mainFont ">
                Me siga no instagram
              </p>
            </div>
            <div className="flex gap-[26px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <p className="flex items-center font-mainFont ">
                Me siga no instagram
              </p>
            </div>
            <div className="flex gap-[26px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <p className="flex items-center font-mainFont">
                Me siga no instagram
              </p>
            </div>
          </div>
        </div>
        <img
          src={imgAboutPhone}
          alt="Foto de celular"
          className="w-[100%] desktop1:w-[415px] desktop2:w-[485px]"
        />
      </SectionWrapper>
    </SectionArea>
  );
}
