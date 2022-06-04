import * as React from "react"
import { Disclosure } from "@headlessui/react"
import { IoChevronUpCircle } from "react-icons/io5"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiVuedotjs,
  SiGatsby,
  SiApple,
  SiVisualstudiocode,
} from "react-icons/si"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Resume" />
    <div className="bg-sky-50 p-6 py-8 md:p-8 md:py-12 mt-12 font-light scale-[1.15] md:scale-100 text-slate-600 md:tracking-wide">
      <p className="leading-snug border-l-2 md:border-l-4  border-sky-200 pl-4 md:text-2xl">
        Frontend Web Developer with 12+ years of extensive experience in
        designing, building and managing user interfaces, including responsive
        web design and JAMStack.
      </p>
      <ul className="text-xs md:text-base mt-4 text-slate-500 leading-relaxed list-disc list-inside">
        <li>Tech-stack: HTML5, CSS3, JavaScript, TailwindCSS, ReactJs, GatsbyJs.</li>
        <li>Strong Experience with Cross Browser Compatibility Issues and Optimization for Various Devices.</li>
        <li>Experts in responsive Web Design and analyzing and fixing UI bugs quickly.</li>
        <li>Proficiency in code optimization to improving the performance.</li>
        <li>Rapid Prototyping using Frontend Web Framework.</li>
      </ul>
    </div>

    <h3 className="mt-8 mb-4 text-lg">Skills & Tools</h3>
    <ul className="grid grid-cols-6 gap-3 text-sm md:text-base text-sky-700 font-light flex-wrap">
      <li className="col-span-2 md:col-span-1 flex items-center border border-sky-200 px-3 py-2 rounded">
        <SiHtml5 className="mr-2" />
        html5
      </li>
      <li className="col-span-2 md:col-span-1 flex items-center border border-sky-200 px-3 py-2 rounded">
        <SiCss3 className="mr-2" />
        css3
      </li>
      <li className="col-span-2 md:col-span-1 flex items-center border border-sky-200 px-3 py-2 rounded">
        <SiJavascript className="mr-2" />
        javascript
      </li>
      <li className="col-span-2 md:col-span-1 flex items-center border border-sky-200 px-3 py-2 rounded">
        <SiTailwindcss className="mr-2" />
        tailwind
      </li>
      <li className="col-span-2 md:col-span-1 flex items-center border border-sky-200 px-3 py-2 rounded">
        <SiReact className="mr-2" />
        react
      </li>
      <li className="col-span-2 md:col-span-1 flex items-center border border-sky-200 px-3 py-2 rounded">
        <SiVuedotjs className="mr-2" />
        vue
      </li>
      <li className="col-span-2 md:col-span-1 flex items-center border border-sky-200 px-3 py-2 rounded">
        <SiGatsby className="mr-2" />
        gatsby
      </li>
      <li className="col-span-2 md:col-span-1 flex items-center border border-sky-200 px-3 py-2 rounded">
        <SiApple className="mr-2" />
        Mac OS
      </li>
      <li className="col-span-2 md:col-span-1 flex items-center border border-sky-200 px-3 py-2 rounded">
        <SiVisualstudiocode className="mr-2" />
        VS Code
      </li>
    </ul>
    <div className="grid grid-cols-2 gap-12">
      <div className=" col-span-2 md:col-span-1">
        <h3 className="mt-12 mb-6 border-l-2 border-sky-200 px-4 bg-sky-50 py-2">
          Work Experience
        </h3>

        {/* KATSANA HOLDING SDN BHD */}
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex border border-sky-200 p-4 rounded justify-between w-full text-left mt-2">
                <div className="text-slate-600">
                  <h5 className="font-medium">Frontend Developer (Remote)</h5>
                  <p className="text-xs font-light mt-1">
                    <span className="font-medium">
                      Katsana Holdings Sdn Bhd
                    </span>
                    <br />
                    Kuala Lumpur, Malaysia | July 2019 - Present
                  </p>
                </div>
                <IoChevronUpCircle
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-6 h-6 text-sky-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <a
                  href="https://www.katsana.com"
                  className=" border-b border-dotted font-medium "
                >
                  KATSANA
                </a>
                <ul className="mt-2 list-disc ml-4 ">
                  <li>
                    Implementing JAMStack on katsana.com for better site
                    performance.
                  </li>
                  <li>Involved in developing dashboard platform.</li>
                </ul>
                <a
                  href="https://www.getdrivemark.com"
                  className=" border-b border-dotted font-medium mt-4 inline-flex"
                >
                  DRIVEMARK
                </a>
                <ul className="mt-2 list-disc ml-4 ">
                  <li>
                    Prototyping Progressive Web Applications for various
                    business model and idea exploration.
                  </li>
                  <li>Customizing web platform for B2B Client.</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {/* IJOOMLA, INC */}
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex border border-sky-200 p-4 rounded justify-between w-full text-left mt-2">
                <div className="text-slate-600">
                  <h5 className="font-medium">Full-stack Designer (Remote)</h5>
                  <p className="text-xs font-light mt-1">
                    <span className="font-medium">iJoomla, Inc</span>
                    <br />
                    California, United States | Mar 2013 - Jan 2016
                  </p>
                </div>
                <IoChevronUpCircle
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-6 h-6 text-sky-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="mt-2 list-disc ml-4 ">
                  <li>Initiated scalable CSS with SCSS & BEM Approach.</li>
                  <li>
                    Designing & improving main theme of{" "}
                    <a
                      href="https://www.jomsocial.com"
                      className=" border-b border-dotted font-medium "
                    >
                      JomSocial
                    </a>
                    .
                  </li>
                  <li>Fixing UI Bugs for customers' website.</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {/* SLASHES AND DOTS SDN BHD */}
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex border border-sky-200 p-4 rounded justify-between w-full text-left mt-2">
                <div className="text-slate-600">
                  <h5 className="font-medium">Web Designer</h5>
                  <p className="text-xs font-light mt-1">
                    <span className="font-medium">
                      Slashes and Dots Sdn Bhd
                    </span>
                    <br />
                    Malaysia, Kuala Lumpur | Jan 2011 - March 2013
                  </p>
                </div>
                <IoChevronUpCircle
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-6 h-6 text-sky-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="mt-2 list-disc ml-4 ">
                  <li>
                    Editing & design with team in the company to build perfect
                    company's website.
                  </li>
                  <li>
                    Designing UI for specific module of{` `}
                    <a
                      href="https://www.jomsocial.com"
                      className=" border-b border-dotted font-medium "
                    >
                      JomSocial
                    </a>
                    .
                  </li>
                  <li>Designing marketing kit for ads platform.</li>
                  <li>Design & coding HTML Email.</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <div className="col-span-2 md:col-span-1">
        <h3 className="md:mt-12 mb-6 border-l-2 border-sky-200 px-4 bg-sky-50 py-2">
          Volunteering
        </h3>
        {/* Facilitator */}
        <div className="flex text-xs font-light items-end">
          <div className="w-40 shrink-0">
            <h5 className="font-medium text-sm">Facilitator</h5>
            <p>
              <span className="text-xs">1000Startup Indonesia</span>
              <br />
              August 2019 - Present
            </p>
          </div>
          <p>Facilitator in workshop and event in Pontianak.</p>
        </div>
        {/* Chapter manager */}
        <div className="flex text-xs font-light items-end mt-4">
          <div className="w-40 shrink-0">
            <h5 className="font-medium text-sm">Chapter Manager</h5>
            <p>
              <span className="text-xs">Google Business Group</span>
              <br />
              May 2013 - May 2015
            </p>
          </div>
          <p>
            Promoted Google My Business and arrange local events in Pontianak .
          </p>
        </div>
        {/* Community Manager */}
        <div className="flex text-xs font-light items-end mt-4">
          <div className="w-40 shrink-0">
            <h5 className="font-medium text-sm">Community Manager</h5>
            <p>
              <span className="text-xs">Adobe Flex Indonesia</span>
              <br />
              Aug 2006 - Sep 2008
            </p>
          </div>
          <p>Promoted Adobe Flex Technology for Web Development.</p>
        </div>
        {/* Student Ambassador */}
        <div className="flex text-xs font-light items-end mt-4">
          <div className="w-40 shrink-0">
            <h5 className="font-medium text-sm">Student Ambassador</h5>
            <p>
              <span className="text-xs">Microsoft Indonesia</span>
              <br />
              Jul 2005 - Jul 2007
            </p>
          </div>
          <p>Promoted Microsoft .NET Framework, C#, and Visual Studio.</p>
        </div>

        <h3 className="mt-12 border-l-2 border-sky-200 px-4 bg-sky-50 py-2">
          Education
        </h3>
        <div className="flex text-xs font-light items-end mt-4">
          <div>
            <h5 className="font-medium text-sm">
              Bachelor of Art in Professional Design (Not Completed)
            </h5>
            <p>
              <span className="text-xs">
                Limkokwing University, Kuala Lumpur, Malaysia
              </span>
              <br />
              Feb 2010 - Dec 2010
            </p>
          </div>
        </div>
        <div className="flex text-xs font-light items-end mt-4">
          <div>
            <h5 className="font-medium text-sm">
              Bachelor of Engineering in Information Technology
            </h5>
            <p>
              <span className="text-xs">
                Tanjungpura University, Pontianak, Indonesia
              </span>
              <br />
              Jul 2003 - Jul 2007
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
