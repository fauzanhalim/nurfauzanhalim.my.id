import React from 'react';

function App() {
  const profile = {
    name: "Nur Fauzan Halim",
    role: "Fullstack Developer & UI/UX Designer",
    location: "Bekasi, ID",
    email: "nurfauzanhalim@gmail.com",
    linkedin: "https://linkedin.com",
    about: "Programmer berpengalaman di BPKD DKI Jakarta yang berfokus pada pengembangan arsitektur sistem, efisiensi database, dan pembuatan aplikasi web enterprise yang aman dan andal."
  };

  const skills = {
    languages: ["JavaScript", "HTML/CSS", "PHP", "GoLang"],
    frameworks: ["Laravel", "Bootstrap", "Vue.js", "CodeIgniter"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Oracle Database"],
    tools: ["Git", "Figma", "Draw.io", "Jira", "Trello", "VsCode"]
  };

  const experiences = [
    {
      role: "Programmer",
      company: "BPKD DKI JAKARTA",
      period: "Jan 2024 – Present",
      location: "Jakarta, ID",
      tasks: [
        "Menganalisis kebutuhan pengguna dan merancang arsitektur sistem informasi daerah.",
        "Mengembangkan, mengonfigurasi, dan memelihara aplikasi perangkat lunak dengan standar keamanan tinggi.",
        "Melakukan pengujian, debugging intensif, serta memberikan pelatihan sistem kepada pengguna operasional.",
        "Memantau kinerja berkala dan menyusun laporan performa sistem untuk penyelesaian isu teknis."
      ]
    }
  ];

  const projects = [
    {
      title: "Sistem Penarikan Pinjaman & Hibah Proyek MRT Jakarta",
      date: "Jan 2025",
      description: "Sistem manajemen pengajuan dana digital yang mengintegrasikan alur kerja validasi bertingkat (tiered approval process), formulir upload dokumen aman, serta dashboard monitoring real-time.",
      tags: ["PHP", "JavaScript", "Laravel", "HTML", "CSS"]
    },
    {
      title: "Deposito Jakarta Online Sistem",
      date: "Nov 2024",
      description: "Platform pengelolaan akun deposito online aman yang mengotomatisasi kalkulasi bunga berdasarkan jangka waktu dan nominal transaksi, dilengkapi sistem autentikasi data yang robust.",
      tags: ["PHP", "JavaScript", "Laravel", "Oracle Database", "CSS"]
    },
    {
      title: "Sistem Informasi Pertanggungjawaban Belanja Daerah",
      date: "Feb 2024",
      description: "Aplikasi internal berskala besar untuk mencatat log histori transaksi secara berkala, memantau pertumbuhan alokasi anggaran, dan menyediakan laporan wawasan real-time bagi pembuat kebijakan.",
      tags: ["PHP", "JavaScript", "Laravel", "Oracle Database", "Bootstrap"]
    }
  ];

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>{profile.name}</div>
        <div style={styles.navLinks}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#experience" style={styles.navLink}>Experience</a>
          <a href="#skills" style={styles.navLink}>Skills</a>
          <a href="#projects" style={styles.navLink}>Projects</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" style={styles.heroSection}>
        <div style={styles.heroContent}>
          <span style={styles.badge}>Available for Projects</span>
          <h1 style={styles.heroTitle}>Hi, I'm <span style={styles.gradientText}>{profile.name}</span></h1>
          <h2 style={styles.heroSubtitle}>{profile.role}</h2>
          <p style={styles.heroText}>{profile.about}</p>
          <div style={styles.ctaContainer}>
            <a href={`mailto:${profile.email}`} style={styles.primaryBtn}>Contact Me</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" style={styles.secondaryBtn}>LinkedIn Profile</a>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section id="experience" style={styles.section}>
        <h2 style={styles.sectionTitle}>Professional Experience</h2>
        <div style={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} style={styles.glassCard}>
              <div style={styles.cardHeader}>
                <div>
                  <h3 style={styles.cardTitle}>{exp.role} <span style={styles.accentText}>@ {exp.company}</span></h3>
                  <span style={styles.locationText}>{exp.location}</span>
                </div>
                <span style={styles.dateBadge}>{exp.period}</span>
              </div>
              <ul style={styles.bulletList}>
                {exp.tasks.map((task, i) => <li key={i} style={styles.bulletItem}>{task}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <h2 style={styles.sectionTitle}>Technical Skills</h2>
        <div style={styles.skillsGrid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} style={styles.skillCard}>
              <h3 style={styles.skillCategoryTitle}>{category.toUpperCase()}</h3>
              <div style={styles.tagContainer}>
                {items.map((item, i) => <span key={i} style={styles.skillTag}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Projects</h2>
        <div style={styles.projectGrid}>
          {projects.map((proj, idx) => (
            <div key={idx} style={styles.projectCard}>
              <div style={styles.projectHeader}>
                <span style={styles.projectDate}>{proj.date}</span>
              </div>
              <h3 style={styles.projectTitle}>{proj.title}</h3>
              <p style={styles.projectDesc}>{proj.description}</p>
              <div style={styles.projectTags}>
                {proj.tags.map((tag, i) => <span key={i} style={styles.projTag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} {profile.name}. Built with React.</p>
        <p style={{fontSize: '14px', color: '#64748b', marginTop: '5px'}}>{profile.location} | {profile.email}</p>
      </footer>
    </div>
  );
}

// Objek Styling Menggunakan Modern Dark Theme & Glassmorphism
const styles = {
  container: {
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
    minHeight: '100vh',
    padding: '0 2rem',
    scrollBehavior: 'smooth',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 0',
    borderBottom: '1px solid #1e293b',
    position: 'sticky',
    top: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    backdropFilter: 'blur(12px)',
    zIndex: 100,
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: 700,
    letterSpacing: '-0.05em',
    color: '#6366f1',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 500,
    transition: 'color 0.2s',
  },
  heroSection: {
    minHeight: '75vh',
    display: 'flex',
    alignItems: 'center',
    padding: '4rem 0',
  },
  heroContent: {
    maxWidth: '800px',
  },
  badge: {
    backgroundColor: 'rgba(99, 102, 241, 0.15)',
    color: '#818cf8',
    padding: '0.4rem 0.8rem',
    borderRadius: '9999px',
    fontSize: '0.85rem',
    fontWeight: 600,
    display: 'inline-block',
    marginBottom: '1.5rem',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
    marginBottom: '1rem',
  },
  gradientText: {
    background: 'linear-gradient(to right, #818cf8, #c084fc)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: '1.75rem',
    color: '#94a3b8',
    fontWeight: 500,
    marginBottom: '1.5rem',
  },
  heroText: {
    fontSize: '1.15rem',
    color: '#cbd5e1',
    lineHeight: 1.6,
    marginBottom: '2.5rem',
  },
  ctaContainer: {
    display: 'flex',
    gap: '1rem',
  },
  primaryBtn: {
    backgroundColor: '#4f46e5',
    color: '#fff',
    padding: '0.8rem 1.75rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'background-color 0.2s',
  },
  secondaryBtn: {
    border: '1px solid #334155',
    color: '#f8fafc',
    padding: '0.8rem 1.75rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'background-color 0.2s',
  },
  section: {
    padding: '5rem 0',
    borderTop: '1px solid #1e293b',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '3rem',
    letterSpacing: '-0.02em',
  },
  glassCard: {
    background: 'rgba(30, 41, 59, 0.4)',
    border: '1px solid #334155',
    backdropFilter: 'blur(8px)',
    borderRadius: '12px',
    padding: '2rem',
    marginBottom: '2rem',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  cardTitle: {
    fontSize: '1.35rem',
    fontWeight: 600,
  },
  accentText: {
    color: '#818cf8',
  },
  locationText: {
    color: '#64748b',
    fontSize: '0.9rem',
    display: 'block',
    marginTop: '0.25rem',
  },
  dateBadge: {
    backgroundColor: '#1e293b',
    padding: '0.3rem 0.75rem',
    borderRadius: '6px',
    fontSize: '0.85rem',
    color: '#cbd5e1',
  },
  bulletList: {
    paddingLeft: '1.25rem',
    color: '#cbd5e1',
  },
  bulletItem: {
    marginBottom: '0.75rem',
    lineHeight: 1.5,
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
    gap: '1.5rem',
  },
  skillCard: {
    background: '#1e293b',
    borderRadius: '10px',
    padding: '1.5rem',
border: '1px solid #334155',},skillCategoryTitle: {fontSize: '0.85rem',color: '#94a3b8',letterSpacing: '0.05em',marginBottom: '1rem',fontWeight: 700,},tagContainer: {display: 'flex',flexWrap: 'wrap',gap: '0.5rem',},skillTag: {backgroundColor: '#0f172a',color: '#e2e8f0',padding: '0.35rem 0.75rem',borderRadius: '6px',fontSize: '0.85rem',border: '1px solid #1e293b',},projectGrid: {display: 'grid',gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',gap: '2rem',},projectCard: {background: 'linear-gradient(to bottom right, #1e293b, #0f172a)',border: '1px solid #334155',borderRadius: '12px',padding: '2rem',display: 'flex',flexDirection: 'column',justifyContent: 'space-between',transition: 'transform 0.2s',},projectHeader: {marginBottom: '1rem',},projectDate: {fontSize: '0.85rem',color: '#818cf8',fontWeight: 600,},projectTitle: {fontSize: '1.4rem',fontWeight: 600,marginBottom: '1rem',lineHeight: 1.3,},projectDesc: {color: '#94a3b8',fontSize: '0.95rem',lineHeight: 1.6,marginBottom: '1.5rem',flexGrow: 1,},projectTags: {display: 'flex',flexWrap: 'wrap',gap: '0.5rem',},projTag: {backgroundColor: 'rgba(192, 132, 252, 0.1)',color: '#c084fc',padding: '0.25rem 0.6rem',borderRadius: '4px',fontSize: '0.8rem',fontWeight: 500,},footer: {textAlign: 'center',padding: '4rem 0 2rem 0',borderTop: '1px solid #1e293b',color: '#94a3b8',}};export default App;