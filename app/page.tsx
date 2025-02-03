import MaxWidthWrapper from "@/components/shared/maxWidthWrapper";
import Skills from "@/components/shared/skills";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { MailIcon } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="flex flex-col gap-5 my-14">
          <Image
            src={"/karan1.png"}
            alt="profile"
            width={100}
            height={100}
            unoptimized
            className="rounded-sm"
          />
          <div className="flex justify-between">
            <p className="text-3xl font-bold text-[#1f2937] dark:text-white">
              Hi, I&apos;m Karan
            </p>
            <div className="text-muted-foreground p-2 rounded-full border- border-2">
              <MailIcon className="w-5 h-5" />
            </div>
          </div>

          <p className="text-muted-foreground">
            Passionate Software Developer with over one year of experience in
            building production-ready applications from the ground up. Currently
            developing Slugy, a SaaS platform. My expertise encompasses
            frontend, backend, and full-stack development.
          </p>

          <div>
            <Skills />
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="flex flex-col gap-5 my-14">
          <div className="relative">
            <h1 className="text-lg sm:text-xl font-medium mb-16 sm:mb-20">
              Experience
            </h1>
            <div className="flex items-center gap-[8px] relative">
              <div className="rounded-full border p-[3px] bg-gray-100 dark:bg-gray-400 relative">
                <Image
                  alt="company logo"
                  width={100}
                  height={100}
                  className="rounded-full h-6 w-6"
                  src={"/svg/node.svg"}
                />
              </div>
              <p className="text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                HashTek Solutions
              </p>
            </div>
            <div className="absolute w-5 h-5 sm:h-6 border-l-2 border-b-2 rounded-bl-xl left-3 border-gray-500"></div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="pl-10 space-y-1">
                    <p className="text-sm sm:text-base font-medium flex items-center gap-2">
                      Full-stack Developer
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="text-green-500"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71404 11.8922 2.71404 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM6.75977 11.7573L8.17399 10.343L11.0024 13.1715L16.6593 7.51465L18.0735 8.92886L11.0024 15.9999L6.75977 11.7573Z"></path>
                      </svg>
                    </p>
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex-wrap">
                      <p className="font-medium">Mar 2024 - Present (12 m)</p>
                      <span className="font-medium">•</span>
                      <p>Internship</p>
                      <span className="font-medium">•</span>
                      <p>Remote</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pb-4 pt-0 pl-10 sm:text-sm text-xs text-gray-500 dark:text-gray-400 space-y-[6px] flex flex-col my-5">
                    <p>
                      <span>•</span> Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Nihil quod dicta labore minus! Nesciunt,
                      quisquam velit praesentium sit voluptatem eaque nulla
                      beatae. Consectetur fugiat harum blanditiis recusandae
                      corporis totam quae!
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default page;
