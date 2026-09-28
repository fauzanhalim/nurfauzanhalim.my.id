import React, { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);

  const profile = {
    name: "Nur Fauzan Halim, S.Kom",
    role: "Software Programmer",
    location: "Bekasi, ID",
    email: "nurfauzanhalim@gmail.com",
    linkedin: "https://linkedin.com",
    about: "Programmer berpengalaman di BPKD DKI Jakarta yang berfokus pada pengembangan arsitektur sistem, efisiensi database, dan pembuatan aplikasi web enterprise yang aman dan andal. Lulusan S1 Teknik Informatika Universitas Komputer Indonesia dengan sertifikasi Oracle Academy dan BNSP Junior Web Programmer."
  };

  const skills = {
    languages: { icon: "💻", items: ["JavaScript", "HTML/CSS", "PHP", "GoLang", "SQL"] },
    frameworks: { icon: "⚙️", items: ["Laravel", "Bootstrap", "Vue.js", "CodeIgniter"] },
    databases: { icon: "🗄️", items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle Database"] },
    tools: { icon: "🔧", items: ["Git", "Figma", "Draw.io", "Jira", "Trello", "VsCode", "GTmetrix"] }
  };

  const experiences = [
    {
      role: "Software Programmer",
      company: "BPKD DKI Jakarta",
      period: "Jan 2024 – Present",
      location: "Jakarta, ID",
      current: true,
      projects: [
        "Dashboard Monitoring SPB (2026 – Sekarang)",
        "Website BPKD DKI Jakarta (Sep 2024 – Sekarang)",
        "Sistem Surat Keterangan Penghentian Pembayaran (Jan 2024 – Sekarang)",
        "Sistem Informasi Manajemen Surat (Jan 2024 – Des 2025)",
        "Sistem Deposito Jakarta Online (Sep 2024 – Jun 2025)",
        "Sistem Penarikan Pinjaman & Hibah Proyek MRT Jakarta (Jul 2024 – Jun 2025)",
        "Sistem Informasi Pertanggungjawaban Belanja Daerah (Jun 2024 – Sekarang)"
      ],
      tasks: [
        "Mengembangkan fitur-fitur sistem sesuai kebutuhan pengguna",
        "Memahami arsitektur sistem dan mengimplementasikan logika bisnis",
        "Mengidentifikasi dan memperbaiki bug dalam aplikasi",
        "Menyusun manual pengguna untuk sistem yang dikembangkan",
        "Menganalisis kebutuhan sistem berdasarkan dokumen spesifikasi"
      ]
    },
    {
      role: "Frontend Developer",
      company: "PT. Telkom Indonesia",
      period: "Jan 2022 – Jun 2023",
      location: "Indonesia",
      current: false,
      projects: [
        "Portal Website Tamaska Sistem (Jan – Jun 2023)",
        "Web Cockpit Tamaska Sistem (Jan – Apr 2022)"
      ],
      tasks: [
        "Merancang desain web sesuai antarmuka pengguna",
        "Meningkatkan kecepatan situs web",
        "Melaksanakan pengujian fungsional situs web dengan GTmetrix",
        "Mengembangkan situs web menggunakan teknologi yang ditentukan"
      ]
    }
  ];

  const projects = [
    {
      title: "Aplikasi SMART Planning & Budgeting (SPB)",
      date: "Mar 2026 – Sekarang",
      description: "Portal Aplikasi SMART Planning & Budgeting Provinsi DKI Jakarta. Menyajikan data dan analisis APBD secara terbuka dengan grafik analisa interaktif.",
      tags: ["PHP", "JavaScript", "Laravel", "Oracle Database", "Bootstrap"],
      emoji: "📊",
      link: "https://apbd.jakarta.go.id/",
      featured: true
    },
    {
      title: "Sistem Penarikan Pinjaman & Hibah Proyek MRT Jakarta",
      date: "Jul 2024 – Jun 2025",
      description: "Sistem manajemen pengajuan dana digital dengan alur kerja validasi bertingkat, formulir upload dokumen aman, dan dashboard monitoring real-time.",
      tags: ["PHP", "JavaScript", "Laravel", "HTML", "CSS"],
      emoji: "🚇",
      link: "https://eosbpkd.jakarta.go.id/simtag"
    },
    {
      title: "Deposito Jakarta Online Sistem",
      date: "Sep 2024 – Jun 2025",
      description: "Platform pengelolaan akun deposito online aman yang mengotomatisasi kalkulasi bunga berdasarkan jangka waktu dan nominal transaksi.",
      tags: ["PHP", "JavaScript", "Laravel", "Oracle Database", "CSS"],
      emoji: "💰",
      link: "https://eosbpkd.jakarta.go.id/djos"
    },
    {
      title: "Sistem Informasi Pertanggungjawaban Belanja Daerah",
      date: "Jun 2024 – Sekarang",
      description: "Aplikasi internal berskala besar untuk mencatat log histori transaksi, memantau alokasi anggaran, dan laporan wawasan real-time.",
      tags: ["PHP", "JavaScript", "Laravel", "Oracle Database", "Bootstrap"],
      emoji: "📈",
      link: "https://eosbpkd.jakarta.go.id/sibeda"
    },
    {
      title: "Sistem Surat Keterangan Penghentian Pembayaran",
      date: "Jan 2024 – Sekarang",
      description: "Sistem digital untuk pengelolaan SKPP dengan alur kerja terintegrasi dan penyimpanan dokumen digital.",
      tags: ["PHP", "JavaScript", "Laravel", "Oracle Database"],
      emoji: "📄",
      link: "https://eosbpkd.jakarta.go.id/skpp"
    },
    {
      title: "Website BPKD DKI Jakarta",
      date: "Sep 2024 – Sekarang",
      description: "Pengembangan dan pemeliharaan website resmi BPKD DKI Jakarta dengan fitur informasi publik dan layanan digital.",
      tags: ["PHP", "JavaScript", "Laravel", "HTML", "CSS", "Bootstrap"],
      emoji: "🌐",
      link: "https://bpkd.jakarta.go.id/"
    }
  ];

  const certifications = [
    {
      name: "Oracle Academy - Database Programming With SQL",
      issuer: "Oracle Academy",
      date: "11 Juli 2024",
      icon: "🗄️"
    },
    {
      name: "Sertifikat Kompetensi Junior Web Programmer",
      issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
      date: "24 Maret 2023",
      icon: "🏆"
    },
    {
      name: "Awareness - Information Security Management Systems (ISO 27001:2022)",
      issuer: "Certified Training",
      date: "03 Oktober 2024",
      icon: "🔒"
    }
  ];

  const education = {
    degree: "S1 – Teknik Informatika",
    university: "Universitas Komputer Indonesia",
    location: "Bandung, ID"
  };

  // Typing effect
  useEffect(() => {
    const roles = ["Software Programmer", "Frontend Developer", "Full Stack Engineer", "Problem Solver"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        setTypedText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypedText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    };

    const timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll progress + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ['about', 'experience', 'skills', 'projects', 'certifications'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // Custom cursor
  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    const handleHover = (e) => {
      if (e.target.closest('a, button, .hoverable')) {
        setCursorHover(true);
      } else {
        setCursorHover(false);
      }
    };
    window.addEventListener('mouseover', handleHover);
    return () => window.removeEventListener('mouseover', handleHover);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Loading Screen */}
      {loading && (
        <div style={styles.loader}>
          <div style={styles.loaderContent}>
            <div style={styles.loaderLogo}>NF</div>
            <div style={styles.loaderBar}>
              <div style={styles.loaderBarFill}></div>
            </div>
            <p style={styles.loaderText}>Loading Portfolio...</p>
          </div>
        </div>
      )}

      {/* Custom Cursor */}
      <div
        style={{
          ...styles.cursor,
          left: cursorPos.x,
          top: cursorPos.y,
          transform: cursorHover
            ? 'translate(-50%, -50%) scale(2.5)'
            : 'translate(-50%, -50%) scale(1)',
          opacity: cursorHover ? 0.5 : 0.8,
        }}
      />
      <div
        style={{
          ...styles.cursorDot,
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />

      <div style={{ ...styles.container, ...(darkMode ? styles.containerDark : {}) }}>
        {/* Scroll Progress */}
        <div style={{ ...styles.scrollProgress, width: `${scrollProgress}%` }} />

        {/* Background Blobs */}
        <div style={styles.bgBlob1}></div>
        <div style={styles.bgBlob2}></div>
        <div style={styles.bgBlob3}></div>
        <div style={styles.gridPattern}></div>

        {/* Navbar */}
        <nav
          style={{
            ...styles.navbar,
            ...(scrolled
              ? darkMode
                ? styles.navbarScrolledDark
                : styles.navbarScrolled
              : {}),
          }}
        >
          <div style={styles.navContent}>
            <div style={styles.logo} onClick={() => scrollToSection('about')}>
              <span style={styles.logoIcon}>NF</span>
              <span style={{ ...styles.logoText, ...(darkMode ? styles.textLight : {}) }}>
                Nur Fauzan
              </span>
            </div>

            <div style={styles.desktopNav} className="desktopNav">
              {['about', 'experience', 'skills', 'projects', 'certifications'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  style={{
                    ...styles.navLink,
                    ...(darkMode ? styles.navLinkDark : {}),
                    ...(activeSection === item ? styles.navLinkActive : {}),
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>

            <div style={styles.navActions}>
              <button
                style={{
                  ...styles.themeToggle,
                  ...(darkMode ? styles.themeToggleDark : {}),
                }}
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>

              <button
                style={styles.mobileMenuBtn}
                className="mobileMenuBtn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span style={styles.menuLine}></span>
                <span style={styles.menuLine}></span>
                <span style={styles.menuLine}></span>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div
              style={{
                ...styles.mobileMenu,
                ...(darkMode ? styles.mobileMenuDark : {}),
              }}
              className="mobileMenu"
            >
              {['about', 'experience', 'skills', 'projects', 'certifications'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  style={{
                    ...styles.mobileNavLink,
                    ...(darkMode ? styles.textLight : {}),
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <header id="about" style={styles.heroSection} className="heroSection">
          <div style={styles.heroContent} className="heroContent">
            <div style={styles.heroBadge}>
              <span style={styles.badgeDot}></span>
              Available for Projects
            </div>

            <h1 style={{ ...styles.heroTitle, ...(darkMode ? styles.textLight : {}) }}>
              Hi, I'm{' '}
              <span style={styles.gradientText}>Nur Fauzan Halim</span>
              <span style={styles.waveEmoji}>👋</span>
            </h1>

            <div style={styles.heroRoleContainer}>
              <h2
                style={{
                  ...styles.heroSubtitle,
                  ...(darkMode ? styles.textLightMuted : {}),
                }}
              >
                <span style={styles.typingText}>{typedText}</span>
                <span style={styles.typingCursor}>|</span>
              </h2>
            </div>

            <div style={styles.heroMeta}>
              <span style={styles.heroMetaItem}>📍 {profile.location}</span>
              <span style={styles.heroMetaDivider}></span>
              <span style={styles.heroMetaItem}>💼 BPKD DKI Jakarta</span>
            </div>

            <p
              style={{
                ...styles.heroText,
                ...(darkMode ? styles.textLightMuted : {}),
              }}
            >
              {profile.about}
            </p>

            <div style={styles.heroStats}>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>3+</span>
                <span
                  style={{
                    ...styles.statLabel,
                    ...(darkMode ? styles.textLightMuted : {}),
                  }}
                >
                  Years Experience
                </span>
              </div>
              <div style={styles.statDivider}></div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>7+</span>
                <span
                  style={{
                    ...styles.statLabel,
                    ...(darkMode ? styles.textLightMuted : {}),
                  }}
                >
                  Projects Completed
                </span>
              </div>
              <div style={styles.statDivider}></div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>3</span>
                <span
                  style={{
                    ...styles.statLabel,
                    ...(darkMode ? styles.textLightMuted : {}),
                  }}
                >
                  Certifications
                </span>
              </div>
            </div>

            <div style={styles.ctaContainer}>
              <a href={`mailto:${profile.email}`} style={styles.primaryBtn} className="primaryBtn hoverable">
                <span>✉️</span> Contact Me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  ...styles.secondaryBtn,
                  ...(darkMode ? styles.secondaryBtnDark : {}),
                }}
                className="secondaryBtn hoverable"
              >
                <span>💼</span> LinkedIn
              </a>
            </div>
          </div>

          <div style={styles.heroVisual} className="heroVisual">
            <div style={styles.profileCardWrapper} className="hoverable">
              <div
                style={{
                  ...styles.profileCard,
                  ...(darkMode ? styles.profileCardDark : {}),
                }}
                className="profileCard tilt"
              >
                <div style={styles.profileAvatar}>
                  <span style={styles.avatarText}>NF</span>
                  <div style={styles.avatarRing}></div>
                </div>
                <h3
                  style={{
                    ...styles.profileCardName,
                    ...(darkMode ? styles.textLight : {}),
                  }}
                >
                  Nur Fauzan Halim
                </h3>
                <p style={styles.profileCardRole}>{profile.role}</p>
                <div
                  style={{
                    ...styles.profileCardDivider,
                    ...(darkMode ? styles.dividerDark : {}),
                  }}
                ></div>
                <div style={styles.profileCardInfo}>
                  <div style={styles.profileCardInfoItem}>
                    <span style={styles.infoIcon}>🎓</span>
                    <span style={darkMode ? styles.textLightMuted : {}}>{education.degree}</span>
                  </div>
                  <div style={styles.profileCardInfoItem}>
                    <span style={styles.infoIcon}>🏢</span>
                    <span style={darkMode ? styles.textLightMuted : {}}>BPKD DKI Jakarta</span>
                  </div>
                  <div style={styles.profileCardInfoItem}>
                    <span style={styles.infoIcon}>📍</span>
                    <span style={darkMode ? styles.textLightMuted : {}}>{profile.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <span style={{ ...styles.floatingEmoji, top: '5%', left: '0%', animationDelay: '0s' }}>💻</span>
            <span style={{ ...styles.floatingEmoji, top: '15%', right: '0%', animationDelay: '1s' }}>🚀</span>
            <span style={{ ...styles.floatingEmoji, bottom: '15%', left: '0%', animationDelay: '2s' }}>⚡</span>
            <span style={{ ...styles.floatingEmoji, bottom: '25%', right: '5%', animationDelay: '1.5s' }}>✨</span>
          </div>
        </header>

        {/* Experience Section */}
        <section id="experience" style={styles.section}>
          <div style={styles.sectionHeader} className="animate-on-scroll">
            <span style={styles.sectionTag}>💼 Career</span>
            <h2
              style={{
                ...styles.sectionTitle,
                ...(darkMode ? styles.textLight : {}),
              }}
            >
              Professional Experience
            </h2>
            <p
              style={{
                ...styles.sectionDesc,
                ...(darkMode ? styles.textLightMuted : {}),
              }}
            >
              Perjalanan karir dan kontribusi profesional saya
            </p>
          </div>

          <div style={styles.timeline}>
            <div style={styles.timelineLine}></div>
            {experiences.map((exp, idx) => (
              <div key={idx} style={styles.timelineItem}>
                <div
                  style={{
                    ...styles.timelineDot,
                    ...(exp.current ? styles.timelineDotCurrent : {}),
                  }}
                >
                  {exp.current && <div style={styles.timelineDotPulse}></div>}
                </div>
                <div
                  style={{
                    ...styles.glassCard,
                    ...(darkMode ? styles.glassCardDark : {}),
                  }}
                  className="animate-on-scroll expCard"
                >
                  <div style={styles.cardHeader} className="cardHeader">
                    <div style={styles.cardHeaderLeft}>
                      <h3
                        style={{
                          ...styles.cardTitle,
                          ...(darkMode ? styles.textLight : {}),
                        }}
                      >
                        {exp.role} <span style={styles.accentText}>@ {exp.company}</span>
                      </h3>
                      <span
                        style={{
                          ...styles.locationText,
                          ...(darkMode ? styles.textLightMuted : {}),
                        }}
                      >
                        📍 {exp.location}
                      </span>
                    </div>
                    <span
                      style={{
                        ...styles.dateBadge,
                        ...(exp.current ? styles.dateBadgeCurrent : {}),
                      }}
                    >
                      {exp.current && <span style={styles.liveDot}></span>}
                      {exp.period}
                    </span>
                  </div>

                  <div style={styles.projectList}>
                    <h4
                      style={{
                        ...styles.projectListTitle,
                        ...(darkMode ? styles.textLightMuted : {}),
                      }}
                    >
                      🎯 Proyek yang Dikerjakan:
                    </h4>
                    <div style={styles.projectChips}>
                      {exp.projects.map((proj, i) => (
                        <span
                          key={i}
                          style={{
                            ...styles.projectChip,
                            ...(darkMode ? styles.projectChipDark : {}),
                          }}
                          className="hoverable"
                        >
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h4
                    style={{
                      ...styles.tasksTitle,
                      ...(darkMode ? styles.textLightMuted : {}),
                    }}
                  >
                    ⚡ Tanggung Jawab:
                  </h4>
                  <ul style={styles.bulletList}>
                    {exp.tasks.map((task, i) => (
                      <li
                        key={i}
                        style={{
                          ...styles.bulletItem,
                          ...(darkMode ? styles.textLightMuted : {}),
                        }}
                      >
                        <span style={styles.bulletIcon}>▹</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={styles.section}>
          <div style={styles.sectionHeader} className="animate-on-scroll">
            <span style={styles.sectionTag}>⚡ Expertise</span>
            <h2
              style={{
                ...styles.sectionTitle,
                ...(darkMode ? styles.textLight : {}),
              }}
            >
              Technical Skills
            </h2>
            <p
              style={{
                ...styles.sectionDesc,
                ...(darkMode ? styles.textLightMuted : {}),
              }}
            >
              Teknologi dan tools yang saya kuasai
            </p>
          </div>

          <div style={styles.skillsGrid} className="skillsGrid">
            {Object.entries(skills).map(([category, data]) => (
              <div
                key={category}
                style={{
                  ...styles.skillCard,
                  ...(darkMode ? styles.skillCardDark : {}),
                }}
                className="animate-on-scroll skillCard hoverable"
              >
                <div style={styles.skillCardHeader}>
                  <span style={styles.skillIconWrapper}>{data.icon}</span>
                  <h3
                    style={{
                      ...styles.skillCategoryTitle,
                      ...(darkMode ? styles.textLight : {}),
                    }}
                  >
                    {category.toUpperCase()}
                  </h3>
                </div>
                <div style={styles.tagContainer}>
                  {data.items.map((item, i) => (
                    <span
                      key={i}
                      style={{
                        ...styles.skillTag,
                        ...(darkMode ? styles.skillTagDark : {}),
                      }}
                      className="skillTag"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={styles.section}>
          <div style={styles.sectionHeader} className="animate-on-scroll">
            <span style={styles.sectionTag}>🚀 Portfolio</span>
            <h2
              style={{
                ...styles.sectionTitle,
                ...(darkMode ? styles.textLight : {}),
              }}
            >
              Featured Projects
            </h2>
            <p
              style={{
                ...styles.sectionDesc,
                ...(darkMode ? styles.textLightMuted : {}),
              }}
            >
              Klik project untuk melihat langsung ke website-nya
            </p>
          </div>

          <div style={styles.projectGrid} className="projectGrid">
            {projects.map((proj, idx) => (
              <a
                key={idx}
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                style={styles.projectCardLink}
                className="animate-on-scroll hoverable"
              >
                <div
                  style={{
                    ...styles.projectCard,
                    ...(darkMode ? styles.projectCardDark : {}),
                    ...(proj.featured ? styles.projectCardFeatured : {}),
                  }}
                  className="projectCard"
                >
                  {proj.featured && <div style={styles.featuredBadge}>⭐ Featured</div>}
                  <div style={styles.projectEmoji} className="projectEmoji">
                    {proj.emoji}
                  </div>
                  <div style={styles.projectHeader}>
                    <span style={styles.projectDate}>{proj.date}</span>
                  </div>
                  <h3
                    style={{
                      ...styles.projectTitle,
                      ...(darkMode ? styles.textLight : {}),
                    }}
                  >
                    {proj.title}
                  </h3>
                  <p
                    style={{
                      ...styles.projectDesc,
                      ...(darkMode ? styles.textLightMuted : {}),
                    }}
                  >
                    {proj.description}
                  </p>
                  <div style={styles.projectTags}>
                    {proj.tags.map((tag, i) => (
                      <span key={i} style={styles.projTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={styles.projectLinkHint}>
                    Kunjungi Project <span style={styles.arrowIcon}>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" style={styles.section}>
          <div style={styles.sectionHeader} className="animate-on-scroll">
            <span style={styles.sectionTag}>🏅 Credentials</span>
            <h2
              style={{
                ...styles.sectionTitle,
                ...(darkMode ? styles.textLight : {}),
              }}
            >
              Certifications & Education
            </h2>
            <p
              style={{
                ...styles.sectionDesc,
                ...(darkMode ? styles.textLightMuted : {}),
              }}
            >
              Sertifikasi dan latar belakang pendidikan
            </p>
          </div>

          <div style={styles.certGrid} className="certGrid">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.certCard,
                  ...(darkMode ? styles.certCardDark : {}),
                }}
                className="animate-on-scroll certCard hoverable"
              >
                <div style={styles.certIcon} className="certIcon">
                  {cert.icon}
                </div>
                <h3
                  style={{
                    ...styles.certName,
                    ...(darkMode ? styles.textLight : {}),
                  }}
                >
                  {cert.name}
                </h3>
                <p
                  style={{
                    ...styles.certIssuer,
                    ...(darkMode ? styles.textLightMuted : {}),
                  }}
                >
                  {cert.issuer}
                </p>
                <span style={styles.certDate}>{cert.date}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              ...styles.educationCard,
              ...(darkMode ? styles.educationCardDark : {}),
            }}
            className="animate-on-scroll hoverable"
          >
            <div style={styles.eduIcon}>🎓</div>
            <div style={styles.eduContent}>
              <h3
                style={{
                  ...styles.eduDegree,
                  ...(darkMode ? styles.textLight : {}),
                }}
              >
                {education.degree}
              </h3>
              <p
                style={{
                  ...styles.eduUniversity,
                  ...(darkMode ? styles.textLightMuted : {}),
                }}
              >
                {education.university}
              </p>
              <p style={styles.eduLocation}>📍 {education.location}</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={styles.contactSection}>
          <div style={styles.contactContent} className="contactContent animate-on-scroll">
            <div style={styles.contactGlow}></div>
            <h2 style={styles.contactTitle}>Let's Work Together 🤝</h2>
            <p style={styles.contactText}>
              Saya terbuka untuk peluang baru, kolaborasi proyek, atau sekadar berdiskusi tentang teknologi.
            </p>
            <div style={styles.contactButtons}>
              <a
                href={`mailto:${profile.email}`}
                style={styles.primaryBtnWhite}
                className="primaryBtnWhite hoverable"
              >
                <span>✉️</span> {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                style={styles.secondaryBtnWhite}
                className="secondaryBtnWhite hoverable"
              >
                <span>💼</span> LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            ...styles.footer,
            ...(darkMode ? styles.footerDark : {}),
          }}
        >
          <div style={styles.footerContent}>
            <div style={styles.footerLogo}>
              <span style={styles.logoIcon}>NF</span>
              <span
                style={{
                  ...styles.logoText,
                  ...(darkMode ? styles.textLight : {}),
                }}
              >
                Nur Fauzan Halim
              </span>
            </div>
            <p
              style={{
                ...styles.footerText,
                ...(darkMode ? styles.textLightMuted : {}),
              }}
            >
              &copy; {new Date().getFullYear()} {profile.name}. Built with React ❤️
            </p>
            <p style={styles.footerSubtext}>
              {profile.location} | {profile.email}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

// ==================== STYLES ====================
const styles = {
  // Loader
  loader: {
    position: 'fixed',
    inset: 0,
    backgroundColor: '#0f172a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    animation: 'fadeOut 0.5s ease 1.5s forwards',
  },
  loaderContent: {
    textAlign: 'center',
  },
  loaderLogo: {
    width: '80px',
    height: '80px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #6366f1, #ec4899)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.75rem',
    fontWeight: 800,
    color: '#fff',
    margin: '0 auto 1.5rem',
    animation: 'pulseGlow 1.5s ease-in-out infinite',
  },
  loaderBar: {
    width: '200px',
    height: '4px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '9999px',
    overflow: 'hidden',
    margin: '0 auto 1rem',
  },
  loaderBarFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #6366f1, #ec4899)',
    borderRadius: '9999px',
    animation: 'loadBar 1.5s ease forwards',
  },
  loaderText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.85rem',
    letterSpacing: '0.1em',
  },

  // Custom Cursor
  cursor: {
    position: 'fixed',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: '2px solid #6366f1',
    pointerEvents: 'none',
    zIndex: 9998,
    transition: 'transform 0.15s ease, opacity 0.3s ease',
    mixBlendMode: 'difference',
  },
  cursorDot: {
    position: 'fixed',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#6366f1',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
  },

  // Container
  container: {
    backgroundColor: '#fafbff',
    color: '#1e293b',
    fontFamily: '"Inter", "Segoe UI", system-ui, -apple-system, sans-serif',
    minHeight: '100vh',
    position: 'relative',
    overflowX: 'hidden',
    width: '100%',
    transition: 'background-color 0.4s ease, color 0.4s ease',
  },
  containerDark: {
    backgroundColor: '#0a0a0f',
    color: '#e2e8f0',
  },

  // Scroll Progress
  scrollProgress: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #6366f1, #ec4899, #f59e0b)',
    zIndex: 1001,
    transition: 'width 0.1s ease',
  },

  // Background
  bgBlob1: {
    position: 'fixed',
    top: '-5%',
    right: '-5%',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
    filter: 'blur(80px)',
    pointerEvents: 'none',
    zIndex: 0,
    animation: 'floatBlob 20s ease-in-out infinite',
  },
  bgBlob2: {
    position: 'fixed',
    bottom: '10%',
    left: '-10%',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)',
    filter: 'blur(80px)',
    pointerEvents: 'none',
    zIndex: 0,
    animation: 'floatBlob 25s ease-in-out infinite reverse',
  },
  bgBlob3: {
    position: 'fixed',
    top: '40%',
    left: '40%',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)',
    filter: 'blur(80px)',
    pointerEvents: 'none',
    zIndex: 0,
    animation: 'floatBlob 30s ease-in-out infinite',
  },
  gridPattern: {
    position: 'fixed',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    pointerEvents: 'none',
    zIndex: 0,
    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
  },

  // Navbar
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '0 1.5rem',
    transition: 'all 0.3s ease',
    backgroundColor: 'transparent',
  },
  navbarScrolled: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
  },
  navbarScrolledDark: {
    backgroundColor: 'rgba(10, 10, 15, 0.85)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.9rem 0',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    cursor: 'pointer',
  },
  logoIcon: {
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #6366f1, #ec4899)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.85rem',
    fontWeight: 800,
    color: '#fff',
    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
    flexShrink: 0,
  },
  logoText: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#1e293b',
    letterSpacing: '-0.02em',
  },
  desktopNav: {
    display: 'flex',
    gap: '0.25rem',
  },
  navLink: {
    color: '#64748b',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 500,
    padding: '0.5rem 0.9rem',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    position: 'relative',
  },
  navLinkDark: {
    color: '#94a3b8',
  },
  navLinkActive: {
    color: '#6366f1',
    backgroundColor: 'rgba(99, 102, 241, 0.08)',
    fontWeight: 600,
  },
  navActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  themeToggle: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    backgroundColor: 'rgba(255,255,255,0.6)',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  },
  themeToggleDark: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderColor: 'rgba(255,255,255,0.1)',
  },
  mobileMenuBtn: {
    display: 'none',
    background: 'rgba(99, 102, 241, 0.1)',
    border: 'none',
    cursor: 'pointer',
    padding: '0.6rem',
    borderRadius: '8px',
    width: '40px',
    height: '40px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
  },
  menuLine: {
    width: '18px',
    height: '2px',
    backgroundColor: '#6366f1',
    borderRadius: '9999px',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0.5rem 1.5rem 1.5rem',
    gap: '0.25rem',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
    animation: 'slideDown 0.3s ease',
  },
  mobileMenuDark: {
    backgroundColor: 'rgba(10, 10, 15, 0.98)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
  },
  mobileNavLink: {
    color: '#475569',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 500,
    padding: '0.75rem 0',
    borderBottom: '1px solid rgba(226, 232, 240, 0.5)',
  },

  // Hero
  heroSection: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '7rem 1.5rem 3rem',
    gap: '3rem',
    position: 'relative',
    zIndex: 1,
    flexWrap: 'wrap',
  },
  heroContent: {
    flex: '1 1 400px',
    maxWidth: '100%',
    animation: 'fadeInUp 0.8s ease forwards',
  },
  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    border: '1px solid rgba(34, 197, 94, 0.2)',
    color: '#16a34a',
    padding: '0.4rem 0.9rem',
    borderRadius: '9999px',
    fontSize: '0.8rem',
    fontWeight: 600,
    marginBottom: '1.5rem',
  },
  badgeDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#22c55e',
    animation: 'pulse 2s infinite',
  },
  heroTitle: {
    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
    fontWeight: 800,
    letterSpacing: '-0.03em',
    lineHeight: 1.15,
    marginBottom: '1.25rem',
    color: '#0f172a',
    wordBreak: 'break-word',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #6366f1, #ec4899, #f59e0b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline',
    backgroundSize: '200% 200%',
    animation: 'gradientMove 4s ease infinite',
  },
  waveEmoji: {
    display: 'inline-block',
    animation: 'wave 2.5s ease-in-out infinite',
    transformOrigin: '70% 70%',
    marginLeft: '0.5rem',
  },
  heroRoleContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
    flexWrap: 'wrap',
  },
  heroSubtitle: {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
    color: '#475569',
    fontWeight: 600,
    margin: 0,
    minHeight: '1.8em',
  },
  typingText: {
    background: 'linear-gradient(135deg, #6366f1, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  typingCursor: {
    color: '#6366f1',
    fontWeight: 400,
    animation: 'blink 1s step-end infinite',
    marginLeft: '2px',
  },
  heroMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
  },
  heroMetaItem: {
    color: '#64748b',
    fontSize: '0.85rem',
    fontWeight: 500,
  },
  heroMetaDivider: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: '#cbd5e1',
  },
  heroText: {
    fontSize: '1rem',
    color: '#475569',
    lineHeight: 1.8,
    marginBottom: '2rem',
    maxWidth: '600px',
  },
  heroStats: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  statNumber: {
    fontSize: '1.75rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #6366f1, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  statLabel: {
    fontSize: '0.75rem',
    color: '#64748b',
    fontWeight: 500,
  },
  statDivider: {
    width: '1px',
    height: '40px',
    backgroundColor: 'rgba(226, 232, 240, 0.8)',
  },
  ctaContainer: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    color: '#fff',
    padding: '0.85rem 1.75rem',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
    position: 'relative',
    overflow: 'hidden',
  },
  primaryBtnWhite: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: '#ffffff',
    color: '#6366f1',
    padding: '0.85rem 1.75rem',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  secondaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: '2px solid #e2e8f0',
    color: '#1e293b',
    padding: '0.85rem 1.75rem',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    backgroundColor: '#fff',
  },
  secondaryBtnDark: {
    borderColor: 'rgba(255,255,255,0.15)',
    color: '#e2e8f0',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  secondaryBtnWhite: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    color: '#fff',
    padding: '0.85rem 1.75rem',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    backgroundColor: 'transparent',
  },
  heroVisual: {
    flex: '1 1 300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    minHeight: '400px',
    animation: 'fadeInUp 0.8s ease 0.2s forwards',
    opacity: 0,
  },
  profileCardWrapper: {
    perspective: '1000px',
  },
  profileCard: {
    background: '#ffffff',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    borderRadius: '24px',
    padding: '2rem 1.5rem',
    width: '100%',
    maxWidth: '340px',
    textAlign: 'center',
    boxShadow: '0 20px 50px -12px rgba(99, 102, 241, 0.15)',
    animation: 'float 4s ease-in-out infinite',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
  },
  profileCardDark: {
    backgroundColor: 'rgba(20, 20, 30, 0.8)',
    borderColor: 'rgba(255,255,255,0.08)',
    boxShadow: '0 20px 50px -12px rgba(99, 102, 241, 0.3)',
  },
  profileAvatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #6366f1, #ec4899)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.25rem',
    boxShadow: '0 10px 30px rgba(99, 102, 241, 0.35)',
    animation: 'pulseGlow 3s ease-in-out infinite',
    position: 'relative',
  },
  avatarRing: {
    position: 'absolute',
    inset: '-8px',
    borderRadius: '50%',
    border: '2px dashed rgba(99, 102, 241, 0.4)',
    animation: 'rotate 10s linear infinite',
  },
  avatarText: {
    fontSize: '2rem',
    fontWeight: 800,
    color: '#fff',
  },
  profileCardName: {
    fontSize: '1.15rem',
    fontWeight: 700,
    marginBottom: '0.25rem',
    color: '#0f172a',
  },
  profileCardRole: {
    fontSize: '0.85rem',
    color: '#6366f1',
    fontWeight: 600,
    marginBottom: '1.25rem',
  },
  profileCardDivider: {
    height: '1px',
    backgroundColor: '#e2e8f0',
    marginBottom: '1.25rem',
  },
  dividerDark: {
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  profileCardInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    textAlign: 'left',
  },
  profileCardInfoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    color: '#475569',
    fontSize: '0.85rem',
  },
  infoIcon: {
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderRadius: '6px',
    fontSize: '0.75rem',
    flexShrink: 0,
  },
  floatingEmoji: {
    position: 'absolute',
    fontSize: '1.75rem',
    animation: 'floatEmoji 3s ease-in-out infinite',
    pointerEvents: 'none',
    zIndex: 2,
    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
  },

  // Section
  section: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '5rem 1.5rem',
    position: 'relative',
    zIndex: 1,
  },
  sectionHeader: {
    marginBottom: '3rem',
    textAlign: 'center',
  },
  sectionTag: {
    display: 'inline-block',
    color: '#6366f1',
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    marginBottom: '0.75rem',
    backgroundColor: 'rgba(99, 102, 241, 0.08)',
    padding: '0.4rem 1rem',
    borderRadius: '9999px',
    border: '1px solid rgba(99, 102, 241, 0.15)',
  },
  sectionTitle: {
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    marginBottom: '0.75rem',
    color: '#0f172a',
  },
  sectionDesc: {
    color: '#64748b',
    fontSize: '0.95rem',
    maxWidth: '500px',
    margin: '0 auto',
  },

  // Timeline
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    position: 'relative',
    paddingLeft: '2rem',
  },
  timelineLine: {
    position: 'absolute',
    left: '5px',
    top: '2rem',
    bottom: '2rem',
    width: '2px',
    background: 'linear-gradient(180deg, #6366f1, #ec4899, transparent)',
    borderRadius: '9999px',
  },
  timelineItem: {
    position: 'relative',
  },
  timelineDot: {
    position: 'absolute',
    left: '-2rem',
    top: '1.75rem',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #6366f1, #ec4899)',
    boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.15)',
    animation: 'pulseDot 2s ease-in-out infinite',
    zIndex: 2,
  },
  timelineDotCurrent: {
    background: '#22c55e',
    boxShadow: '0 0 0 4px rgba(34, 197, 94, 0.2)',
  },
  timelineDotPulse: {
    position: 'absolute',
    inset: '-4px',
    borderRadius: '50%',
    border: '2px solid #22c55e',
    animation: 'ping 1.5s ease-out infinite',
  },
  glassCard: {
    background: '#ffffff',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    borderRadius: '20px',
    padding: '1.75rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
  },
  glassCardDark: {
    backgroundColor: 'rgba(20, 20, 30, 0.6)',
    borderColor: 'rgba(255,255,255,0.08)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginBottom: '1.5rem',
  },
  cardHeaderLeft: {
    flex: '1 1 auto',
    minWidth: 0,
  },
  cardTitle: {
    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
    fontWeight: 700,
    lineHeight: 1.4,
    color: '#0f172a',
  },
  accentText: {
    color: '#6366f1',
    fontWeight: 600,
  },
  locationText: {
    color: '#64748b',
    fontSize: '0.8rem',
    display: 'block',
    marginTop: '0.4rem',
  },
  dateBadge: {
    backgroundColor: 'rgba(99, 102, 241, 0.08)',
    border: '1px solid rgba(99, 102, 241, 0.15)',
    padding: '0.4rem 0.85rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    color: '#6366f1',
    fontWeight: 600,
    whiteSpace: 'nowrap',
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
  dateBadgeCurrent: {
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    borderColor: 'rgba(34, 197, 94, 0.2)',
    color: '#16a34a',
  },
  liveDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#22c55e',
    animation: 'pulse 1.5s infinite',
  },
  projectList: {
    marginBottom: '1.5rem',
  },
  projectListTitle: {
    fontSize: '0.85rem',
    color: '#64748b',
    fontWeight: 600,
    marginBottom: '0.75rem',
  },
  projectChips: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
  },
  projectChip: {
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    color: '#475569',
    padding: '0.35rem 0.7rem',
    borderRadius: '8px',
    fontSize: '0.75rem',
    transition: 'all 0.2s ease',
    cursor: 'default',
  },
  projectChipDark: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderColor: 'rgba(255,255,255,0.08)',
    color: '#94a3b8',
  },
  tasksTitle: {
    fontSize: '0.85rem',
    color: '#64748b',
    fontWeight: 600,
    marginBottom: '0.75rem',
  },
  bulletList: {
    paddingLeft: 0,
    listStyle: 'none',
    color: '#475569',
  },
  bulletItem: {
    marginBottom: '0.6rem',
    lineHeight: 1.7,
    fontSize: '0.85rem',
    display: 'flex',
    gap: '0.6rem',
    alignItems: 'flex-start',
  },
  bulletIcon: {
    color: '#6366f1',
    fontWeight: 700,
    flexShrink: 0,
    marginTop: '2px',
  },

  // Skills
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.5rem',
  },
  skillCard: {
    background: '#ffffff',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    borderRadius: '20px',
    padding: '1.75rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
    position: 'relative',
    overflow: 'hidden',
  },
  skillCardDark: {
    backgroundColor: 'rgba(20, 20, 30, 0.6)',
    borderColor: 'rgba(255,255,255,0.08)',
  },
  skillCardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.25rem',
  },
  skillIconWrapper: {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.1rem',
  },
  skillCategoryTitle: {
    fontSize: '0.8rem',
    color: '#64748b',
    letterSpacing: '0.05em',
    fontWeight: 700,
    margin: 0,
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
  },
  skillTag: {
    backgroundColor: '#f1f5f9',
    color: '#334155',
    padding: '0.4rem 0.8rem',
    borderRadius: '8px',
    fontSize: '0.8rem',
    border: '1px solid #e2e8f0',
    transition: 'all 0.2s ease',
    fontWeight: 500,
    cursor: 'default',
  },
  skillTagDark: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderColor: 'rgba(255,255,255,0.08)',
    color: '#cbd5e1',
  },

  // Projects
  projectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  projectCardLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    height: '100%',
  },
  projectCard: {
    background: '#ffffff',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    borderRadius: '20px',
    padding: '1.75rem',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
    height: '100%',
    cursor: 'pointer',
  },
  projectCardDark: {
    backgroundColor: 'rgba(20, 20, 30, 0.6)',
    borderColor: 'rgba(255,255,255,0.08)',
  },
  projectCardFeatured: {
    borderColor: 'rgba(99, 102, 241, 0.3)',
    background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.03), #ffffff 30%)',
  },
  featuredBadge: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    color: '#f59e0b',
    fontSize: '0.7rem',
    fontWeight: 700,
    padding: '0.3rem 0.7rem',
    borderRadius: '9999px',
    border: '1px solid rgba(245, 158, 11, 0.2)',
  },
  projectEmoji: {
    fontSize: '2rem',
    marginBottom: '0.75rem',
    display: 'inline-block',
    transition: 'transform 0.3s ease',
  },
  projectHeader: {
    marginBottom: '0.75rem',
  },
  projectDate: {
    fontSize: '0.75rem',
    color: '#6366f1',
    fontWeight: 600,
    backgroundColor: 'rgba(99, 102, 241, 0.08)',
    padding: '0.3rem 0.7rem',
    borderRadius: '6px',
  },
  projectTitle: {
    fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
    fontWeight: 700,
    marginBottom: '0.75rem',
    lineHeight: 1.4,
    color: '#0f172a',
  },
  projectDesc: {
    color: '#64748b',
    fontSize: '0.85rem',
    lineHeight: 1.7,
    marginBottom: '1.25rem',
    flexGrow: 1,
  },
  projectTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
    marginBottom: '1rem',
  },
  projTag: {
    backgroundColor: 'rgba(236, 72, 153, 0.08)',
    color: '#db2777',
    padding: '0.3rem 0.7rem',
    borderRadius: '6px',
    fontSize: '0.7rem',
    fontWeight: 600,
    border: '1px solid rgba(236, 72, 153, 0.15)',
  },
  projectLinkHint: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    color: '#6366f1',
    fontSize: '0.8rem',
    fontWeight: 600,
    marginTop: 'auto',
    paddingTop: '0.75rem',
    borderTop: '1px solid #f1f5f9',
    transition: 'gap 0.2s ease',
  },
  arrowIcon: {
    transition: 'transform 0.2s ease',
    display: 'inline-block',
  },

  // Certifications
  certGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  certCard: {
    background: '#ffffff',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    borderRadius: '20px',
    padding: '1.75rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
  },
  certCardDark: {
    backgroundColor: 'rgba(20, 20, 30, 0.6)',
    borderColor: 'rgba(255,255,255,0.08)',
  },
  certIcon: {
    fontSize: '2.25rem',
    marginBottom: '0.75rem',
    display: 'inline-block',
    transition: 'transform 0.3s ease',
  },
  certName: {
    fontSize: '0.95rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
    lineHeight: 1.4,
    color: '#0f172a',
  },
  certIssuer: {
    color: '#64748b',
    fontSize: '0.8rem',
    marginBottom: '0.6rem',
  },
  certDate: {
    color: '#6366f1',
    fontSize: '0.75rem',
    fontWeight: 600,
    backgroundColor: 'rgba(99, 102, 241, 0.08)',
    padding: '0.3rem 0.7rem',
    borderRadius: '6px',
    display: 'inline-block',
  },
  educationCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.06), rgba(236, 72, 153, 0.04))',
    border: '1px solid rgba(99, 102, 241, 0.15)',
    borderRadius: '20px',
    padding: '1.75rem',
    flexWrap: 'wrap',
  },
  educationCardDark: {
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.05))',
    borderColor: 'rgba(99, 102, 241, 0.2)',
  },
  eduIcon: {
    fontSize: '2.5rem',
  },
  eduContent: {
    flex: 1,
    minWidth: 0,
  },
  eduDegree: {
    fontSize: '1.1rem',
    fontWeight: 700,
    marginBottom: '0.25rem',
    color: '#0f172a',
  },
  eduUniversity: {
    color: '#475569',
    fontSize: '0.9rem',
    marginBottom: '0.4rem',
  },
  eduLocation: {
    color: '#64748b',
    fontSize: '0.8rem',
  },

  // Contact
  contactSection: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 1.5rem 5rem',
    position: 'relative',
    zIndex: 1,
  },
  contactContent: {
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)',
    borderRadius: '28px',
    padding: '3rem 1.5rem',
    textAlign: 'center',
    boxShadow: '0 25px 60px -12px rgba(99, 102, 241, 0.5)',
    position: 'relative',
    overflow: 'hidden',
  },
  contactGlow: {
    position: 'absolute',
    top: '-50%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)',
    pointerEvents: 'none',
  },
  contactTitle: {
    fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
    fontWeight: 800,
    marginBottom: '0.75rem',
    color: '#ffffff',
    position: 'relative',
  },
  contactText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '0.95rem',
    lineHeight: 1.7,
    marginBottom: '2rem',
    maxWidth: '600px',
    margin: '0 auto 2rem',
    position: 'relative',
  },
  contactButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap',
    position: 'relative',
  },

  // Footer
  footer: {
    borderTop: '1px solid rgba(226, 232, 240, 0.8)',
    padding: '3rem 1.5rem',
    position: 'relative',
    zIndex: 1,
    backgroundColor: '#ffffff',
  },
  footerDark: {
    backgroundColor: '#0a0a0f',
    borderTopColor: 'rgba(255,255,255,0.08)',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
    marginBottom: '1rem',
  },
  footerText: {
    color: '#64748b',
    fontSize: '0.85rem',
    marginBottom: '0.5rem',
  },
  footerSubtext: {
    fontSize: '0.75rem',
    color: '#94a3b8',
  },

  // Text helpers
  textLight: {
    color: '#f1f5f9',
  },
  textLightMuted: {
    color: '#94a3b8',
  },
};

// ==================== GLOBAL STYLES ====================
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.1); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeOut {
    to { opacity: 0; visibility: hidden; }
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
  }
  @keyframes floatEmoji {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
  }
  @keyframes floatBlob {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.05); }
    66% { transform: translate(-20px, 20px) scale(0.95); }
  }
  @keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    10%, 30% { transform: rotate(14deg); }
    20%, 40% { transform: rotate(-8deg); }
    50% { transform: rotate(0deg); }
  }
  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 10px 30px rgba(99, 102, 241, 0.35); }
    50% { box-shadow: 0 10px 40px rgba(236, 72, 153, 0.5); }
  }
  @keyframes pulseDot {
    0%, 100% { box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15); }
    50% { box-shadow: 0 0 0 8px rgba(99, 102, 241, 0.05); }
  }
  @keyframes ping {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(2.5); opacity: 0; }
  }
  @keyframes gradientMove {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  @keyframes loadBar {
    from { width: 0%; }
    to { width: 100%; }
  }
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  html { scroll-behavior: smooth; }
  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .animate-on-scroll {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .expCard:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px -12px rgba(99, 102, 241, 0.15) !important;
  }

  .projectCard:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 48px -12px rgba(99, 102, 241, 0.25) !important;
    border-color: rgba(99, 102, 241, 0.3) !important;
  }
  .projectCard:hover .projectEmoji {
    transform: scale(1.2) rotate(10deg);
  }
  .projectCard:hover .projectLinkHint {
    gap: 0.75rem;
  }
  .projectCard:hover .arrowIcon {
    transform: translateX(4px);
  }

  .certCard:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px -12px rgba(236, 72, 153, 0.2) !important;
    border-color: rgba(236, 72, 153, 0.3) !important;
  }
  .certCard:hover .certIcon {
    transform: scale(1.2);
  }

  .skillCard:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px -12px rgba(99, 102, 241, 0.15) !important;
  }

  .primaryBtn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(99, 102, 241, 0.5) !important;
  }
  .primaryBtn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }
  .primaryBtn:hover::before {
    transform: translateX(100%);
  }
  .primaryBtnWhite:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2) !important;
  }
  .secondaryBtn:hover {
    border-color: #6366f1 !important;
    color: #6366f1 !important;
    transform: translateY(-2px);
  }
  .secondaryBtnWhite:hover {
    background-color: rgba(255, 255, 255, 0.15) !important;
    transform: translateY(-2px);
  }

  .skillTag:hover {
    background: linear-gradient(135deg, #6366f1, #8b5cf6) !important;
    color: #fff !important;
    border-color: transparent !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  }

  /* Hide custom cursor on touch devices */
  @media (hover: none) and (pointer: coarse) {
    * { cursor: auto !important; }
  }

  /* ============ RESPONSIVE MOBILE ============ */
  @media (max-width: 768px) {
    .desktopNav { display: none !important; }
    .mobileMenuBtn { display: flex !important; }

    .heroSection {
      flex-direction: column !important;
      padding: 6rem 1.25rem 2rem !important;
      gap: 2rem !important;
      min-height: auto !important;
    }
    .heroContent {
      text-align: left !important;
      width: 100% !important;
    }
    .heroVisual {
      width: 100% !important;
      min-height: auto !important;
      margin-top: 1rem !important;
    }
    .heroTitle {
      font-size: 2rem !important;
    }
    .profileCard {
      max-width: 100% !important;
    }

    .heroVisual > span {
      display: none !important;
    }

    section {
      padding: 3.5rem 1.25rem !important;
    }

    .skillsGrid { grid-template-columns: 1fr !important; }
    .projectGrid { grid-template-columns: 1fr !important; }
    .certGrid { grid-template-columns: 1fr !important; }

    .cardHeader {
      flex-direction: column !important;
      align-items: flex-start !important;
    }
    .dateBadge {
      align-self: flex-start !important;
    }

    .timeline {
      padding-left: 1.5rem !important;
    }
    .timelineDot {
      left: -1.5rem !important;
    }
  }

  @media (max-width: 480px) {
    .heroTitle { font-size: 1.65rem !important; }
    .sectionTitle { font-size: 1.5rem !important; }
    .contactContent { padding: 2rem 1.25rem !important; }
    .primaryBtn, .secondaryBtn, .secondaryBtnWhite, .primaryBtnWhite {
      width: 100% !important;
      justify-content: center !important;
    }
    .ctaContainer, .contactButtons {
      flex-direction: column !important;
    }
    .contactButtons a { width: 100% !important; }
    .heroStats {
      gap: 1rem !important;
    }
    .statNumber { font-size: 1.4rem !important; }
    .statDivider { display: none !important; }
  }

  @media (min-width: 769px) {
    .mobileMenuBtn { display: none !important; }
  }

  ::selection { background: rgba(99, 102, 241, 0.2); color: #1e293b; }
  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: #f8fafc; }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #6366f1, #ec4899);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover { background: #6366f1; }
`;
document.head.appendChild(styleSheet);

export default App;