/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "M Sajjad Ali ",
  title: "Hi, I'm Sajjad",
  subTitle: emoji(
    "A passionate Front End Software Developer 🚀 having an experience of building different Type Website  with JavaScript / Reactjs / Nextjs / React-Redux / Redux Toolkit / Redux-saga and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1fNC1bb9X9HCjYu04FGYqeGA6nAZE9x41/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/VivviDCode",
  linkedin: "https://www.linkedin.com/public-profile/settings",
  gmail: "sajjad.ali.kayani@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CURIOUS FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web  applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase"),
    emoji(
      "⚡  Contributed to multiple projects, leveraging TypeScript, Material UI, NextJs, ReactJs, Redux and Redux Toolkit Query, to deliver high-quality and innovative solutions"
    ),
    emoji(
      "⚡  Contributed to efficient project management and delivery by actively participating in sprint planning, reviews, and retrospectives following agile/scrum methodologies."
    ),
    emoji(
      "⚡  Collaborated with the QA team to identify and address bugs and usability issues, contributing to a 20% reduction in post-release issues."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
   
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Numl University",
      logo: require("./assets/images/numl.png"),
      subHeader: "Bachelor in Software Engineering",
      duration: "August 2018 - April 2022",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Enthusiastic  Software Engineer",
        "Passionate about Coding and Innovation in Front End Technology",
        "Problem-solving",
        "Eager to contribute to cutting-edge tech projects and make a positive impact."
      ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development",
      progressPercentage: "90%" 
    },
    {
      Stack: "Html / Css",
      progressPercentage: "90%"
    },
    {
      Stack: "React js",
      progressPercentage: "85%"
    },
    {
      Stack: "Next js",
      progressPercentage: "85%"
    },
    {
      Stack: "React-redux / Redux Toolkit ",
      progressPercentage: "80%"
    },
    {
      Stack: "React-Saga",
      progressPercentage: "75%"
    },
    {
      Stack: "Socket-IO",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
  
    {
      role: "FrontEnd/React JS Developer",
      company: "Coders Globe",
      companylogo: require("./assets/images/Screenshot.png"),
      date: "Apr 2022 - Jun 2023",
      bgColor: "#2778A6",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Developing web apps using HTML, CSS, Material UI, JavaScript, React, and Next.js.",
        "Created user-friendly interfaces, increasing  customer engagement and satisfaction.",
        "Collaborated with the backend team to integrate APIs for smooth data flow and consistency."
      ]
    },
    {
      role: "FrontEnd Developer",
      company: "QMH TECH",
      companylogo: require("./assets/images/qmh.png"),
      date: "Jun 2023 - Present",
      bgColor: "#2B945E",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Led a team in developing web apps using HTML, CSS, Tailwind, JavaScript, React, and Next.js.",
        "Consistently delivered high-quality, well-structured code.",
        "Created user-friendly interfaces, increasing  customer engagement and satisfaction.",
        "Collaborated with the backend team to integrate APIs for smooth data flow and consistency."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/4xhub.png"),
      projectName: "4XHUB",
      class: "one",
      projectDesc:
        "4Xhub was founded with the mission of providing aggregated institutional Liquidity to cater to the diverse needs of traders.Our founders bring decades of experience in electronic trading. At 4Xhub we serve a broad clientele",
      url: "https://clientzone.4xhub.com/en/user/login",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://clientzone.4xhub.com/en/user/login"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/4xhubland.png"),
      projectName: "4XHUB Landing site",
      class: "two",
      projectDesc:
        "4XHUB EU Limited is a Cyprus based investment firm regulated by Cyprus Securities and Exchange Commission.",
        url: "https://4xhub.eu/",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://4xhub.eu/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/tamadres.png"),
      projectName: "TAMADRES",
      class: "three",
      projectDesc:
        "The Vision of the product is to have the concept of sharing knowledge at the location/house and create a hospitable community by having the customers visit out stores and buy Quality books",
      url: "http://www.tamadres.com/",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.tamadres.com/"
        }
      ]
    },
    {
      image: require("./assets/images/mydasma.png"),
      projectName: "MyDasma",
      class: "four",
      projectDesc:
        "The purpose of the MyDasma platform is to give every Albanian the opportunity and pleasure to organize his wedding and party, exactly as he wants and, precisely, from where he lives and works.",
          url: "http://www.mydasma.com/",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.mydasma.com/"
        }
      ]
    },
    {
      image: require("./assets/images/BMC.png"),
      projectName: "Britannia Minicab",
      class: "one",
      projectDesc:
        "Britannia Minicab Services serving exceptionally in the field of providing transportation as minicab providers to the passengers to take them from one place to another, it is our firm belief that you should be served with the best either in any kind of situation,",
        url: "http://www.britanniaminicab.co.uk/",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.britanniaminicab.co.uk/"
        }
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3174704165",
  email_address: "sajjad.ali.kayani@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
