// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "27 publications across 23 WoS Core Collection indexed journals.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic CV of Muhammad Junaid Ali Asif Raja -- Machine Learning Researcher at National Yunlin University of Science and Technology.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-started-masters-in-computer-science-and-information-engineering-at-national-yunlin-university-of-science-and-technology-taiwan",
          title: 'Started Masters in Computer Science and Information Engineering at National Yunlin University of...',
          description: "",
          section: "News",},{id: "news-published-in-chaos-solitons-and-fractals-hybrid-neural-computational-paradigm-for-complex-firing-patterns-and-excitability-transitions-in-fractional-hindmarsh-rose-neuronal-models",
          title: 'Published in Chaos, Solitons and Fractals – hybrid neural-computational paradigm for complex firing...',
          description: "",
          section: "News",},{id: "news-paper-on-stuxnet-virus-spread-in-air-gapped-critical-environments-accepted-at-applied-soft-computing-deep-learning-networks-for-nonlinear-delay-differential-systems",
          title: 'Paper on Stuxnet virus spread in air-gapped critical environments accepted at Applied Soft...',
          description: "",
          section: "News",},{id: "news-awarded-the-phi-tau-phi-scholastic-honor-membership-in-the-phi-tau-phi-scholastic-honor-society-of-the-republic-of-china-recognizing-the-top-2-of-graduate-masters-students-for-scholastic-achievement",
          title: 'Awarded the Phi Tau Phi Scholastic Honor – membership in the Phi Tau...',
          description: "",
          section: "News",},{id: "news-selected-for-direct-phd-program-masters-to-phd-at-national-yunlin-university-of-science-and-technology-taiwan",
          title: 'Selected for Direct PhD program (Masters to PhD) at National Yunlin University of...',
          description: "",
          section: "News",},{id: "news-published-in-ieee-transactions-on-computational-biology-and-bioinformatics-stochastic-deterministic-modeling-of-immune-responses-and-tumor-evolution",
          title: 'Published in IEEE Transactions on Computational Biology and Bioinformatics – stochastic-deterministic modeling of...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-nonlinear-dynamics-stochastic-backpropagative-arx-neuroarchitectures-for-fractional-order-rabinovich-fabrikant-chaotic-attractors-congratulations-to-shahzaib-ahmed-hassan-and-syed-zoraiz-ali-sherazi",
          title: 'Paper accepted at Nonlinear Dynamics – stochastic backpropagative ARX neuroarchitectures for fractional-order Rabinovich-Fabrikant...',
          description: "",
          section: "News",},{id: "news-new-paper-published-in-water-research-2026-neuro-computational-surrogates-for-aqueous-fractional-order-nekton-plankton-spatiotemporal-dynamics-our-second-publication-in-this-journal-congratulations-to-adil-sultan",
          title: 'New paper published in Water Research (2026) – neuro-computational surrogates for aqueous fractional-order...',
          description: "",
          section: "News",},{id: "news-congratulations-to-shehzada-taimur-shahzaib-ahmed-hassan-and-sannan-zia-abbasi-on-the-acceptance-of-their-paper-in-chaos-solitons-and-fractals-hybrid-neural-computational-paradigm-for-fractional-order-locally-active-memristive-neuronal-models",
          title: 'Congratulations to Shehzada Taimur, Shahzaib Ahmed Hassan, and Sannan Zia Abbasi on the...',
          description: "",
          section: "News",},{id: "news-congratulations-to-shahzaib-ahmed-hassan-on-the-acceptance-of-his-paper-on-intelligent-neural-surrogates-for-the-lorenz-lu-chen-system-in-the-international-journal-of-computer-mathematics",
          title: 'Congratulations to Shahzaib Ahmed Hassan on the acceptance of his paper on intelligent...',
          description: "",
          section: "News",},{id: "projects-cf-tf",
          title: 'cf-tf',
          description: "Collaborative filtering experiments on MovieLens datasets for recommendation systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cf_tf/";
            },},{id: "projects-daily-research-paper-recommender",
          title: 'daily-research-paper-recommender',
          description: "Personalized daily research paper recommender system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/daily_paper_recommender/";
            },},{id: "projects-guava-classification",
          title: 'guava-classification',
          description: "Guava disease classification using DenseNet-Reloaded and ADOPT optimizer, achieving 99.73% accuracy.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/guava_classification/";
            },},{id: "projects-mnist-sopcnn",
          title: 'MNIST-SOPCNN',
          description: "Implementation of Self-Organizing Polynomial Convolutional Neural Networks on MNIST.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mnist_sopcnn/";
            },},{id: "projects-mobilenetv4",
          title: 'MobileNetV4',
          description: "PyTorch replication of the MobileNetV4 architecture for efficient mobile inference.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mobilenetv4/";
            },},{id: "projects-optim",
          title: 'optim',
          description: "Exploration and implementation of state-of-the-art deep learning optimization algorithms in PyTorch.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/optim/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%75%68%61%6D%6D%61%64%6A%75%6E%61%69%64%61%6C%69%61%73%69%66%72%61%6A%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/junaidaliop", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=9VTFIJcAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0008-9249-9983", "_blank");
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
