import React from 'react';

const cheerio = require("cheerio-without-node-native");

export async function loadWeather() {
  const searchUrl = `https://weather.naver.com/`;
  const response = await fetch(searchUrl);

  const htmlString = await response.text();
  const $ = cheerio.load(htmlString);
  const temperature = $('div.weather_now>div.summary_img>strong');
  const weather = $('div.weather_now>p.summary>span.weather');
  console.log(temperature.text());
  console.log(weather.text());
  return <span>liList.text()</span>;
}
