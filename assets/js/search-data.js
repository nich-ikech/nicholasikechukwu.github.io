// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications categorized by topic and ordered in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "An overview of my teaching involvement as a Teaching Assistant and Teaching Fellow, focused on supporting learning and engagement in technical courses",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Here, you&#39;ll find a comprehensive record of my academic and professional trajectory, from my early education and work in industry to my current research in visual perception. My CV reflects both the breadth of skills I&#39;ve developed and the depth of focus I&#39;ve cultivated in the field of Computer Vision and Machine learning",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A selection of industry projects showcasing my experience as a software engineer, where I worked on building and deploying real-world software systems across multiple domains",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-co-authored-my-second-paper-read-online-here-arxiv",
          title: 'Co-authored my second paper! Read (online) here: ArXiv:',
          description: "",
          section: "News",},{id: "news-completed-two-semesters-as-a-teaching-fellow-for-cs440-ai-course",
          title: 'Completed two semesters as a Teaching Fellow for CS440 (AI Course)',
          description: "",
          section: "News",},{id: "news-presented-my-first-talk-at-the-air-seminar-at-bu",
          title: 'Presented my first talk at the AIR Seminar at BU!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "projects-tech1m",
          title: 'Tech1M',
          description: "Recruitment intelligence platform leveraging AI and data analytics to simplify global talent acquisition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-reyatt-recovery",
          title: 'Reyatt Recovery',
          description: "With the Reyatt Recovery App, you can manage your vehicle logistics in one place. Vehicle logistics on the go using your mobile device",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-royal-presgtige-rewards",
          title: 'Royal Presgtige Rewards',
          description: "Comprehensive tools for using and maintaining their cookware, including recipe videos",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "teachings-artificial-intelligence",
          title: 'Artificial Intelligence',
          description: "Undergraduate Prerequisites (CASCS112 &amp; CASCS132) - Introduction to computer systems that exhibit intelligent behavior, in particular, perceptual and robotic systems. Topics include human computer interfaces, computer vision, robotics, game playing, pattern recognition, knowledge representation, planning.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/intro_to_ai_fall_2025/";
            },},{id: "teachings-artificial-intelligence",
          title: 'Artificial Intelligence',
          description: "Undergraduate Prerequisites (CASCS112 &amp; CASCS132) - Introduction to computer systems that exhibit intelligent behavior, in particular, perceptual and robotic systems. Topics include human computer interfaces, computer vision, robotics, game playing, pattern recognition, knowledge representation, planning.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/intro_to_ai_spring_2025/";
            },},{id: "teachings-artificial-intelligence",
          title: 'Artificial Intelligence',
          description: "Undergraduate Prerequisites (CASCS112 &amp; CASCS132) - Introduction to computer systems that exhibit intelligent behavior, in particular, perceptual and robotic systems. Topics include human computer interfaces, computer vision, robotics, game playing, pattern recognition, knowledge representation, planning.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/intro_to_ai_spring_2026/";
            },},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=tv53yh0AAAAJ", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%63%68%6F%6C%61%73@%62%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/nicholas_ikechukwu_cv_2026.pdf", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/nick-ikech", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/nicholas-ikechukwu-a627b91a9", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/Nick_Ikay", "_blank");
        },
      },{
        id: 'social-BU CS Page',
        title: 'Bu cs page',
        section: 'Socials',
        handler: () => {
          window.open("https://www.bu.edu/cs/profiles/nicholas-ikechukwu/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
