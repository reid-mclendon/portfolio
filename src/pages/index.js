import React from 'react';
import Button from '../components/Button';
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
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
      <div className="flex justify-center  pb-10 lg:justify-start">
          <StaticImage className="w-3/4 rounded-full flex justify-end" src="../img/IMG_20190514_115134.jpg" alt="me"/>
        </div>
        <div className="flex items-center">
          <span className="text-2xl lg:text-5xl xl:text-5xl leading-none">
            Hi! I'm <span className="font-semibold text-primary-darker">Reid McLendon</span>, a front-end web developer based in West Hartford, CT.
          </span>
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto ">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center pb-20">Latest Work</h2>
            <div className="px-8 flex">
            <div className="">
                  <p className="text-3xl font-semibold">tts.chat</p>
                  <p>An audio-only chatroom using Socket.io and the Speech Synthesis Web API.</p>
                  <br/>
                  <p>Features:</p>
                  <br/>
                  <ul>
                      <li>- Realtime chat between clients</li>
                      <li>- Text-to-Speech synthesis</li>
                      <li>- Works across different tabs as well as devices</li>
                      <li>- Fully responsive design</li>
                  </ul>
                  <span>Note: Currently not supported on iOS devices.</span>

                  <div className="flex  justify-around pt-8">
                    <Button className="space-x-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg></Button>
                    <Button><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg></Button>
                  </div>
                 
              </div>
              <div className="flex-1">
                  <StaticImage className="rounded-lg" src="../img/tts-desktop.PNG"/>
                   </div>
            </div>


      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);
