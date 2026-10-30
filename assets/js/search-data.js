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
          description: "Research publications grouped by direction",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Academic curriculum vitae of Yiwei Chen",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-prsnet-has-been-published-on-optics-express",
          title: 'PRSNet has been published on Optics Express.',
          description: "",
          section: "News",},{id: "news-dda-net-has-been-published-on-physical-review-applied",
          title: 'DDA-Net has been published on Physical Review Applied.',
          description: "",
          section: "News",},{id: "news-compact-upconversion-single-photon-imaging-system-has-been-published-on-ieee-transactions-on-instrumentation-and-measurement",
          title: 'Compact Upconversion Single-Photon Imaging System has been published on IEEE Transactions on Instrumentation...',
          description: "",
          section: "News",},{id: "news-spisr-rei-has-been-published-on-international-conference-on-acoustics-speech-and-signal-processing-icassp",
          title: 'SPISR-REI has been published on International Conference on Acoustics, Speech and Signal Processing...',
          description: "",
          section: "News",},{id: "news-r2d2-for-single-coil-non-cartesian-mri-has-been-published-on-european-signal-processing-conference-eusipco",
          title: 'R2D2 for single-coil non Cartesian MRI has been published on European Signal Processing...',
          description: "",
          section: "News",},{id: "news-our-r2d2-mri-preprint-is-available-it-explores-fast-scalable-reconstruction-from-highly-accelerated-non-cartesian-mri-measurements",
          title: 'Our R2D2 MRI preprint is available. It explores fast, scalable reconstruction from highly...',
          description: "",
          section: "News",},{id: "news-our-paper-on-quantum-inspired-multimodal-fusion-appeared-in-neurocomputing-it-models-interactions-across-data-modalities-for-sentiment-analysis",
          title: 'Our paper on quantum-inspired multimodal fusion appeared in Neurocomputing. It models interactions across...',
          description: "",
          section: "News",},{id: "news-our-industrial-control-loop-study-appeared-at-the-china-automation-congress-it-investigates-transformer-based-detection-of-oscillations-in-process-control-signals",
          title: 'Our industrial control-loop study appeared at the China Automation Congress. It investigates transformer-based...',
          description: "",
          section: "News",},{id: "news-our-paper-on-quantum-inspired-neural-networks-appeared-in-engineering-applications-of-artificial-intelligence-it-uses-stochastic-dynamics-to-improve-multimodal-sentiment-analysis-and-sarcasm-detection",
          title: 'Our paper on quantum-inspired neural networks appeared in Engineering Applications of Artificial Intelligence....',
          description: "",
          section: "News",},{id: "news-at-the-2026-ifac-world-congress-our-work-on-semi-supervised-industrial-soft-sensing-and-a-quantum-inspired-soft-sensing-framework-was-presented",
          title: 'At the 2026 IFAC World Congress, our work on semi-supervised industrial soft sensing...',
          description: "",
          section: "News",},{id: "news-two-new-industrial-ai-studies-are-out-visual-frequency-fusion-for-oscillation-monitoring-in-engineering-applications-of-artificial-intelligence-and-wavelet-fusion-for-particle-image-analysis-in-expert-systems-with-applications",
          title: 'Two new industrial AI studies are out: visual-frequency fusion for oscillation monitoring in...',
          description: "",
          section: "News",},{id: "news-our-sensor-aware-single-photon-imaging-study-appeared-in-optics-express-it-brings-sensing-physics-into-deep-learning-based-image-reconstruction",
          title: 'Our sensor-aware single-photon imaging study appeared in Optics Express. It brings sensing physics...',
          description: "",
          section: "News",},{id: "news-two-papers-in-pattern-recognition-explore-agentic-image-restoration-and-trustworthy-super-resolution",
          title: 'Two papers in Pattern Recognition explore agentic image restoration and trustworthy super-resolution.',
          description: "",
          section: "News",},{id: "news-our-paper-on-hamiltonian-induced-error-channel-control-was-published-in-physical-review-a-it-studies-how-quantum-state-transfer-errors-can-be-shaped-for-controlled-convergence",
          title: 'Our paper on Hamiltonian-induced error-channel control was published in Physical Review A. It...',
          description: "",
          section: "News",},{id: "projects-scalable-non-cartesian-mri",
          title: 'Scalable Non-Cartesian MRI',
          description: "Deep reconstruction methods for efficient magnetic resonance imaging.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-single-photon-image-super-resolution",
          title: 'Single-Photon Image Super-Resolution',
          description: "Self-supervised learning for photon-efficient image enhancement.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-compact-3d-single-photon-imaging",
          title: 'Compact 3D Single-Photon Imaging',
          description: "Full-range 3D imaging with compact upconversion hardware and algorithms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-photon-efficient-domain-adaptation",
          title: 'Photon-Efficient Domain Adaptation',
          description: "Robust learning across simulated and real low-photon imaging domains.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-dynamic-single-photon-3d-imaging",
          title: 'Dynamic Single-Photon 3D Imaging',
          description: "Neural reconstruction for sparse and dynamic photon-limited scenes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-robust-photon-efficient-imaging",
          title: 'Robust Photon-Efficient Imaging',
          description: "Pixel-wise residual learning for noisy and low-light sensing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-quantum-inspired-tensor-learning",
          title: 'Quantum-Inspired Tensor Learning',
          description: "Tensor-network models for compact representation and correlation learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-quantum-language-models",
          title: 'Quantum Language Models',
          description: "Entanglement-inspired representations for question answering.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-quantum-entanglement-detection",
          title: 'Quantum Entanglement Detection',
          description: "Unsupervised learning methods for quantum state analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
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
