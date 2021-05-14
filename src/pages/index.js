import React from 'react';
import Mail from '../svg/Mail';
import User from '../svg/User';
import Code from '../svg/Code';
import Button from '../components/Button';
import Tag from '../components/Tag';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import { StaticImage } from "gatsby-plugin-image"
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>
    <section className="">
      <div className="container mx-auto px-8 pt-8 pb-8 border-b-2 border-black lg:flex lg:space-x-16 md:pt-16 md:pb-16 lg:pt-32 lg:pb-32">
      <div className="flex justify-center">
          <StaticImage className="border-2 border-black mb-8 w-2/3 rounded-full flex justify-end sm:w-1/2 md:w-2/8 lg:w-auto lg:mb-0 " src="../img/IMG_20190514_115134.jpg" alt="me"/>
        </div>
        <div className="flex items-center">
          <span className="text-3xl leading-none sm:text-4xl lg:text-5xl xl:text-6xl ">
            Hi! I'm <span className="font-semibold text-primary-darker">Reid McLendon</span>, a front-end web developer based in West Hartford, CT.
          </span>
        </div>
      </div>
    </section>
    <section id="work">
      <div className="container mx-auto px-8 border-b-2 border-black pt-8 pb-8 md:pt-16 md:pb-16 lg:pt-32 lg:pb-32">
        <h2 className="text-3xl rounded text-white bg-primary flex justify-center items-center bg-gray-200 font-semibold text-center py-4 mb-8 sm:text-4xl ">Latest Work</h2>
            <div className="flex "> 
            <div className="">
                  <p className="text-3xl font-semibold">tts.chat</p>
                  <div className="flex items-center text-xs mt-4 mb-4 flex-wrap space-x-2 ">
                    <Tag >Node.js</Tag>
                    <Tag >React.js</Tag>
                    <Tag >Socket.io</Tag> 
                  </div>
                  
                  <p>An audio-only chatroom using Socket.io and the Speech Synthesis Web API.</p>
                  <br/>
                  <p>Features:</p>
                  <br/>
                  <ul>
                      <li>- Realtime chat between clients</li>
                      <li>- Text-to-Speech synthesis</li>
                      <li>- Works across multiple tabs as well as devices</li>
                      <li>- Fully responsive design</li>
                  </ul>
                  <br/>
                  <span>Note: Currently not supported on iOS devices.</span>

                  <div className="flex mt-12 justify-start">
                  <Button href="https://morning-hamlet-34543.herokuapp.com/"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></Button>
                  </div>
              </div>
              
            </div>


      </div>
    </section>
    <section id="contact" className="container mx-auto border-b-2 border-black py-8 bg-gray-200 p-8 text-center md:py-16 lg:py-32">
      <h3 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">Get In Touch</h3>
      <div className="flex flex-wrap justify-center space-y-4 mt-8 sm:space-y-0 sm:space-x-4">
        <Button href="mailto:reidmclendon@gmail.com" className="flex justify-center items-center gap-4 w-2/3 sm:w-auto" ><Mail/>Email</Button>
        <Button href="https://github.com/reid-mclendon" className="flex justify-center items-center gap-4 w-2/3 sm:w-auto" ><Code/>GitHub</Button>
        <Button href="https://www.linkedin.com/in/reid-mclendon-114634133/" className="flex justify-center items-center gap-4 w-2/3 sm:w-auto"><User/>LinkedIn</Button>
      </div>
    </section>
  </Layout>
);
