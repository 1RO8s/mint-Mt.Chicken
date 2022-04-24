//import React from "react";
import { forwardRef } from 'react'

const MtChicken = ({
  outlineColor,
  tosakaColor,
  eyeColor,
  headColor,
  headShadowColor,
  beakColor,
  moustacheColor,
  bodyColor,
  bodyShadowColor,
  footColor,
  tailColor,
  tailShadowColor,
  hasForehead,
  hasCheek,
  hasNose,
  hasBerry,
  bgColor
}, ref) => {

  //const bgColor = "#fff"
  //bgColor = "#16adff"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" ref={ref}>
  <defs>
    <style>{`
      .outline {
        fill:${outlineColor.hex};
        outline-style:none;
      }
      .cockscomb {fill:${tosakaColor.hex};}
      .eyes {fill:${eyeColor.hex};}
      .face {fill:${headColor.hex};}
      .faceshadow {fill:${headShadowColor.hex};}
      .body {fill:${bodyColor.hex};}
      .bodyshadow {fill:${bodyShadowColor.hex};}
      .tail {fill:${tailColor.hex};}
      .tailshadow {fill:${tailShadowColor.hex};}
      .wattle {fill:${moustacheColor.hex};}
      .beak {fill:${beakColor.hex};}
      .foot {fill:${footColor.hex};}
      ${hasForehead?'':`.forehead {display:none;}`}
      ${hasCheek?'':`.cheek {display:none;}`}
      ${hasNose?'':`.nose {display:none;}`}
      ${hasBerry?'':`.berry {display:none;}`}
      .bg {fill: #fff;}
      .shadow {fill: #ccc;}
      .eyewhite {fill: #fff;}
      .eyeblow {fill: #1a1a1a;}
      .scribble {fill: #1a1a1a;}
      `}
    </style>
  </defs>
  <path class="bg" style={{fill:bgColor}} d="M0 0h1000v1000H0z" />
  <path class="shadow" d="M271 920.2c-53-19.2-63-54-18-72 111.5-44.6 355.8-19.3 435.4-19.3s196.8 15.8 203.6 46.3-108 36-252 54c-156 19.5-315.6 10.4-369-9z" />
  <path class="tail" d="M279.9 595.2c9.6-19.1-2.2-35.1-5.9-46.6-3-9.3-20.2-7.6-26.6-8.6-5.8-.9-13.8 1.9-21.9 14.1-5.5 8.4-5.4 15.8-8.4 18.4-3.4 3-9-.4-12.6-3.2-13.7-11-19.3-24.6-15.6-37.8 1-3.7 6.8-16.4 10.2-18.9 2.3-1.7 4.4-4.5-1.3-2.9-5.9 1.7-13 7.6-18.7 22.4-2.3 6-9.7-3-13.1-8.1-20.6-30.8-.8-130.4 76.1-129.1 79.5 1.4 85.9 53.7 81.7 121-3.2 51.8-13.3 75.7-20.7 93.5-1 2.5-15.5 1.5-17.1.9l-6.1-15.1z" />
  <path class="tailshadow" d="M320.6 556.7c-5.8 22.4-5.4 35-5.1 26 .2-6.6-25.8-1.5-36.9 1s-23.7-18.8-3.1-25.9c20.7-7.1 31.5-7.6 45.2-1.1Z" />
  <path class="outline" d="M269.5 603.5c7.1-21.1 4.8-38.6-.7-49.9-4.4-9.1-12-12.9-18.8-13-6.2 0-14 4-20.5 17.8-4.5 9.5-3.3 17.1-5.9 20.2s-9.4 1-13.5-1.5c-15.7-9.3-23.5-22.4-21.7-36.6.5-4 4.6-17.9 7.7-21 2.1-2.1 3.9-5.3-1.8-2.8-5.8 2.6-12.3 9.7-16 25.9-1.5 6.6-10.4-1.7-14.7-6.4-25.7-28.7-10.6-140.8 69-150.1 70-8.2 108 54.6 102 120.8-3.4 37-18 80.3-23 99.8-.7 2.7-9.8 1.1-11.5.7s4.2-9.5 8-26.5c3-13.2 16.4-62.6 11.5-99.2-7.1-52.2-40.8-83.5-83.8-78.3-52.9 6.4-78.6 70.6-73.1 98.2 3.9 19.5 8.1 23.5 13.7 16.4 8.5-10.8 25.7-14.3 33.4-14.4 5.4 0 3.8 5.3 1 9.4-18 25.9-10.3 40.5-2.9 48 3.6 3.7 10.5 8.8 12.1 1.9 5.1-21.7 20.4-28 29.2-27.9 16.3.1 24.8 8.5 31 20.9 6 11.9 6.4 39.2 6.7 40.8 2.5 14.3-13.8 15.1-17.4 6.7z" />
  <path class="tail" d="M256.1 610.7c2 6.7-3.3 7.9-9.9 5.7-11.4-19.4-28.4-23.6-40.7-26.9s-17.8.6-22.4 5.7c-4.2 4.7-10.1 13.2-3.9 27.2 4.3 9.7 8.8 18.2 9.4 22.2.7 4.7-8 8.4-12.8 8.3-10.9-.2-23.7-6.8-31.2-13.7-3-2.8-11.3-17.1-11.7-21.5-.2-3-1.5-7.3-6-2.6s-9.9 22.8 0 36.3c4 5.5-3.4 7.2-9.8 7.3-39.1.6-102.7-103.8-60-157.3 50-62.7 124.5-33.9 167.7 16.9 24.4 28.7 38.3 56.7 49.9 73.5 1.6 2.3-5.6 8.2-7.2 9.3" />
  <path class="tailshadow" d="M286 582.5c1.5 4.9-27 18.6-36.7 26.5-3.5 2.9-26.4-18.3-28.2-18.9-1.8-15.5 4.1-21.8 4.1-21.8s-12.5-6.6-18-3.6c-8.2 4.5-9.6 13-8.8 23.6-23.7 2.5-22.1 25.7-21.5 29.7.7 4.7-18.7-2.5-26-9.8-4.7-4.7-8.4-16-8.1-25 .2-6.6 2.4-7.9 5.1-11.5-5.8 1.1-11.1 15.2-9.4 26.2 1.4 8.9-23.4 2.4-43.1-8.1-27.1-14.5-65.8-49.3-23.2-102.8 50-62.7 213.7 95.4 213.7 95.4z" />
  <path class="outline" d="M247.5 626.3c-11.8-20-27.1-30.2-39.8-33.6s-18.4.6-23.1 5.9c-4.3 4.8-6.4 13.8 0 28.3 4.4 10 11.2 14.3 11.8 18.5s-7.8 8-12.7 8.7c-30.9 4.1-43.7-11.4-50.2-27.5-1.8-4.5-4-6.7-5.9-.5-1.9 6.4-.7 16.3 9.5 30.3 4.1 5.7-9.5 6.9-19.6 6.3-40.2-2.2-109.6-95.4-67.2-162.1s117.5-40.9 166.5 11.5c26.5 28.3 50.2 65.9 62.1 83.2 1.6 2.4-5.8 8.5-7.4 9.6s-4.6-9.8-15.4-24.5c-8.4-11.4-36.4-54.5-68.7-75.5-44.8-29.1-93.6-33.2-119.7-1.4-31.3 38.1-10.5 104.2 21.5 128.8 15.8 12.1 31.3 20.6 29 8.3-2.7-14.8 4.1-28.4 9.4-33.5s6.7-1.3 8.5 3.6c11 30.1 29.9 33.8 38.6 34.4 5.4.3 11.2-1.4 6.9-7.4-13.6-18.9-8-35.2-2-42.1 11.2-12.7 23.6-13.7 37.7-10.1 13.5 3.4 35.3 21.8 36.7 22.7 13 7.8 2.4 21.2-6.6 18.3z" />
  <path class="tail" d="M254.3 606c1.7-22.5-14.3-43-24.8-50.4-8.5-5.9-34.2-11.9-42.1 22.6-2.4 10.4 2.4 18.4.6 22-2.1 4.3-8.9 3.3-13.6 2-17.8-5.2-26.5-13.9-28.2-28.2-.5-4.1-1.4-17.9.8-21.7 1.5-2.6.5-8.1-5.1-5.1-9.3 5.1-15.1 15.1-14.7 31.9.2 6.8-7.5-.7-12.8-4.2-32.5-21.7-59.3-127.4 13.5-163.3 55.7-27.5 107.7 16.6 136.3 67 18.6 32.7 24 101.6 24 122 0 2.8-29.8 11-34 5.5z" />
  <path class="tailshadow" d="M279.2 551.8c3.3 21.2 7.6 42.9 7.8 33.9.2-6.6-19.5 14.8-30.7 17.3s3.8-11.4-13.1-35.4c11.4-7.1 20.1-13.6 35.9-15.8z" />
  <path class="outline" d="M250.4 609.9c-2-23.9-11.8-40.1-22.1-49s-17.4-7.6-24.1-4.8c-6.1 2.6-12.1 9.9-12.6 26.3-.3 11.3 4.1 18.3 2.8 22.4-1.5 4.8-8.9 5.3-14 4.3-43.7-8.1-40-34.9-39.2-49.6.3-4.7 4-12.1-1.1-7.1-6.1 6.1-9.1 18.6-5.9 36.1 1.3 7.1-11 2.8-17.2 0-37.7-17.3-70.6-141.7 4.7-183.8 63.2-35.4 128.7 14.6 151 85.1 12.1 38.1 17.4 83.7 20.8 105.1.5 3-9.2 5.3-11.1 5.6-1.8.3 0-11.1-3.4-29.7-2.7-14.4-15.2-69.3-35.9-103.2-28.7-47.1-72-67.8-109.6-49-54.9 27.4-49.3 111.2-32 136.1 12.2 17.6 17 16.1 20.1 8.7 5.7-13.6 16.1-21.7 25.4-23.4 7.1-1.3 5.8 2.6 4.8 8.8-5.4 32.5 8.4 41.2 22.3 46.9 10.4 4.2 9.3-.2 9-8.5-.6-20.3 9.5-33.7 18.2-37.4 14.5-6.2 28-1.2 39.4 8.4 11 9.2 20.6 39.2 20.9 41 2.1 15.8-4 17.4-11.1 10.6z" />
  <path class="body" d="M747.6 657c16.9-2.6-10.1-56.1 35.6-46.2 99.4 21.5 129.5 146.8 40.3 175.1-43.4 13.7-91.1 18.8-113.1-29.1-6.4-13.9-10.2-52.7-6-82.8 1.6-12 6.1-11.2 43.3-16.9Z" />
  <path class="outline" d="M769 806.7c-25.3 0-49-10.9-65.5-46.8-7.6-16.6-10.7-57.2-6.6-87 .8-6.1 2.7-12.3 10.8-15.9 5.4-2.4 13.2-3.6 27.3-5.7l10.9-1.7c1.1-2 1.6-8.4 1.9-12.7.8-11.3 1.9-25.4 12.3-33.2 6.8-5.1 17.1-5.3 28.2.2 57.6 28.2 99 66.1 102.8 108.4 2 22-11.6 37.3-24.3 51.7-14 15.9-32.6 27.7-54 34.5-14.4 4.5-29.3 8.1-43.8 8.1zm-20.2-142.3c-4.2.7-8 1.2-11.5 1.7-12 1.8-20 3-23.5 4.6-1.3.6-1.6.7-2.1 4.2-4 29-.4 66.1 5.4 78.7 19.9 43.2 49.6 43.8 91.1 30.6 42.1-13.3 65.6-42 64.2-71.9-1.7-36.7-36.4-86.6-87.4-97.6-7.4-1.6-12.8-1.3-15.9 1.1-4.9 3.7-5.6 13.6-6.3 22.3-.8 10.9-1.8 24.4-14.1 26.3z" />
  <path class="body" d="M428 401c-26.5 59.1-61.3 166.3-82.2 177.9 0 0-24.5 4.4-37.8 1.1-23.7.8-29.4 3.4-52.2 24.6-41.3 38.2-37.8 67.1-28.5 114.4 12.7 65.2 28 111.2 93.5 140.6 46.6 20.9 93.2 49.4 188.6 39.5 24.6-2.5 68.3-6.5 123.1-14.7 56.8-8.5 135.4 6.6 165.8-17 81.3-63.2 49.1-209.2 8.5-248.2-50.5-48.4-73.7-124.5-97.4-193.3-27.2-78.8-66.2-128.3-151.3-123.1-73.4 4.5-115.2 65.5-129.9 98.3z" />
  <path class="face" d="M431.7 394.5c-26.5 59.1-41.9 120-59.3 142.3s7.5 56.2 48.1 29.5c6-4 11.3-2.7 10.2 5.6-4.9 35.4 36.2 57 70.8 25.8 6.9-6.2 12.9-4 12.8 4-.4 43.7 47.8 65.8 77.9 29.3 5.1-6.2 11-5.2 13.2 2.7 13.9 52 61 36.5 72.1 5.7s8.7-9.3 13.4-2.4c26.5 39.8 61.9 15.2 56.4-14.4-1.6-8.4 3.5-7.8 7.4-4.8 37.1 28.6 56.2-.4 42.7-12.6-44.4-40.3-54.2-102-85.8-179-37.3-90.7-71.1-128.7-156.2-123.5-73.4 4.5-108.9 59-123.6 91.7z" />
  <path class="bodyshadow" d="M605.9 820c69.6-20 114-12.2 135.5-4.2 10.7 4 1.7-54.9 12.4-88.1 11.9-36.7 33.5-33.4 29.9-24.3-21.5 54.8-12.1 110.1-2.8 106.7 49.4-18.2 69-64.1 60.2-118 16.3 110.1-13.4 168.7-76.6 189s-85.8-2.3-181.8 12.4c-117.4 18-192 7.9-279.2-39.6-26.3-17.2-111.9-100-68.2-212.2-1.1 144.7 104.8 129.7 160 137.2 1.4.2 21.5-42.7 27.9-39.3-7.2 29.2-4.6 42.9-1.3 44 11.5 4.2 30.3 11.9 46.9 19.7 7 3.3-28.4-25.6-21.5-58.1 3.4-15.8 14.4-20.4 24.3-9.6 5.4 5.9 13.9 13.7 19.8 23.2 2 3.3-12.2-47.7 0-56.5 22-15.8 17.5 45.2 44 54.2-28.2-45.2-1.7-58.7 3.4-61 7.3-3.4 20.9-2.3 15.8 10.2-9.7 23.6-7.7 77.7-6.2 83 5.1 17.5 12.4 35.1 15.2 35.6 22.8 3.9 15.2 3.6 42.4-4.2z" />
  <path class="outline" d="M493.6 911.2c-65.5 0-129.8-13.2-175.1-39.5-70-40.7-84.7-83-92.9-111-30.2-102.8 21-154.5 32.1-164.9 18.7-17.5 38.8-26.4 56.2-20.6 10.1 3.4 24.1-2.4 30.5-7.9 16.8-14.3 41.1-77.6 50.5-101.6 17.9-45.4 32.6-82.5 57.5-110.9 26.5-30.3 49.5-49.3 93.6-56.3 49.7-7.9 111.7 5.9 150.5 76.8 19.5 35.6 49.1 174.5 91.8 216.3 29.2 28.7 53.4 48 68.1 114.5 7.8 35 1.9 72-9.5 102.7-17.7 47.6-52.6 77.1-98.4 83.1-20.6 2.7-42.3 3.8-71.7 3.1-48.6-1.1-117.8 16.2-183.3 16.2zM302.4 590.8c-15.5-4.9-61.5 12.3-70.8 68.5-4.6 27.9-23.7 129.3 85.8 190.9 63.2 35.5 161.1 43.4 260.9 24.8 54.8-10.2 71.9-17.7 102.5-18.9 29.4-1.1 48.8 16.7 72.6 14.4 62.9-6 76.3-54 81.3-74.3 15.1-60.6.6-142-34.4-177.6-44.3-45-53.6-79.1-65.5-112.4-10.8-30.3-32.6-96.5-44.6-121.3C662 327.1 618 300 555.8 306.2c-33.9 3.4-67.5 23.2-91.2 52-22.7 27.5-39.6 65.3-53.4 111-11 36.4-35 105.3-54.8 118.3-14.9 9.8-32.2 10.2-54 3.2z" />
  <path class="cockscomb" d="M577.1 330.7c-23.7-16.5-51.4-31.6-86.4-7.1-14.7 10.3-34.6 36.6-40.4 35.5-29.8-5.4-49.4-18.9-47.7-34.1s43.5-15.8 32.8-32.8c-15.8-25-13.9-38.4 11.9-33.3 34.4 6.8 27.9-35 45.7-27.7 6.4 2.6 9.9 7.1 28.2 16.4 7.1 3.6 24.3-23 33.4-18 7.7 4.3 9.8 11.5 22.5 17.4 7 3.2 26.4-9 34.9-13.9 11.2-6.4 24.8 17.7 26.6 30.1 4.9 33.3-4.2 52.5-10.9 62.1-6.4 9.1-24.7 23.4-50.6 5.3z" />
  <path class="eyewhite" d="M691.3 386.5c-14.6 2.2-17.8 22.7-12.8 42.8 4.4 17.7 14 32.5 24.8 32.8 18.2.6 20.2-20.7 14-47-4.1-17.2-15.7-30.2-26-28.7z" />
  <path class="eyes" d="M704 466.2h-.8c-9.2-.3-22.2-9.9-28.6-35.9-3.9-15.9-2.8-30.6 3-39.3a20.19 20.19 0 0 1 12-8.2c9.6-2.9 22.9 10.2 28.5 29.5 4.7 16.2 5.6 37.5-1.1 47.6-3.1 4.6-6.8 6.2-13 6.2zm-10.2-77.9c-4.7.2-8.8 2.1-11.1 7.9s-3.7 18.7-.4 32.2c4.2 17 13.1 29.5 21.1 29.8 4.1.1 7.3-1.3 9.4-3.8 4.9-6 7-18.8 2.4-38.8-3.5-15.4-13-27.6-21.5-27.3zm-2.5-1.8z" />
  <path class="eyewhite" d="M544 389.9c-17.3-2.6-39.9 10.2-47.7 33.6-9.1 27.2 5.9 49.8 30.6 53.9 31.7 5.3 51-16.3 52.9-41.8 2.4-31.2-19.2-43.3-35.8-45.7Z" />
  <path class="eyes" d="M520.2 482c-19.4-5.7-38.8-30.4-27.8-62.1 11.2-32.4 39.5-35.7 52.6-35.3 20.2.7 44.2 22.8 39 57.5-6 40.1-42.6 46.1-63.7 39.9zm20.8-88.8c-16.2-1.4-34.1 10.2-40.9 29.8-6.2 17.8 1.3 40.6 20.4 47.2 27.2 9.3 48.4-7.7 52.1-31.1S559 394.8 541 393.2zm.9 9.9c-11.2-2.1-26.5 7-31 22.3-4.8 16.4 4 30.5 16 34.2 16.7 5.1 33-5.5 35.2-22.3 2.7-20.4-8.3-32-20.2-34.2zm153.1-4.9c-8.2 1.5-8.2 14.8-6.3 25.7 2.2 12.5 9.9 23.5 15.3 23.8 9.8.5 8.8-17.7 6.9-28.3-1.9-10.1-8.1-22.5-15.8-21.1z" />
  <path class="body" d="M343.1 618.7c26.3-10.2 42.4-1.2 71.7 10.4 31 12.3 50.5 66.6 32.4 77-37.1 21.4-22.5 50.9-65.5 83.6-29.4 22.4-101.6 22.2-129.9-23.2-19.3-30.9-13.1-85.8 2.5-105.3 26.8-33.5 38.2-20.2 40.9-13.6 6.5 15.8 34-23.8 47.7-29.1Z" />
  <path class="bodyshadow" d="M347.6 763.2c26.4-5.1 64.5-8.3 76.2-39-3.2 13.9-7.4 16.5-13.8 31.7-19.8 46.9-77.4 58.7-131.6 37.3-46.9-18.6-35.9-89.5-25.7-107-6.8 33 1.7 40.7 19.5 56.8 12.2 11 53.4 24.6 75.4 20.3Z" />
  <path class="outline" d="M254.1 779.6c-27-35.4-25.6-81.6-5.6-113.8 11-17.8 23.9-30.1 39-29.6 4.5.1 9.1 3.1 11.5 7 1.9 3 13.1-3 19.9-10.2 4.5-4.8 14.3-15.1 28.8-18.1 7.5-1.6 12.2 1.9 7.5 2.3-3.9.3-12.8 6.3-17.1 9.4-9.4 6.8-9.8 11.3-16.9 21.5-8.4 12-27 23.7-31.7 2.1-2.5-11.7-19.8-1.3-28.2 16.5-10.2 21.4-25 68.3 5.9 95.7 22 19.5 50.6 29.6 88.1 23.7s47.2-23.8 56.3-42.8c6.2-13 9.8-25.8 29-38.8 8-5.4 10.7-20.9 4.5-37.5-3-7.9-3.7-10.9 1.1-7.2 4.3 3.4 8.1 16.6 8.5 22.6.6 8.8 1.1 23.7-14.1 35-12.7 9.4-16.9 22-23 39-7.8 22-30.8 50.1-64 55.1-40.7 6-79.4-5.7-99.4-31.9z" />
  <path class="foot" d="M464.5 757c-10.4-13.6-10.5-27.9-3.4-33.9s14.8 1.2 19.2 8.8c6.9 11.9 11.2 16.9 21.8 21.5-3.2-13.7-3.7-27.5-4-36.4-1.1-28.6 11.9-25 16.9-10.9 4.5 12.6 6.3 21.6 18.7 37.7.4-19 3.2-35.1 10.1-42.6 13.2-14.3 18.1-7.1 15.8 8.5-5.7 39.1 6.7 93.2 15 114.9 9.3 24.2-35 44-47.4 19.5-10.5-20.7-29.3-43.6-62.7-87z" />
  <path class="outline" d="M517.6 844.9c-14.5-23.8-36.5-53.4-56.8-85.5-10.5-16.6-10.6-33.4-2.6-39.2 9.3-6.8 20 3.5 25.8 13 3.9 6.5 10.5 15.5 11.3 12s-2.8-26.8-2-36.5c1.4-17.5 16.3-21.1 19.3-14.1 4.5 10.4 13.9 32.4 19.6 37.1 2.9-18.7 6.3-27.9 11.2-34.8 7.9-11.3 21.9-5.5 19.7 13.2-5.3 43.8 2.3 82.6 11.3 102.8 7.3 16.4 3.2 38.1-9.9 45.2-14.9 8.1-35.3 5.6-46.8-13.2zM468.2 757c16.9 22.5 38.1 56.2 56.9 81.3 13.6 18.1 27.4 16.1 35 11.3 8.6-5.4 13-18.9 7.1-31.6-11.3-24.3-15.2-63.2-11-100.7 1-9.2 1.3-15.8-2.2-17-3.8-1.3-7.8 2-9.5 7.7-2.7 9.4-3.9 13-5.4 27.8-.7 6.8-1.4 12.7-3.5 13.3s-6.1-2.6-7.4-4.2c-6.1-7.4-9.3-18.9-12.7-27.7-4.4-11.2-5.3-14.9-9.6-14.6-4.3.4-5.9 5-5.2 15.3.9 12.4 2.7 23.6 5.7 36.5s-5.4 9.5-10.1 5.8c-9-7.2-11.2-13.3-17.7-22.6-4-5.6-11.7-13.7-15.9-10.5s-1.3 20.9 5.5 29.9z" />
  <path class="foot" d="M770.3 711.6c6.5-31.4 36.2-36 29.1-16.5-5 13.6-3.9 27.9.3 37.8 4.3-16 12.2-26 18.6-31.3 20.1-16.6 33.4-5.4 23.2 8.7-6.8 9.3-4.7 16.5-7.3 31.8 12.6-12.5 24.5-14.4 33.9-16.4 9.9-2.2 15.8 6.5 9.2 11.3-3.9 2.9-17.5 13-21.8 16.8-26.9 23.4-34.8 39.3-43.3 59.3-9.4 22.4-46.4 27.4-48.7-11.8-.9-15.1.5-59.2 6.8-89.7z" />
  <path class="outline" d="M784.4 837.9c-1.6 0-3.1-.1-4.7-.4-13.9-2.4-22.8-14.9-23.8-33.4-.9-15.8 3.4-80 11-97.4 7.5-17.3 14.6-22.6 23.6-25.2 6.7-1.9 16.1-1.5 15.8 6.4-.2 5.7-4.3 8.5-6.5 13.9-4.1 10.5-1.6 22.4 2.5 14.4 4-8 9.8-13.7 16.2-17.7 9-5.6 18.8-9.4 27.9-5.3 3.6 1.6 3.4 8.6-4.3 20.3-7.1 10.7-8.4 25.1-2.1 20.1 6.9-4.7 15.1-8.9 22.6-10 7.7-1.1 15.5-.7 18.2 3.4 2.8 4.3-2.6 12.7-10.4 18.1-24.1 16.4-41.2 38.8-56.1 72.4-5.3 12.1-17.4 20.3-29.7 20.3zM765 802c.8 13.8 8.2 21.7 19.6 24.5 12.4 3 20.9-8.7 24.8-18.1 9.7-23.2 29.1-48.4 58.7-67.8 4.3-2.8 8.3-6.3 7.2-9.4-.9-2.6-7-2.2-12-1.1-7.7 1.7-13.9 4.1-23.7 11.3-4.7 3.5-9.7 7.4-11.7 6.4-1.9-1-2.5-6.1-1.5-10.5 1.9-8.7 4.4-16.3 7.9-22s8.3-12.2 6.3-14.9-10.6-.8-17.5 4.6-10.1 10.3-14.2 21.5-8 11.8-11 9.2-3.5-4.2-4.3-8c-1.5-7.5-1.8-11.4-.2-21.1.9-5.8 4.1-10.8 6.2-14.9 2-3.9-9.2-5.3-16.5 1.7-6.8 6.5-9 20.1-10.9 33.9-3.2 23.6-8 60.2-7.2 74.9z" />
  <path class="faceshadow" d="M622.5 520.9c2.4 12.4 12.3 26.3 32.6 24.3 15.8-1.6 19.9-19.5 12.4-32.2-7.1-12-24.1-16.1-29.8-31.1-3-7.8-12.1-17-13.8-11-2.8 9.9-4.2 35.3-1.4 50Z" />
  <path class="wattle" d="M631.2 519.3c4.1 9.7 13.6 22.8 33.6 20 18.2-2.6 22.6-18.5 15.1-31.2-7.1-12-24.1-16.1-29.8-31.1s-23.3-11.1-24.8-3.6c-2.5 12.5 2 36.6 5.9 45.9Z" />
  <path class="beak" d="M612.1 454.6c-.6-13 4.9-37.9 33-38.1s25.8 11.2 31.3 22.6c4.4 9.2 3.4 25.4-3.2 25.6-7 .2-8.9 11.4-17.8 16.3s-42.2-6-43.2-26.4Z" />
  <path class="outline" d="M680.7 439.5c-6.4-13.3-19.7-28.6-35.9-27.9-23.9 1-40.4 23.2-38.1 42.4.4 3.1.9 5.3 1.5 7.2 3.4 10.6 15.4 26.1 37.7 25.3 14.8-.6 20.7-6.3 24.7-15.1.3-.6.5-1.2.7-1.8 4.1 1.7 7.9 1.5 10.1-4.8 2.3-6.6 3.3-16.8-.8-25.2zm-34.4 38.3c-8.6.5-14.8-2.3-19.2-5.8 1.4-2.8 3.8-4.7 6.1-5.7 12.3-5.8 23.3-3.4 30.5-.4-.6 4.1-5.1 11.3-17.4 12zm-30.7-26.2c-2.4-18.8 13.6-33.6 30.5-34.3 7.7-.3 22.5 5.9 29.2 22.2 4.9 11.9 1.8 20.7.4 22.2-.3.5-1.3.6-2.8.4l-9.7-2.1c-7.2-1.7-15.9-3.7-21.8-2.4-9.4 2-15.2 10.1-21.3 4.7-.1-.1-3.7-4-4.5-10.7zm-31.8-114.7c-28.4-11.2-49-35.8-90.2-6.8-15.9 11.2-36.4 36-42.5 34.8-31.6-6.2-55.2-22.7-54.6-40.3.8-21.8 44-15.4 29.9-38.6-17.3-28.3-3.5-41.7 23.2-32.9 23.3 7.7 24.4-37.8 43.3-29.4 6.8 3 5.3 3.8 24.7 14.5 7.5 4.1 27.2-25.8 36.8-20 8.2 4.9 11.9 12.6 24.7 20.9 8.9 5.8 30-14 40.2-11.4 8 2.1 20.5 14.1 23.8 33.1 6 34-7 62.2-18.5 75.2-9.6 10.8-30 5.2-40.7 1zM523 306.4c27.8-2.6 57.9 27.3 85.9 26.9s27.1-34.9 27.8-50.7-2-29.1-15.8-43.3-30.3 19.2-40.8 12.5c-4.4-2.9-15-10-22.3-18.2-11.3-12.6-27.3 21.1-39.7 14.7-11.2-5.9-19.3-8.3-24.4-10.1-11.3-4.1-17.8 25.9-33.4 25.2-22.8-1-39.4-7.6-26.6 17.4 7 13.8 10.2 24-2.1 30.5-10.7 5.6-19.4 9.3-20.4 14.3-1.7 9 20.9 25.7 37.9 28.6 8.7 1.5 34.2-44 73.9-47.6z" />
  <path class="faceshadow" d="M599.4 572.5c18.6 8.4 47.7 14.9 75.1 10.7 19.8-3.1 22.3-10.3 26.7-15.8s4.3 31.2-23.3 35.8c-57.8 9.4-84.2-33.1-78.5-30.6Z" />
  <path class="eyeblow" d="m477.5 397.1 8.6 16c3 5.6 10.8 2.6 11.2-3l1.5-23-11.2 3 8.1 18.2c2.7 6 10.7 2.2 11.2-3l2.4-24.3-11.2 3 6.5 15.4c2 4.8 10 3.3 11-1.4l4.8-22.5h-11.6l6 16.5c2.1 5.8 9.4 5.6 11.6 0l5.8-14.9-11 1.4 5.3 11.2c2.4 5 9.5 3.1 11-1.4l4.5-13.7-11 1.4 6.8 12.6c2.6 4.8 9.4 3.3 11-1.4l3.8-11.7-11 1.4 7.7 13.9c3.2 5.7 10.5 2.4 11.2-3l2.6-19.3-11.8 1.6 5.3 23c1.3 5.6 10.5 5.9 11.6 0l3.8-21.2-11 1.4 7 16c2.2 4.9 9.7 3.1 11-1.4l5.4-18.8h-11.6l4.3 20.4c1.6 7.6 13.2 4.4 11.6-3.2l-4.3-20.4c-1.3-6-10-5.4-11.6 0l-5.4 18.8 11-1.4-7-16c-2-4.6-10.1-3.5-11 1.4l-3.8 21.2h11.6l-5.3-23c-1.7-7.2-11-4.6-11.8 1.6l-2.6 19.3 11.2-3-7.7-13.9c-2.6-4.7-9.4-3.3-11 1.4l-3.8 11.7 11-1.4-6.8-12.6c-2.6-4.8-9.4-3.2-11 1.4l-4.5 13.7 11-1.4-5.3-11.2c-2.4-5.2-9.3-2.9-11 1.4l-5.8 14.9h11.6l-6-16.5c-1.9-5.1-10.2-6.3-11.6 0l-4.8 22.5 11-1.4-6.5-15.4c-2.6-6.1-10.7-2.1-11.2 3l-2.4 24.3 11.2-3-8.1-18.2c-2.6-5.9-10.8-2.3-11.2 3l-1.5 23 11.2-3-8.6-16c-3.6-6.8-14-.8-10.4 6.1zm169.6-28.4 4.2 15c1.6 5.6 10.1 5.8 11.6 0l3.2-12.6h-11.6l5 16.3c2 6.6 11.4 5.1 11.8-1.6l1.1-18.1-11.8 1.6 3.3 12.9c1.5 5.6 10.2 5.8 11.6 0l2.6-11.6-11.8-1.6 1.7 15.6c.8 7.7 11.3 7.8 12 0l1.8-19.3-11.8 1.6 5.8 16.9c2.3 6.7 11 5 11.8-1.6l1.5-13.5-11.2 3 6.6 13.1c3.5 6.9 13.8.8 10.4-6.1l-6.6-13.1c-3-5.9-10.6-2.3-11.2 3l-1.5 13.5 11.8-1.6-5.8-16.9c-2.3-6.6-11.2-5.1-11.8 1.6l-1.8 19.3h12l-1.7-15.6c-.7-6.2-10.2-8.7-11.8-1.6l-2.6 11.6h11.6l-3.3-12.9c-1.8-6.8-11.4-5-11.8 1.6l-1.1 18.1 11.8-1.6-5-16.3c-1.7-5.5-10.1-5.9-11.6 0l-3.2 12.6h11.6l-4.2-15c-2.1-7.4-13.7-4.3-11.6 3.2z" />
  <g class="forehead scribble">
    <path d="M615,351c.8,7-1.6,13.9-7.3,18.3l4.1,4.1,1.3-1.5c2.7-2.7-1.5-7-4.2-4.2s-1.5,1.6-2.2,2.7c-1.7,2.4,1.7,5.9,4.1,4.1,7.3-5.6,11.4-14.2,10.3-23.5s-6.5-3.8-6,0h0Z" />
    <path d="M616.4,365.3c2.4,1.3,4.8,2.7,7.2,4s4.1,2.2,6.5,1.9c3.8-.5,3.8-6.5,0-6s-3.6-1.1-5.2-2l-5.5-3.1c-3.4-1.9-6.4,3.3-3,5.2h0Z" />
    <path d="M619.5,371.7c-.4,3.2-2.8,6.2-5.8,7.3s-2.1,7,1.6,5.8l1.2-.4c3.7-1.2,2.1-7-1.6-5.8l-1.2,.4,1.6,5.8c5.8-2.2,9.5-7,10.2-13.1s-1.5-3-3-3-2.8,1.4-3,3h0Z" />
    <path d="M620.8,380.8c2,1.4,4.3,2.4,6.7,3s3.2-.5,3.7-2.1-.5-3.3-2.1-3.7-3.6-1.2-5.2-2.4-3.3-.2-4.1,1.1-.3,3.2,1.1,4.1h0Z" />
    <path d="M597.1,362.3c-.3,6.7,0,13.4,1.3,20s.8,5.6,2.3,7.8,3.7,3.1,5.6,4.6,4.4,1,5-1.3l.4-1.5c1-3.7-4.8-5.3-5.8-1.6l-.4,1.5,5-1.3c-1.2-.9-2.8-1.7-3.9-2.7-2-2.1-2.3-6.2-2.8-8.9-.9-5.5-1-11-.8-16.6s-5.8-3.9-6,0h0Z" />
    <path d="M601.3,366.3c5-1.8,10-3.3,15.1-4.7s4.8-1.2,7.2-1.7,5.6-1.6,7.4,1.7,1.8,9.2,2.3,13.4,1.6,9.7,2.9,14.5l2.9-3.8-8.7,.2c-3.9,0-3.9,6.1,0,6l8.7-.2c1.9,0,3.4-1.9,2.9-3.8-1.7-6.4-2.7-12.8-3.4-19.3s-1.3-10.2-5-13.6-8.9-1.5-13.5-.5c-7,1.6-13.8,3.6-20.5,6s-2.1,7.1,1.6,5.8h0Z" />
  </g>
  <g class="nose scribble">
    <path d="M595.8,462.6c-15.5,8.1-24.1,24.3-29.6,40.2s-3,11.5-5.1,17.1c-2.9,7.9-7.6,10.9-13.9,15.1s-10.8,7.8-18.6,5-14-10.1-14.3-17.4,1.3-17.7,9.5-20.4,7.6-1.6,11.1-2,7.5,.3,9.6,5.2,1.7,10.4,.1,13.3,.8-.9,.3-.5c-.9,.8-2.6,1.4-3.7,1.8s-3.5,1.3-5.2,1c1.5,.2-.6-.5-.9-.6-1-.6-2.1-1-3.1-1.5s-2.3-1.6-3.2-1.7c-1.9-.3-.7,5.1,.7,4.5s3.4-3.4,4.6-4.4,2.4-2,3.4-3.2c4.9-5.9-3.5-14.4-8.5-8.5-5.2,6.2-18.1,14.1-6.7,21.7,3.7,2.5,9.1,5.7,13.7,5.8,5.3,.2,11.4-1.9,15.8-4.9s5.1-8.6,5.4-13.9-.2-12.1-3.7-17.4-8.8-9.1-15.5-9c-5.3,.1-11.5,1.2-16.7,2.6-12.5,3.4-17.6,15.1-18.8,27s-.3,11.2,2.3,16,7.8,10.6,12.8,14.2c9,6.4,20.7,7,30.1,1.3,8.5-5.1,16.4-10.4,21.7-19,5.3-8.5,6.5-19.4,10.1-28.7s11.2-22.4,22.3-28.2,.8-13.9-6.1-10.4h0Z" />
    <path d="M681.5,474.4c6.2,5.9,7.7,15.6,8.9,23.7s1.6,14.4,3.9,21.4,6.7,12.9,13.7,16.8c6.9,3.9,17.2,2.7,22.4-3.4s5.4-17,3.7-24.3-2.5-7-4-10.4-3.4-7.9-7.1-10.1-6.3-3.7-9.5-3.7-7.8,4.2-9.8,7.2-2.5,6.3-2.2,10,0,8.1,1.5,11.5,5.8,7.9,8.8,9.9,8.8,1.4,11.6-1.3,1.6-6.4,.8-9.6-1.9-7.5-3.4-11c-2.3-5.3-10-.7-7.8,4.5-.3-.7,.5,1.6,.6,1.9,.4,1.1,.7,2.3,1,3.4s.7,2.4,.9,3.6,0,3.8,1.2,1.6c1.7-3.3,.1,0-.4-.9,.4,.6,.1-.3-.3-.6-1.3-.9-2.4-2.4-3.5-3.5-1.7-1.8-1.6-3-1.8-5.8s-.9-5-.4-7,1.5-2.5,2.5-3.5,1.5-1,1.6-1.5c.8-.6,.4-.6-1.2,0l.9,.3c1.3,1.4,4.2,1.8,5,2.6,2.1,2.2,3.1,6.1,4.2,8.9,2.2,5.7,2.9,10.9,2,17s-6.7,9-12.5,6.4c-9.1-4-11.3-14-12.4-22.9-1.6-12.8-2.7-28.3-12.6-37.8s-10.6,2.4-6.4,6.4h0Z" />
  </g>
  <g class="cheek scribble">
    <path d="M446.8,452.1c2.3,21.6,10.2,44.5,24.6,61.2s24.1,18.4,38.3,23.3,10.1-6.1,5.8-10h0c-5.7-5.2-14.2,3.2-8.5,8.5h0l5.8-10c-2-.7-4-1.4-6-2.2s-2.5-.9-3.7-1.4-.9-.4,0,0c-.9-.4-1.8-1-2.7-1.4-7.2-3.9-14.1-8.2-19.7-14.3-12.8-14-19.9-35.1-21.9-53.7s-12.8-7.7-12,0h0Z" />
    <path d="M446.3,508.4l32.1-27c5.9-5-2.6-13.4-8.5-8.5l-32.1,27c-5.9,5,2.6,13.4,8.5,8.5h0Z" />
    <path d="M470.2,528.6c7.8-9.3,16.4-17.7,26-25.2s-2.5-13.2-8.5-8.5c-9.5,7.5-18.2,15.9-26,25.2-4.9,5.9,3.5,14.4,8.5,8.5h0Z" />
  </g>
  <g class="berry scribble">
    <path d="M629.2,705.5c3.8,10.3,12.9,17.2,23.8,18.8s11,.4,16.1-1.7,10.1-5.5,15.6-7.1,7.9-2.5,11.7-2.2,4.9,2.1,7.3,3,5.5,1.6,8.4,1.5c11.4-.5,20.4-10.1,24.8-19.9s-7.2-13.1-10.4-6.1-10,16.6-18.8,13.1-7.4-3.8-12.2-3.6c-3.2,.1-6.6,.8-9.7,1.5s-8,2.2-11.7,4-7.6,4.5-11.9,5.5c-8,1.8-18.3-1.9-21.3-10s-14.3-4.1-11.6,3.2h0Z" />
    <path d="M678.3,679.7c17.4,29.9,20,67.8,2.2,98.2-3.9,6.7,6.5,12.7,10.4,6.1,19.9-34,17.3-76.8-2.2-110.3-3.9-6.7-14.3-.6-10.4,6.1h0Z" />
    <path d="M631.6,748.1c6.7,8,16.6,12.5,26.9,13.5,5.2,.5,10.8,0,15.8-1.7s7.7-3.9,11.6-6.1,8.1-5.2,11.8-5.3,5.7,4.6,8.4,6c10.8,5.7,20.1-2.6,25.5-11.3s-6.3-12.6-10.4-6.1-4,7.1-7.7,7.2-6.1-4.4-8.9-6.1c-7.1-4.2-15.2,.3-21.7,3.6s-12.4,7.9-20.5,8-16.8-3.5-22.4-10.2c-4.9-5.9-13.4,2.6-8.5,8.5h0Z" />
    <path d="M633.5,786.4c7.8,5.4,18.1,8.2,27.6,7.5,9.4-.7,16.7-7.2,25.8-8.6s5.8,1.9,8.6,3.5,8.2,3.4,12.7,3.4c9.1,0,17.2-4.4,21.3-12.7s-7-13-10.4-6.1-9.9,8.6-16.1,5.8-5.6-3.7-8.7-5-7-1.5-10.7-.6c-7.4,1.7-14,6.9-21.5,8-7.8,1.2-16.2-1.2-22.6-5.7s-12.3,6-6.1,10.4h0Z" />
  </g>
</svg>
  );
};
export default forwardRef(MtChicken);
