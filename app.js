"use strict";

particlesJS(
  "particles-js",

  {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 3 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#ffffff",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  }
);

const navSlide = () => {
  const $ = (q) => document.querySelector(q);
  const navLinks = document.querySelectorAll(".nav--links li");

  $(".hamburger").addEventListener("click", () => {
    $(".hamburger--menu").classList.toggle("hamburger--menu__active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFadeIn 600ms ease-in-out forwards ${
          index / 7
        }s`;
      }
    });

    $(".hamburger").classList.toggle("toggle");
  });
};

navSlide();

const navRefresh = () => {
  const $ = (q) => document.querySelector(q);
  const links = document.querySelectorAll(".nav--links li a");

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
      $(".hamburger").classList.toggle("toggle");
      $(".hamburger--menu").classList.toggle("hamburger--menu__active");
    });
  }
};

navRefresh();
