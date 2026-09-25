import React, { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const profile = {
    name: "Nur Fauzan Halim, S.Kom",
    role: "Software Programmer",
    location: "Bekasi, ID",
    email: "nurfauzanhalim@gmail.com",
    linkedin: "https://linkedin.com",
    about: "Programmer berpengalaman di BPKD DKI Jakarta yang berfokus pada pengembangan arsitektur sistem, efisiensi database, dan pembuatan aplikasi web enterprise yang aman dan andal. Lulusan S1 Teknik Informatika Universitas Komputer Indonesia dengan sertifikasi Oracle Academy dan BNSP Junior Web Programmer."
  };

  const skills = {
    languages: ["JavaScript", "HTML/CSS", "PHP", "GoLang", "SQL"],
    frameworks: ["Laravel", "Bootstrap", "Vue.js", "CodeIgniter"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Oracle Database"],
    tools: ["Git", "Figma", "Draw.io", "Jira", "Trello", "VsCode", "GTmetrix"]
  };

  const experiences = [
    {
      role: "Software Programmer",
      company: "BPKD DKI Jakarta",
      period: "Jan 2024 – Present",
      location: "Jakarta, ID",
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

  // Project dengan link asli & deskripsi SPB yang baru
  const projects = [
    {
      title: "Aplikasi SMART Planning & Budgeting (SPB)",
      date: "Mar 2026 – Sekarang",
      description: "Portal Aplikasi SMART Planning & Budgeting Provinsi DKI Jakarta. Aplikasi web yang menyajikan data dan analisis mengenai Anggaran Pendapatan dan Belanja Daerah (APBD) Pemerintah Provinsi DKI Jakarta secara terbuka dan mudah digunakan. Menyediakan grafik analisa interaktif sebagai fitur rekap data (dashboard), pemantauan penggunaan anggaran (pantau anggaran), dan pemantauan penyerapan aspirasi masyarakat (pantau aspirasi).",
      tags: ["PHP", "JavaScript", "Laravel", "Oracle Database", "Bootstrap"],
      emoji: "📊",
      link: "https://apbd.jakarta.go.id/"
    },
    {
      title: "Sistem Penarikan Pinjaman & Hibah Proyek MRT Jakarta",
      date: "Jul 2024 – Jun 2025",
      description: "Sistem manajemen pengajuan dana digital yang mengintegrasikan alur kerja validasi bertingkat, formulir upload dokumen aman, serta dashboard monitoring real-time.",
      tags: ["PHP", "JavaScript", "Laravel", "HTML", "CSS"],
      emoji: "🚇",
      link: "https://eosbpkd.jakarta.go.id/simtag"
    },
    {
      title: "Deposito Jakarta Online Sistem",
      date: "Sep 2024 – Jun 2025",
      description: "Platform pengelolaan akun deposito online aman yang mengotomatisasi kalkulasi bunga berdasarkan jangka waktu dan nominal transaksi, dilengkapi sistem autentikasi data yang robust.",
      tags: ["PHP", "JavaScript", "Laravel", "Oracle Database", "CSS"],
      emoji: "💰",
      link: "https://eosbpkd.jakarta.go.id/djos"
    },
    {
      title: "Sistem Informasi Pertanggungjawaban Belanja Daerah",
      date: "Jun 2024 – Sekarang",
      description: "Aplikasi internal berskala besar untuk mencatat log histori transaksi secara berkala, memantau pertumbuhan alokasi anggaran, dan menyediakan laporan wawasan real-time.",
      tags: ["PHP", "JavaScript", "Laravel", "Oracle Database", "Bootstrap"],
      emoji: "📈",
      link: "https://eosbpkd.jakarta.go.id/sibeda"
    },
    {
      title: "Sistem Surat Keterangan Penghentian Pembayaran",
      date: "Jan 2024 – Sekarang",
      description: "Sistem digital untuk pengelolaan Surat Keterangan Penghentian Pembayaran (SKPP) dengan alur kerja terintegrasi dan penyimpanan dokumen digital.",
      tags: ["PHP", "JavaScript", "Laravel", "Oracle Database"],
      emoji: "📄",
      link: "https://eosbpkd.jakarta.go.id/skpp"
    },
    {
      title: "Website BPKD DKI Jakarta",
      date: "Sep 2024 – Sekarang",
      description: "Pengembangan dan pemeliharaan website resmi Badan Pengelola Keuangan Daerah (BPKD) DKI Jakarta dengan fitur informasi publik dan layanan digital.",
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div style={styles.container}>
      {/* Background Blobs */}
      <div style={styles.bgBlob1}></div>
      <div style={styles.bgBlob2}></div>
      <div style={styles.bgBlob3}></div>

      {/* Navbar */}
      <nav style={{ ...styles.navbar, ...(scrolled ? styles.navbarScrolled : {}) }}>
        <div style={styles.navContent}>
          <div style={styles.logo} onClick={() => scrollToSection('about')}>
            <span style={styles.logoIcon}>NF</span>
            <span style={styles.logoText}>Nur Fauzan</span>
          </div>

          <div style={styles.desktopNav} className="desktopNav">
            {['about', 'experience', 'skills', 'projects', 'certifications'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
                style={{
                  ...styles.navLink,
                  ...(activeSection === item ? styles.navLinkActive : {})
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <button
            style={styles.mobileMenuBtn}
            className="mobileMenuBtn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {isMenuOpen && (
          <div style={styles.mobileMenu} className="mobileMenu">
            {['about', 'experience', 'skills', 'projects', 'certifications'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
                style={styles.mobileNavLink}
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

          <h1 style={styles.heroTitle}>
            Hi, I'm{' '}
            <span style={styles.gradientText}>Nur Fauzan Halim</span>
            <span style={styles.waveEmoji}>👋</span>
          </h1>

          <div style={styles.heroRoleContainer}>
            <h2 style={styles.heroSubtitle}>{profile.role}</h2>
            <div style={styles.heroDivider}></div>
            <span style={styles.heroLocation}>📍 {profile.location}</span>
          </div>

          <p style={styles.heroText}>{profile.about}</p>

          <div style={styles.heroStats}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>3+</span>
              <span style={styles.statLabel}>Years Experience</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>7+</span>
              <span style={styles.statLabel}>Projects Completed</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>3</span>
              <span style={styles.statLabel}>Certifications</span>
            </div>
          </div>

          <div style={styles.ctaContainer}>
            <a href={`mailto:${profile.email}`} style={styles.primaryBtn} className="primaryBtn">
              <span>✉️</span> Contact Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              style={styles.secondaryBtn}
              className="secondaryBtn"
            >
              <span>💼</span> LinkedIn Profile
            </a>
          </div>
        </div>

        <div style={styles.heroVisual} className="heroVisual">
          <div style={styles.profileCard}>
            <div style={styles.profileAvatar}>
              <span style={styles.avatarText}>NF</span>
            </div>
            <h3 style={styles.profileCardName}>Nur Fauzan Halim</h3>
            <p style={styles.profileCardRole}>{profile.role}</p>
            <div style={styles.profileCardDivider}></div>
            <div style={styles.profileCardInfo}>
              <div style={styles.profileCardInfoItem}>
                <span>🎓</span> {education.degree}
              </div>
              <div style={styles.profileCardInfoItem}>
                <span>🏢</span> BPKD DKI Jakarta
              </div>
              <div style={styles.profileCardInfoItem}>
                <span>📍</span> {profile.location}
              </div>
            </div>
          </div>
          <span style={{...styles.floatingEmoji, top: '10%', left: '10%', animationDelay: '0s'}}>💻</span>
          <span style={{...styles.floatingEmoji, top: '20%', right: '5%', animationDelay: '1s'}}>🚀</span>
          <span style={{...styles.floatingEmoji, bottom: '15%', left: '5%', animationDelay: '2s'}}>⚡</span>
          <span style={{...styles.floatingEmoji, bottom: '25%', right: '10%', animationDelay: '1.5s'}}>✨</span>
        </div>
      </header>

      {/* Experience Section */}
      <section id="experience" style={styles.section}>
        <div style={styles.sectionHeader} className="animate-on-scroll">
          <span style={styles.sectionTag}>💼 Career</span>
          <h2 style={styles.sectionTitle}>Professional Experience</h2>
          <p style={styles.sectionDesc}>Perjalanan karir dan kontribusi profesional saya</p>
        </div>

        <div style={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} style={styles.timelineItem}>
              <div style={styles.timelineDot}></div>
              <div style={styles.glassCard} className="animate-on-scroll">
                <div style={styles.cardHeader} className="cardHeader">
                  <div style={styles.cardHeaderLeft}>
                    <h3 style={styles.cardTitle}>
                      {exp.role}{' '}
                      <span style={styles.accentText}>@ {exp.company}</span>
                    </h3>
                    <span style={styles.locationText}>📍 {exp.location}</span>
                  </div>
                  <span style={styles.dateBadge}>{exp.period}</span>
                </div>

                <div style={styles.projectList}>
                  <h4 style={styles.projectListTitle}>Proyek yang Dikerjakan:</h4>
                  <div style={styles.projectChips}>
                    {exp.projects.map((proj, i) => (
                      <span key={i} style={styles.projectChip}>{proj}</span>
                    ))}
                  </div>
                </div>

                <h4 style={styles.tasksTitle}>Tanggung Jawab:</h4>
                <ul style={styles.bulletList}>
                  {exp.tasks.map((task, i) => (
                    <li key={i} style={styles.bulletItem}>
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
          <h2 style={styles.sectionTitle}>Technical Skills</h2>
          <p style={styles.sectionDesc}>Teknologi dan tools yang saya kuasai</p>
        </div>

        <div style={styles.skillsGrid} className="skillsGrid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} style={styles.skillCard} className="animate-on-scroll skillCard">
              <div style={styles.skillCardHeader}>
                <span style={styles.skillIcon}>
                  {category === 'languages' && '💻'}
                  {category === 'frameworks' && '⚙️'}
                  {category === 'databases' && '🗄️'}
                  {category === 'tools' && '🔧'}
                </span>
                <h3 style={styles.skillCategoryTitle}>{category.toUpperCase()}</h3>
              </div>
              <div style={styles.tagContainer}>
                {items.map((item, i) => (
                  <span key={i} style={styles.skillTag} className="skillTag">{item}</span>
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
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          <p style={styles.sectionDesc}>Klik project untuk melihat langsung ke website-nya</p>
        </div>

        <div style={styles.projectGrid} className="projectGrid">
          {projects.map((proj, idx) => (
            <a
              key={idx}
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              style={styles.projectCardLink}
              className="animate-on-scroll"
            >
              <div style={styles.projectCard} className="projectCard">
                <div style={styles.projectEmoji} className="projectEmoji">{proj.emoji}</div>
                <div style={styles.projectHeader}>
                  <span style={styles.projectDate}>{proj.date}</span>
                </div>
                <h3 style={styles.projectTitle}>{proj.title}</h3>
                <p style={styles.projectDesc}>{proj.description}</p>
                <div style={styles.projectTags}>
                  {proj.tags.map((tag, i) => (
                    <span key={i} style={styles.projTag}>{tag}</span>
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
          <h2 style={styles.sectionTitle}>Certifications & Education</h2>
          <p style={styles.sectionDesc}>Sertifikasi dan latar belakang pendidikan</p>
        </div>

        <div style={styles.certGrid} className="certGrid">
          {certifications.map((cert, idx) => (
            <div key={idx} style={styles.certCard} className="animate-on-scroll certCard">
              <div style={styles.certIcon} className="certIcon">{cert.icon}</div>
              <h3 style={styles.certName}>{cert.name}</h3>
              <p style={styles.certIssuer}>{cert.issuer}</p>
              <span style={styles.certDate}>{cert.date}</span>
            </div>
          ))}
        </div>

        <div style={styles.educationCard} className="animate-on-scroll">
          <div style={styles.eduIcon}>🎓</div>
          <div style={styles.eduContent}>
            <h3 style={styles.eduDegree}>{education.degree}</h3>
            <p style={styles.eduUniversity}>{education.university}</p>
            <p style={styles.eduLocation}>📍 {education.location}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <div style={styles.contactContent} className="contactContent">
          <h2 style={styles.contactTitle}>Let's Work Together 🤝</h2>
          <p style={styles.contactText}>
            Saya terbuka untuk peluang baru, kolaborasi proyek, atau sekadar berdiskusi tentang teknologi.
          </p>
          <div style={styles.contactButtons}>
            <a href={`mailto:${profile.email}`} style={styles.primaryBtn} className="primaryBtn">
              <span>✉️</span> {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              style={styles.secondaryBtnWhite}
              className="secondaryBtnWhite"
            >
              <span>💼</span> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerLogo}>
            <span style={styles.logoIcon}>NF</span>
            <span style={styles.logoText}>Nur Fauzan Halim</span>
          </div>
          <p style={styles.footerText}>
            &copy; {new Date().getFullYear()} {profile.name}. Built with React.
          </p>
          <p style={styles.footerSubtext}>
            {profile.location} | {profile.email}
          </p>
        </div>
      </footer>
    </div>
  );
}

// ==================== STYLES ====================
const styles = {
  container: {
    backgroundColor: '#fafbff',
    color: '#1e293b',
    fontFamily: '"Inter", "Segoe UI", system-ui, -apple-system, sans-serif',
    minHeight: '100vh',
    position: 'relative',
    overflowX: 'hidden',
    width: '100%',
  },
  bgBlob1: {
    position: 'fixed', top: '-5%', right: '-5%', width: '400px', height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
    filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
    animation: 'floatBlob 20s ease-in-out infinite',
  },
  bgBlob2: {
    position: 'fixed', bottom: '10%', left: '-10%', width: '400px', height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
    filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
    animation: 'floatBlob 25s ease-in-out infinite reverse',
  },
  bgBlob3: {
    position: 'fixed', top: '40%', left: '40%', width: '350px', height: '350px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
    filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
    animation: 'floatBlob 30s ease-in-out infinite',
  },
  navbar: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    padding: '0 1.5rem', transition: 'all 0.3s ease',
    backgroundColor: 'transparent',
  },
  navbarScrolled: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
  },
  navContent: {
    maxWidth: '1200px', margin: '0 auto',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '0.9rem 0',
  },
  logo: { display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' },
  logoIcon: {
    width: '38px', height: '38px', borderRadius: '10px',
    background: 'linear-gradient(135deg, #6366f1, #ec4899)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '0.85rem', fontWeight: 800, color: '#fff',
    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)', flexShrink: 0,
  },
  logoText: { fontSize: '1rem', fontWeight: 700, color: '#1e293b', letterSpacing: '-0.02em' },
  desktopNav: { display: 'flex', gap: '0.25rem' },
  navLink: {
    color: '#64748b', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500,
    padding: '0.5rem 0.9rem', borderRadius: '8px', transition: 'all 0.2s ease',
  },
  navLinkActive: {
    color: '#6366f1', backgroundColor: 'rgba(99, 102, 241, 0.08)', fontWeight: 600,
  },
  mobileMenuBtn: {
    display: 'none', background: 'rgba(99, 102, 241, 0.1)', border: 'none',
    color: '#6366f1', fontSize: '1.25rem', cursor: 'pointer',
    padding: '0.5rem 0.75rem', borderRadius: '8px', fontWeight: 700, lineHeight: 1,
  },
  mobileMenu: {
    display: 'flex', flexDirection: 'column', padding: '0.5rem 1.5rem 1.5rem',
    gap: '0.25rem', backgroundColor: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
    animation: 'slideDown 0.3s ease',
  },
  mobileNavLink: {
    color: '#475569', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500,
    padding: '0.75rem 0', borderBottom: '1px solid rgba(226, 232, 240, 0.5)',
  },
  heroSection: {
    minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    maxWidth: '1200px', margin: '0 auto', padding: '7rem 1.5rem 3rem',
    gap: '3rem', position: 'relative', zIndex: 1, flexWrap: 'wrap',
  },
  heroContent: {
    flex: '1 1 400px', maxWidth: '100%',
    animation: 'fadeInUp 0.8s ease forwards',
  },
  heroBadge: {
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    border: '1px solid rgba(34, 197, 94, 0.2)',
    color: '#16a34a', padding: '0.4rem 0.9rem',
    borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem',
  },
  badgeDot: {
    width: '8px', height: '8px', borderRadius: '50%',
    backgroundColor: '#22c55e', animation: 'pulse 2s infinite',
  },
  heroTitle: {
    fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 800,
    letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1.25rem',
    color: '#0f172a', wordBreak: 'break-word',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #6366f1, #ec4899, #f59e0b)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    backgroundClip: 'text', display: 'inline',
  },
  waveEmoji: {
    display: 'inline-block', animation: 'wave 2.5s ease-in-out infinite',
    transformOrigin: '70% 70%', marginLeft: '0.5rem',
  },
  heroRoleContainer: {
    display: 'flex', alignItems: 'center', gap: '1rem',
    marginBottom: '1.25rem', flexWrap: 'wrap',
  },
  heroSubtitle: {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#475569',
    fontWeight: 600, margin: 0,
  },
  heroDivider: { width: '30px', height: '2px', backgroundColor: '#cbd5e1' },
  heroLocation: { color: '#64748b', fontSize: '0.875rem' },
  heroText: {
    fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem',
  },
  heroStats: {
    display: 'flex', gap: '1.75rem', marginBottom: '2rem', flexWrap: 'wrap',
  },
  statItem: { display: 'flex', flexDirection: 'column', gap: '0.25rem' },
  statNumber: {
    fontSize: '1.6rem', fontWeight: 800,
    background: 'linear-gradient(135deg, #6366f1, #ec4899)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
  },
  statLabel: { fontSize: '0.75rem', color: '#64748b', fontWeight: 500 },
  ctaContainer: { display: 'flex', gap: '0.75rem', flexWrap: 'wrap' },
  primaryBtn: {
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '10px',
    textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem',
    transition: 'all 0.3s ease', border: 'none', cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
  },
  secondaryBtn: {
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    border: '2px solid #e2e8f0', color: '#1e293b',
    padding: '0.75rem 1.5rem', borderRadius: '10px',
    textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem',
    transition: 'all 0.3s ease', backgroundColor: '#fff',
  },
  secondaryBtnWhite: {
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    border: '2px solid rgba(255, 255, 255, 0.4)', color: '#fff',
    padding: '0.75rem 1.5rem', borderRadius: '10px',
    textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem',
    transition: 'all 0.3s ease', backgroundColor: 'transparent',
  },
  heroVisual: {
    flex: '1 1 300px', display: 'flex', justifyContent: 'center', alignItems: 'center',
    position: 'relative', minHeight: '350px',
    animation: 'fadeInUp 0.8s ease 0.2s forwards', opacity: 0,
  },
  profileCard: {
    background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.8)',
    borderRadius: '24px', padding: '2rem 1.5rem', width: '100%', maxWidth: '340px',
    textAlign: 'center',
    boxShadow: '0 20px 50px -12px rgba(99, 102, 241, 0.15)',
    animation: 'float 4s ease-in-out infinite',
  },
  profileAvatar: {
    width: '90px', height: '90px', borderRadius: '50%',
    background: 'linear-gradient(135deg, #6366f1, #ec4899)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 1.25rem',
    boxShadow: '0 10px 30px rgba(99, 102, 241, 0.35)',
    animation: 'pulseGlow 3s ease-in-out infinite',
  },
  avatarText: { fontSize: '1.75rem', fontWeight: 800, color: '#fff' },
  profileCardName: { fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.25rem', color: '#0f172a' },
  profileCardRole: { fontSize: '0.85rem', color: '#6366f1', fontWeight: 600, marginBottom: '1.25rem' },
  profileCardDivider: { height: '1px', backgroundColor: '#e2e8f0', marginBottom: '1.25rem' },
  profileCardInfo: { display: 'flex', flexDirection: 'column', gap: '0.6rem', textAlign: 'left' },
  profileCardInfoItem: {
    display: 'flex', alignItems: 'center', gap: '0.6rem',
    color: '#475569', fontSize: '0.85rem',
  },
  floatingEmoji: {
    position: 'absolute', fontSize: '1.5rem',
    animation: 'floatEmoji 3s ease-in-out infinite',
    pointerEvents: 'none', zIndex: 2,
  },
  section: {
    maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem',
    position: 'relative', zIndex: 1,
  },
  sectionHeader: { marginBottom: '2.5rem' },
  sectionTag: {
    display: 'inline-block', color: '#6366f1', fontSize: '0.8rem', fontWeight: 700,
    letterSpacing: '0.05em', marginBottom: '0.6rem',
    backgroundColor: 'rgba(99, 102, 241, 0.08)',
    padding: '0.35rem 0.85rem', borderRadius: '9999px',
  },
  sectionTitle: {
    fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 800,
    letterSpacing: '-0.02em', marginBottom: '0.6rem', color: '#0f172a',
  },
  sectionDesc: { color: '#64748b', fontSize: '0.95rem' },
  timeline: { display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' },
  timelineItem: { position: 'relative', paddingLeft: '1.5rem' },
  timelineDot: {
    position: 'absolute', left: 0, top: '1.75rem', width: '12px', height: '12px',
    borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #ec4899)',
    boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.15)',
    animation: 'pulseDot 2s ease-in-out infinite',
  },
  glassCard: {
    background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.8)',
    borderRadius: '16px', padding: '1.5rem', transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
  },
  cardHeader: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
    flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem',
  },
  cardHeaderLeft: { flex: '1 1 auto', minWidth: 0 },
  cardTitle: {
    fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', fontWeight: 700,
    lineHeight: 1.4, color: '#0f172a',
  },
  accentText: { color: '#6366f1', fontWeight: 600 },
  locationText: {
    color: '#64748b', fontSize: '0.8rem', display: 'block', marginTop: '0.4rem',
  },
  dateBadge: {
    backgroundColor: 'rgba(99, 102, 241, 0.08)',
    border: '1px solid rgba(99, 102, 241, 0.15)',
    padding: '0.35rem 0.75rem', borderRadius: '8px',
    fontSize: '0.75rem', color: '#6366f1', fontWeight: 600,
    whiteSpace: 'nowrap', alignSelf: 'flex-start',
  },
  projectList: { marginBottom: '1.25rem' },
  projectListTitle: { fontSize: '0.85rem', color: '#64748b', fontWeight: 600, marginBottom: '0.6rem' },
  projectChips: { display: 'flex', flexWrap: 'wrap', gap: '0.4rem' },
  projectChip: {
    backgroundColor: '#f8fafc', border: '1px solid #e2e8f0',
    color: '#475569', padding: '0.3rem 0.65rem', borderRadius: '6px',
    fontSize: '0.75rem', transition: 'all 0.2s ease',
  },
  tasksTitle: { fontSize: '0.85rem', color: '#64748b', fontWeight: 600, marginBottom: '0.6rem' },
  bulletList: { paddingLeft: 0, listStyle: 'none', color: '#475569' },
  bulletItem: {
    marginBottom: '0.5rem', lineHeight: 1.6, fontSize: '0.85rem',
    display: 'flex', gap: '0.6rem', alignItems: 'flex-start',
  },
  bulletIcon: { color: '#6366f1', fontWeight: 700, flexShrink: 0, marginTop: '2px' },
  skillsGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.25rem',
  },
  skillCard: {
    background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.8)',
    borderRadius: '16px', padding: '1.5rem', transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
  },
  skillCardHeader: { display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' },
  skillIcon: { fontSize: '1.15rem' },
  skillCategoryTitle: {
    fontSize: '0.8rem', color: '#64748b', letterSpacing: '0.05em',
    fontWeight: 700, margin: 0,
  },
  tagContainer: { display: 'flex', flexWrap: 'wrap', gap: '0.4rem' },
  skillTag: {
    backgroundColor: '#f1f5f9', color: '#334155',
    padding: '0.35rem 0.7rem', borderRadius: '8px', fontSize: '0.8rem',
    border: '1px solid #e2e8f0', transition: 'all 0.2s ease', fontWeight: 500,
  },
  projectGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.25rem',
  },
  projectCardLink: {
    textDecoration: 'none', color: 'inherit', display: 'block', height: '100%',
  },
  projectCard: {
    background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.8)',
    borderRadius: '16px', padding: '1.5rem',
    display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease',
    position: 'relative', overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
    height: '100%', cursor: 'pointer',
  },
  projectEmoji: {
    fontSize: '1.75rem', marginBottom: '0.75rem', display: 'inline-block',
    transition: 'transform 0.3s ease',
  },
  projectHeader: { marginBottom: '0.75rem' },
  projectDate: {
    fontSize: '0.75rem', color: '#6366f1', fontWeight: 600,
    backgroundColor: 'rgba(99, 102, 241, 0.08)',
    padding: '0.25rem 0.65rem', borderRadius: '6px',
  },
  projectTitle: {
    fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', fontWeight: 700,
    marginBottom: '0.75rem', lineHeight: 1.4, color: '#0f172a',
  },
  projectDesc: {
    color: '#64748b', fontSize: '0.85rem', lineHeight: 1.7,
    marginBottom: '1.25rem', flexGrow: 1,
  },
  projectTags: { display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' },
  projTag: {
    backgroundColor: 'rgba(236, 72, 153, 0.08)', color: '#db2777',
    padding: '0.25rem 0.6rem', borderRadius: '6px',
    fontSize: '0.7rem', fontWeight: 600,
    border: '1px solid rgba(236, 72, 153, 0.15)',
  },
  projectLinkHint: {
    display: 'flex', alignItems: 'center', gap: '0.4rem',
    color: '#6366f1', fontSize: '0.8rem', fontWeight: 600,
    marginTop: 'auto', paddingTop: '0.75rem',
    borderTop: '1px solid #f1f5f9', transition: 'gap 0.2s ease',
  },
  arrowIcon: { transition: 'transform 0.2s ease', display: 'inline-block' },
  certGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.25rem', marginBottom: '1.5rem',
  },
  certCard: {
    background: '#ffffff', border: '1px solid rgba(226, 232, 240, 0.8)',
    borderRadius: '16px', padding: '1.5rem', textAlign: 'center',
    transition: 'all 0.3s ease', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
  },
  certIcon: {
    fontSize: '2rem', marginBottom: '0.75rem', display: 'inline-block',
    transition: 'transform 0.3s ease',
  },
  certName: {
    fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem',
    lineHeight: 1.4, color: '#0f172a',
  },
  certIssuer: { color: '#64748b', fontSize: '0.8rem', marginBottom: '0.6rem' },
  certDate: {
    color: '#6366f1', fontSize: '0.75rem', fontWeight: 600,
    backgroundColor: 'rgba(99, 102, 241, 0.08)',
    padding: '0.25rem 0.65rem', borderRadius: '6px', display: 'inline-block',
  },
  educationCard: {
    display: 'flex', alignItems: 'center', gap: '1.25rem',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.06), rgba(236, 72, 153, 0.04))',
    border: '1px solid rgba(99, 102, 241, 0.15)',
    borderRadius: '16px', padding: '1.5rem', flexWrap: 'wrap',
  },
  eduIcon: { fontSize: '2.5rem' },
  eduContent: { flex: 1, minWidth: 0 },
  eduDegree: { fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem', color: '#0f172a' },
  eduUniversity: { color: '#475569', fontSize: '0.9rem', marginBottom: '0.4rem' },
  eduLocation: { color: '#64748b', fontSize: '0.8rem' },
  contactSection: {
    maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 5rem',
    position: 'relative', zIndex: 1,
  },
  contactContent: {
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)',
    borderRadius: '24px', padding: '2.5rem 1.5rem', textAlign: 'center',
    boxShadow: '0 20px 50px -12px rgba(99, 102, 241, 0.4)',
    position: 'relative', overflow: 'hidden',
  },
  contactTitle: {
    fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)', fontWeight: 800,
    marginBottom: '0.75rem', color: '#ffffff',
  },
  contactText: {
    color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem', lineHeight: 1.7,
    marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem',
  },
  contactButtons: {
    display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap',
  },
  footer: {
    borderTop: '1px solid rgba(226, 232, 240, 0.8)',
    padding: '2.5rem 1.5rem', position: 'relative', zIndex: 1,
    backgroundColor: '#ffffff',
  },
  footerContent: { maxWidth: '1200px', margin: '0 auto', textAlign: 'center' },
  footerLogo: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: '0.6rem', marginBottom: '1rem',
  },
  footerText: { color: '#64748b', fontSize: '0.85rem', marginBottom: '0.5rem' },
  footerSubtext: { fontSize: '0.75rem', color: '#94a3b8' },
};

// ==================== GLOBAL STYLES ====================
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.1); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
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

  html { scroll-behavior: smooth; }
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .projectCard:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px -12px rgba(99, 102, 241, 0.25) !important;
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

  .primaryBtn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4) !important;
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
  }

  /* ============ RESPONSIVE MOBILE ============ */
  @media (max-width: 768px) {
    .desktopNav { display: none !important; }
    .mobileMenuBtn { display: block !important; }
    
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
      padding: 3rem 1.25rem !important;
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
  }

  @media (max-width: 480px) {
    .heroTitle { font-size: 1.75rem !important; }
    .sectionTitle { font-size: 1.5rem !important; }
    .contactContent { padding: 2rem 1.25rem !important; }
    .primaryBtn, .secondaryBtn, .secondaryBtnWhite {
      width: 100% !important;
      justify-content: center !important;
    }
    .ctaContainer, .contactButtons {
      flex-direction: column !important;
    }
    .contactButtons a { width: 100% !important; }
  }

  @media (min-width: 769px) {
    .mobileMenuBtn { display: none !important; }
  }

  ::selection { background: rgba(99, 102, 241, 0.2); color: #1e293b; }
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: #f8fafc; }
  ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
`;
document.head.appendChild(styleSheet);

export default App;