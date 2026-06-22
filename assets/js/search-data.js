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
          description: "30 publications across 26 journals indexed in the WoS Core Collection.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "Updates and announcements.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "zij, a canon of deep learning optimization algorithms, and ongoing research projects in AI and machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/";
          },
        },{id: "news-started-a-master-s-in-computer-science-and-information-engineering-at-national-yunlin-university-of-science-and-technology-taiwan",
          title: 'Started a Master’s in Computer Science and Information Engineering at National Yunlin University...',
          description: "",
          section: "News",},{id: "news-published-in-chaos-solitons-amp-amp-fractals-a-hybrid-neural-computational-paradigm-for-complex-firing-patterns-and-excitability-transitions-in-fractional-hindmarsh-rose-neuronal-models",
          title: 'Published in Chaos, Solitons &amp;amp;amp; Fractals: a hybrid neural-computational paradigm for complex firing...',
          description: "",
          section: "News",},{id: "news-paper-on-stuxnet-virus-spread-in-air-gapped-critical-environments-accepted-at-applied-soft-computing-deep-learning-networks-for-nonlinear-delay-differential-systems",
          title: 'Paper on Stuxnet virus spread in air-gapped critical environments accepted at Applied Soft...',
          description: "",
          section: "News",},{id: "news-awarded-the-phi-tau-phi-scholastic-honor-membership-in-the-phi-tau-phi-scholastic-honor-society-of-the-republic-of-china-which-recognizes-the-top-2-of-graduate-master-s-students",
          title: 'Awarded the Phi Tau Phi Scholastic Honor, membership in the Phi Tau Phi...',
          description: "",
          section: "News",},{id: "news-selected-for-the-direct-phd-program-master-s-to-phd-at-national-yunlin-university-of-science-and-technology-taiwan",
          title: 'Selected for the Direct PhD program (Master’s to PhD) at National Yunlin University...',
          description: "",
          section: "News",},{id: "news-published-in-ieee-transactions-on-computational-biology-and-bioinformatics-stochastic-deterministic-modeling-of-immune-responses-and-tumor-evolution",
          title: 'Published in IEEE Transactions on Computational Biology and Bioinformatics: stochastic-deterministic modeling of immune...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-nonlinear-dynamics-stochastic-backpropagative-arx-neuroarchitectures-for-fractional-order-rabinovich-fabrikant-chaotic-attractors-congratulations-to-shahzaib-ahmed-hassan-and-syed-zoraiz-ali-sherazi",
          title: 'Paper accepted at Nonlinear Dynamics: stochastic backpropagative ARX neuroarchitectures for fractional-order Rabinovich-Fabrikant chaotic...',
          description: "",
          section: "News",},{id: "news-published-in-water-research-2026-neuro-computational-surrogates-for-aqueous-fractional-order-nekton-plankton-spatiotemporal-dynamics-the-group-s-second-paper-in-this-journal-congratulations-to-adil-sultan",
          title: 'Published in Water Research (2026): neuro-computational surrogates for aqueous fractional-order nekton-plankton spatiotemporal dynamics,...',
          description: "",
          section: "News",},{id: "news-congratulations-to-shehzada-taimur-shahzaib-ahmed-hassan-and-sannan-zia-abbasi-on-the-acceptance-of-their-paper-in-chaos-solitons-amp-amp-fractals-a-hybrid-neural-computational-paradigm-for-fractional-order-locally-active-memristive-neuronal-models",
          title: 'Congratulations to Shehzada Taimur, Shahzaib Ahmed Hassan, and Sannan Zia Abbasi on the...',
          description: "",
          section: "News",},{id: "news-congratulations-to-shahzaib-ahmed-hassan-on-the-acceptance-of-his-paper-on-intelligent-neural-surrogates-for-the-lorenz-lu-chen-system-in-the-international-journal-of-computer-mathematics",
          title: 'Congratulations to Shahzaib Ahmed Hassan on the acceptance of his paper on intelligent...',
          description: "",
          section: "News",},{id: "news-paper-on-fractional-delay-differential-malware-propagation-in-industrial-iot-systems-accepted-at-chaos-solitons-amp-amp-fractals-the-first-intelligent-neural-surrogate-for-this-class-of-models",
          title: 'Paper on fractional delay differential malware propagation in Industrial IoT systems accepted at...',
          description: "",
          section: "News",},{id: "news-crossed-the-200-citation-milestone-on-google-scholar-thanks-to-my-collaborators-and-readers",
          title: 'Crossed the 200+ citation milestone on Google Scholar. Thanks to my collaborators and...',
          description: "",
          section: "News",},{id: "news-released-zij-a-canon-of-deep-learning-optimization-algorithms-covering-740-methods-across-11-categories-with-100-implemented-as-a-pytorch-library-its-research-arm-develops-fractional-calculus-inspired-optimization-algorithms-see-the-companion-website-or-the-source-on-github",
          title: 'Released zij, a canon of deep learning optimization algorithms covering 740 methods across...',
          description: "",
          section: "News",},{id: "projects-isic-2024-slice-3d",
          title: 'ISIC-2024 SLICE-3D',
          description: "An efficiency-frontier, single-dataset, no-external-data study of skin-lesion classification on ISIC-2024 SLICE-3D.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/isic2024_tbp/";
            },},{id: "projects-zij",
          title: 'zij',
          description: "A canon of deep learning optimization algorithms. 740 methods across 11 categories, with 100+ implemented as a PyTorch library.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zij/";
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
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/muhammad-junaid-ali-asif-raja", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Muhammad-Junaid-Ali-Asif-Raja/", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/392/7487.html", "_blank");
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
