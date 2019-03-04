const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navText = document.querySelectorAll('a');
navText[0].innerText = siteContent["nav"]["nav-item-1"];
navText[1].innerText = siteContent["nav"]["nav-item-2"];
navText[2].innerText = siteContent["nav"]["nav-item-3"];
navText[3].innerText = siteContent["nav"]["nav-item-4"];
navText[4].innerText = siteContent["nav"]["nav-item-5"];
navText[5].innerText = siteContent["nav"]["nav-item-6"];

const headerOne = document.querySelector("h1");
headerOne.innerText = siteContent["cta"]["h1"];

const getStartedButton = document.querySelector("button");
getStartedButton.innerText = siteContent["cta"]["button"];

const cTAImage = document.querySelector("#cta-img");
cTAImage.src = siteContent["cta"]["img-src"];

const subHeaders = document.querySelectorAll("h4");
subHeaders[0].innerText = siteContent["main-content"]["features-h4"];
subHeaders[1].innerText = siteContent["main-content"]["about-h4"];
subHeaders[2].innerText = siteContent["main-content"]["services-h4"];
subHeaders[3].innerText = siteContent["main-content"]["product-h4"];
subHeaders[4].innerText = siteContent["main-content"]["vision-h4"];
subHeaders[5].innerText = siteContent["contact"]["contact-h4"];

const mainParagraphs = document.querySelectorAll("p");

mainParagraphs[0].innerText = siteContent["main-content"]["features-content"];
mainParagraphs[1].innerText = siteContent["main-content"]["about-content"];
mainParagraphs[2].innerText = siteContent["main-content"]["services-content"];
mainParagraphs[3].innerText = siteContent["main-content"]["product-content"];
mainParagraphs[4].innerText = siteContent["main-content"]["vision-content"];
mainParagraphs[5].innerText = siteContent["contact"]["address"];
mainParagraphs[6].innerText = siteContent["contact"]["phone"];
mainParagraphs[7].innerText = siteContent["contact"]["email"];
mainParagraphs[8].innerText = siteContent["footer"]["copyright"];

const mainImg = document.querySelector("#middle-img");
mainImg.src = siteContent["main-content"]["middle-img-src"];