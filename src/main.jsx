// Portfolio entry point
import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Activity, ArrowDownRight, ArrowUpRight, BadgeCheck, BookOpen, BriefcaseBusiness,
  Bug, CheckCircle2, ChevronRight, Code2, Cpu, Database, ExternalLink, FileDown,
  Fingerprint, FolderGit2, Github, GraduationCap, HeartPulse, Home, Mail, Menu,
  Network, Radar, Search, Shield, ShieldAlert, ShieldCheck, Terminal, X, Zap
} from 'lucide-react';
import './styles.css';

const GITHUB_USERNAME = 'Shivanshu22-eng';
const GITHUB_PROFILE = `https://github.com/${GITHUB_USERNAME}`;
const LINKEDIN_URL = 'https://www.linkedin.com/in/shivanshu-c';
const EMAIL = 'shivanshuchaturvedi678@gmail.com';
const RESUME_URL = '/Shivanshu_Chaturvedi_Resume.pdf';

const projects = [
  { title: 'API Sentinel', category: 'API SECURITY', status: 'IN DEVELOPMENT', accent: 'red', icon: ShieldAlert,
    description: 'API security monitoring and vulnerability detection platform. Planned core includes OpenAPI endpoint discovery, bounded fuzzing, deterministic detection rules, risk scoring, telemetry, dashboard and reports.',
    stack: ['FastAPI', 'React', 'PostgreSQL'], repo: null, demo: null, featured: true },
  { title: 'Healthcare Appointment & Prescription System', category: 'FULL-STACK', status: 'PROJECT', accent: 'blue', icon: HeartPulse,
    description: 'Healthcare management platform concept covering appointment booking, patient records, doctor availability and digital prescription workflows backed by a relational database.',
    stack: ['Node.js', 'JavaScript', 'MySQL'], repo: null, demo: null },
  { title: 'AI-Based Phishing Detection', category: 'ML / CYBERSECURITY', status: 'PROJECT', accent: 'purple', icon: Fingerprint,
    description: 'Machine-learning project for identifying suspicious URLs and messages, with a FastAPI inference backend and a lightweight web interface. Model performance should be documented from actual test results.',
    stack: ['Python', 'Scikit-learn', 'FastAPI'], repo: 'https://github.com/Shivanshu22-eng/-PhishGuard-AI-', demo: null },
  { title: 'Real-Time Covert Channel Detection', category: 'NETWORK SECURITY', status: 'PROJECT', accent: 'green', icon: Network,
    description: 'Network-analysis project exploring detection of ICMP and DNS tunneling using packet inspection and traffic-analysis tooling.',
    stack: ['Python', 'Scapy', 'Wireshark'], repo: null, demo: null },
  { title: 'Python Encryption / Decryption Utility', category: 'CRYPTOGRAPHY', status: 'PROJECT', accent: 'cyan', icon: ShieldCheck,
    description: 'Individual Python utility for encrypting and decrypting data. Add the exact algorithms, key-handling approach and test coverage that your implementation supports.',
    stack: ['Python', 'Cryptography'], repo: null, demo: null },
  { title: 'Manufacturing Analytics', category: 'DATA / FULL-STACK', status: 'GITHUB REPOSITORY', accent: 'orange', icon: Activity,
    description: 'Analytics platform repository documented with a PostgreSQL data model, FastAPI endpoints, React pages, SQL analytical views, Docker Compose services and dashboarding.',
    stack: ['PostgreSQL', 'FastAPI', 'React', 'Docker'], repo: `${GITHUB_PROFILE}/Manufacturing-Analytics`, demo: null },
  { title: 'AI Business Analyst', category: 'AI / ANALYTICS', status: 'GITHUB REPOSITORY', accent: 'purple', icon: Cpu,
    description: 'Repository created for an AI Business Analyst portfolio project. Update this description with the implemented features and current completion status before presenting it as a finished project.',
    stack: ['AI', 'Analytics'], repo: `${GITHUB_PROFILE}/AI_Business_Analyst`, demo: null },
  { title: 'Online Book Reading Website', category: 'WEB DEVELOPMENT', status: 'EARLIER PROJECT', accent: 'blue', icon: BookOpen,
    description: 'Earlier web-development project. Add the repository, screenshots and the exact features you implemented if you want recruiters to review it.',
    stack: ['Web Development'], repo: null, demo: null },
  { title: 'Inventory Management System', category: 'APPLICATION DEVELOPMENT', status: 'EARLIER PROJECT', accent: 'orange', icon: Database,
    description: 'Inventory-management project previously referenced in application materials. Add implementation details and a source-code link before treating it as a featured project.',
    stack: ['Application Development', 'Database'], repo: null, demo: null },
  { title: 'Java Game', category: 'JAVA DEVELOPMENT', status: 'GITHUB REPOSITORY', accent: 'orange', icon: Code2,
    description: 'Java game project repository. Review the source code and README for gameplay, controls and implementation details.',
    stack: ['Java'], repo: 'https://github.com/Shivanshu22-eng/java-game', demo: null },
  { title: 'Assistant Node Application', category: 'BACKEND / APPLICATION', status: 'GITHUB REPOSITORY', accent: 'cyan', icon: Terminal,
    description: 'Node.js application repository. Review the source and README to confirm the implemented features and setup steps.',
    stack: ['Node.js', 'JavaScript'], repo: 'https://github.com/chandraiiit/assistant-node-application', demo: null }
];

const skillGroups = [
  { name: 'Programming', icon: Code2, skills: ['Java', 'C++', 'Python', 'C', 'JavaScript'] },
  { name: 'Web & APIs', icon: Terminal, skills: ['React', 'Node.js', 'Next.js', 'FastAPI', 'REST APIs', 'HTML', 'CSS'] },
  { name: 'Data & Databases', icon: Database, skills: ['MySQL', 'PostgreSQL', 'Pandas', 'NumPy', 'Scikit-learn'] },
  { name: 'Cybersecurity', icon: Shield, skills: ['Burp Suite', 'Nmap', 'Wireshark', 'Metasploit', 'Hashcat', 'Hydra', 'Aircrack-ng', 'Wazuh SIEM', 'Kali Linux'] },
  { name: 'Tools & Workflow', icon: FolderGit2, skills: ['Git', 'GitHub', 'Maven', 'IntelliJ IDEA', 'Postman'] }
];

const experience = [
  { company: 'SAR India Digital Pvt. Ltd.', role: 'Java Development Intern', date: 'Jun 2026 — Aug 2026', bullets: ['Developed RESTful APIs in Java as part of the Java team.', 'Diagnosed and resolved 50+ API bugs.', 'Performed API validation and troubleshooting.'] },
  { company: 'Indian Bank', role: 'Cybersecurity & Networking Intern', date: 'Jun 2025 — Aug 2025', bullets: ['Documented and analyzed cyber-fraud cases to identify threat trends and preventive measures.', 'Explored banking network security and secure transaction infrastructure.'] }
];

const navItems = [
  ['Overview', 'overview', Home], ['Projects', 'projects', FolderGit2], ['Skills', 'skills', Cpu],
  ['Experience', 'experience', BriefcaseBusiness], ['Education', 'education', GraduationCap], ['GitHub', 'github', Github], ['Contact', 'contact', Mail]
];

function SectionTitle({ eyebrow, title, icon: Icon }) {
  return <div className="section-title"><div className="section-eyebrow"><Icon size={14} /> {eyebrow}</div><h2>{title}</h2></div>;
}
function Tag({ children }) { return <span className="tag">{children}</span>; }
function ProjectCard({ project, onOpen }) {
  const Icon = project.icon;
  return <article className={`project-card accent-${project.accent}`}>
    <div className="project-top"><div className="project-icon"><Icon size={20}/></div><span className="project-category">{project.category}</span></div>
    <h3>{project.title}</h3><p>{project.description}</p>
    <div className="tag-list">{project.stack.map(s => <Tag key={s}>{s}</Tag>)}</div>
    <div className="project-bottom"><span className={`status status-${project.status === 'IN DEVELOPMENT' ? 'dev' : 'ok'}`}><span/> {project.status}</span>
      <button className="text-button" onClick={() => onOpen(project)}>Inspect project <ChevronRight size={15}/></button>
    </div>
  </article>;
}
function App() {
  const [active, setActive] = useState('overview');
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('ALL');
  const [query, setQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [githubRepos, setGithubRepos] = useState([]);
  const [githubState, setGithubState] = useState('loading');
  const [githubUser, setGithubUser] = useState(null);
  const [lastUpdated] = useState(new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }));

  useEffect(() => {
    let alive = true;
    async function loadGithub() {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`)
        ]);
        if (!userRes.ok || !repoRes.ok) throw new Error('GitHub API unavailable');
        const user = await userRes.json();
        const repos = await repoRes.json();
        if (!alive) return;
        setGithubUser(user);
        setGithubRepos(Array.isArray(repos) ? repos.filter(r => !r.fork).slice(0, 8) : []);
        setGithubState('connected');
      } catch {
        if (alive) setGithubState('offline');
      }
    }
    loadGithub();
    return () => { alive = false; };
  }, []);

  const filteredProjects = useMemo(() => projects.filter(p => {
    const matchesFilter = filter === 'ALL' || (filter === 'SECURITY' && /SECURITY|CYBER|CRYPTOGRAPHY/.test(p.category)) || (filter === 'DEVELOPMENT' && /FULL-STACK|WEB DEVELOPMENT|APPLICATION DEVELOPMENT|DATA/.test(p.category));
    const q = query.toLowerCase();
    const matchesQuery = !q || `${p.title} ${p.description} ${p.stack.join(' ')} ${p.category}`.toLowerCase().includes(q);
    return matchesFilter && matchesQuery;
  }), [filter, query]);

  const jump = (id) => { setActive(id); setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const emailHref = EMAIL ? `mailto:${EMAIL}` : 'mailto:?subject=Portfolio%20enquiry';

  return <div className="app-shell">
    <div className="scanline" aria-hidden="true" />
    <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
      <div className="brand"><div className="brand-mark"><Terminal size={24}/></div><div><strong>SHIVANSHU</strong><span>SECURITY CONSOLE <i>v1.0</i></span></div></div>
      <div className="side-status"><span className="pulse-dot"/> PORTFOLIO ONLINE</div>
      <nav>{navItems.map(([label, id, Icon]) => <button key={id} className={`nav-link ${active === id ? 'nav-active' : ''}`} onClick={() => jump(id)}><Icon size={17}/><span>{label}</span>{active === id && <span className="nav-cursor">▌</span>}</button>)}</nav>
      <div className="sidebar-bottom"><div className="terminal-label"><span>root@shivanshu</span>:~$ whoami</div><p>Building secure systems.<br/>Learning in public.<br/><span>Shipping with intent_</span></p><a className="side-github" href={GITHUB_PROFILE} target="_blank" rel="noreferrer"><Github size={16}/> github.com/{GITHUB_USERNAME}</a><div className="side-foot"><span>SYS.STATUS <b>STABLE</b></span><span>UPDATED {lastUpdated.toUpperCase()}</span></div></div>
    </aside>

    <main className="main-content">
      <header className="mobile-header"><button className="icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button><span>SHIVANSHU<span className="green">_</span></span><a href={GITHUB_PROFILE} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={19}/></a></header>
      <section className="hero panel" id="overview">
        <div className="hero-grid"/>
        <div className="hero-copy"><div className="eyebrow"><span className="live-dot"/> COMPUTER SCIENCE UNDERGRADUATE <span className="eyebrow-divider">/</span> UPES</div>
          <h1>SHIVANSHU<br/><span>CHATURVEDI</span></h1>
          <div className="role-line"><span className="prompt">&gt;_</span> SOFTWARE DEVELOPER <b>|</b> CYBERSECURITY ENTHUSIAST</div>
          <p className="hero-description">I build software, work with APIs, and explore how systems can be made more secure. Currently pursuing Computer Science at UPES, with hands-on experience in Java development and cybersecurity.</p>
          <div className="hero-actions"><button className="primary-button" onClick={() => jump('projects')}><Terminal size={17}/> EXPLORE PROJECTS <ArrowUpRight size={15}/></button><a className="outline-button" href={RESUME_URL} onClick={e => { if (RESUME_URL === '/Shivanshu_Chaturvedi_Resume.pdf') { /* Place your resume PDF in public/ */ } }}><FileDown size={16}/> RESUME PDF</a><button className="outline-button" onClick={() => jump('contact')}><Mail size={16}/> CONTACT</button></div>
          <div className="hero-meta"><span><span className="meta-key">LOCATION</span> Dehradun, India</span><span><span className="meta-key">STATUS</span> <b className="green">Open to opportunities</b></span></div>
        </div>
        <div className="hero-visual"><div className="radar-ring ring-one"/><div className="radar-ring ring-two"/><div className="radar-ring ring-three"/><div className="radar-sweep"/><div className="monogram"><span>S</span><span>C</span></div><div className="visual-label label-top"><span className="green">●</span> IDENTITY VERIFIED <small>SC / 2027</small></div><div className="visual-label label-bottom"><Activity size={13}/> SIGNAL ACTIVE <small>DEVELOPMENT MODE</small></div><div className="visual-coordinates">30.3165° N<br/>78.0322° E</div></div>
        <div className="hero-index">PROFILE / 001</div>
      </section>

      <div className="metrics-row">
        <div className="metric panel"><div className="metric-icon"><FolderGit2 size={19}/></div><div><strong>11</strong><span>PROJECTS TO EXPLORE</span></div><small>01—09</small></div>
        <div className="metric panel"><div className="metric-icon"><BriefcaseBusiness size={19}/></div><div><strong>02</strong><span>INTERNSHIPS</span></div><small>2025—26</small></div>
        <div className="metric panel"><div className="metric-icon"><GraduationCap size={20}/></div><div><strong>7.01<span className="metric-unit">/10</span></strong><span>CGPA · LATEST SHARED</span></div><small>UPES</small></div>
        <div className="metric panel"><div className="metric-icon"><ShieldCheck size={20}/></div><div><strong>2027</strong><span>GRADUATION TARGET</span></div><small>ACTIVE</small></div>
      </div>

      <section className="section-block" id="projects">
        <SectionTitle eyebrow="01 / FIELD NOTES" title="Project Arsenal" icon={FolderGit2}/>
        <p className="section-intro">A collection of software, data and security work. Project status is labelled transparently; repositories and demos appear where available.</p>
        <div className="project-controls"><div className="filter-tabs">{['ALL','SECURITY','DEVELOPMENT'].map(f => <button key={f} className={filter === f ? 'filter-active' : ''} onClick={() => setFilter(f)}>{f}</button>)}</div><label className="search-box"><Search size={15}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search projects..."/><span>/</span></label></div>
        <div className="projects-grid">{filteredProjects.map(p => <ProjectCard key={p.title} project={p} onOpen={setSelectedProject}/>)}</div>
        {filteredProjects.length === 0 && <div className="empty-state">No matching projects found. Try another search term.</div>}
      </section>

      <section className="section-block" id="skills">
        <SectionTitle eyebrow="02 / CAPABILITIES" title="Technical Loadout" icon={Cpu}/>
        <p className="section-intro">Tools and technologies used across coursework, projects and internships. Familiarity varies by tool.</p>
        <div className="skills-layout"><div className="skills-list">{skillGroups.map((group, i) => { const Icon = group.icon; return <div className="skill-group" key={group.name}><div className="skill-heading"><Icon size={17}/><span>{group.name}</span><span className="skill-count">{String(i+1).padStart(2,'0')}</span></div><div className="skill-tags">{group.skills.map(s => <Tag key={s}>{s}</Tag>)}</div></div>; })}</div>
          <div className="console-panel"><div className="console-top"><span><span className="live-dot"/> CAPABILITY CHECK</span><span>READ_ONLY</span></div><div className="console-body"><p className="console-muted">$ cat focus_areas.txt</p><p><span className="green">[01]</span> API development & testing</p><p><span className="green">[02]</span> Application security</p><p><span className="green">[03]</span> Network traffic analysis</p><p><span className="green">[04]</span> Backend engineering</p><p><span className="green">[05]</span> Applied machine learning</p><div className="console-divider"/><p className="console-muted">$ echo $LEARNING_MODE</p><p className="green">CONTINUOUS <span className="blink">█</span></p></div></div></div>
      </section>

      <section className="section-block" id="experience">
        <SectionTitle eyebrow="03 / FIELD EXPERIENCE" title="Work History" icon={BriefcaseBusiness}/>
        <div className="timeline">{experience.map((job, i) => <article className="timeline-item" key={job.company}><div className="timeline-marker">{i === 0 ? <Code2 size={17}/> : <Shield size={17}/>}</div><div className="timeline-card panel"><div className="timeline-header"><div><span className="timeline-index">EXPERIENCE / 0{i+1}</span><h3>{job.company}</h3><h4>{job.role}</h4></div><span className="date-chip">{job.date}</span></div><ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul></div></article>)}</div>
      </section>

      <section className="section-block" id="education">
        <SectionTitle eyebrow="04 / ACADEMIC RECORD" title="Education" icon={GraduationCap}/>
        <div className="education-card panel"><div className="education-symbol"><GraduationCap size={28}/></div><div className="education-info"><span className="timeline-index">BACHELOR'S DEGREE · 2023—2027</span><h3>University of Petroleum and Energy Studies (UPES)</h3><p>B.Tech — Computer Science Engineering</p><p className="muted">Specialization: Cyber Security & Forensics</p></div><div className="education-score"><span>CGPA</span><strong>7.01</strong><small>/ 10.00</small></div></div>
      </section>

      <section className="section-block" id="github">
        <SectionTitle eyebrow="05 / LIVE REPOSITORY INTEL" title="GitHub Connection" icon={Github}/>
        <div className="github-panel panel"><div className="github-profile"><div className="github-avatar"><Github size={27}/></div><div><h3>{GITHUB_USERNAME}</h3><a href={GITHUB_PROFILE} target="_blank" rel="noreferrer">github.com/{GITHUB_USERNAME} <ExternalLink size={12}/></a><p>Public profile and repositories fetched directly from the GitHub API.</p></div><a className="outline-button github-visit" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">OPEN PROFILE <ArrowUpRight size={14}/></a></div>
          <div className="github-stats"><div><span>PUBLIC REPOSITORIES</span><strong>{githubUser?.public_repos ?? '—'}</strong></div><div><span>FOLLOWERS</span><strong>{githubUser?.followers ?? '—'}</strong></div><div><span>FOLLOWING</span><strong>{githubUser?.following ?? '—'}</strong></div><div><span>API STATUS</span><strong className={githubState === 'connected' ? 'green' : 'amber'}>{githubState === 'connected' ? 'CONNECTED' : githubState === 'loading' ? 'CONNECTING' : 'RETRY LATER'}</strong></div></div>
          <div className="repo-heading"><h4><Terminal size={15}/> RECENT PUBLIC REPOSITORIES</h4><span>LIVE API · NO TOKEN</span></div>
          {githubState === 'loading' && <div className="repo-placeholder">Connecting to GitHub public API<span className="blink">_</span></div>}
          {githubState === 'offline' && <div className="repo-placeholder">Could not load live repository data. The profile link above still works; GitHub may be rate-limiting requests or the network may be offline.</div>}
          {githubRepos.length > 0 && <div className="repo-grid">{githubRepos.slice(0,6).map(repo => <a className="repo-card" key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer"><div><FolderGit2 size={16}/><span className="repo-visibility">PUBLIC</span></div><strong>{repo.name}</strong><p>{repo.description || 'No repository description provided yet.'}</p><footer><span><i className="language-dot"/> {repo.language || 'Mixed'}</span><span><StarIcon/> {repo.stargazers_count}</span><span><ArrowUpRight size={13}/></span></footer></a>)}</div>}
          <div className="github-footnote"><CheckCircle2 size={14}/> GitHub data loads live in the browser. The site does not need your password or a personal access token.</div>
        </div>
      </section>

      <section className="contact-section panel" id="contact"><div className="contact-grid"/><div><div className="section-eyebrow"><span className="live-dot"/> CHANNEL OPEN</div><h2>Have a problem<br/>worth <span>solving?</span></h2><p>I'm interested in software engineering, API development, QA and cybersecurity opportunities.</p><div className="contact-actions"><a className="primary-button" href={emailHref}><Mail size={16}/> SEND A MESSAGE <ArrowUpRight size={15}/></a><a className="outline-button" href={GITHUB_PROFILE} target="_blank" rel="noreferrer"><Github size={16}/> GITHUB</a></div></div><div className="contact-side"><div className="contact-code">&gt; initiate_contact()<br/><span>// response channel: email / github</span><br/><span className="green">return STATUS_READY;</span></div><div className="contact-link"><span>GITHUB</span><a href={GITHUB_PROFILE} target="_blank" rel="noreferrer">@{GITHUB_USERNAME} <ArrowUpRight size={13}/></a></div><div className="contact-link"><span>LINKEDIN</span><a href={LINKEDIN_URL} target="_blank" rel="noreferrer">linkedin.com/in/shivanshu-c <ArrowUpRight size={13}/></a></div></div></section>
      <footer className="main-footer"><span>© {new Date().getFullYear()} SHIVANSHU CHATURVEDI</span><span><span className="live-dot"/> BUILT FOR THE OPEN WEB</span><span>NO TRACKERS · JUST PROJECTS</span></footer>
    </main>

    {selectedProject && <div className="modal-backdrop" onClick={() => setSelectedProject(null)}><div className="project-modal panel" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close details"><X size={18}/></button><div className="section-eyebrow">PROJECT INSPECTOR / {selectedProject.category}</div><h2>{selectedProject.title}</h2><p>{selectedProject.description}</p><div className="tag-list">{selectedProject.stack.map(s => <Tag key={s}>{s}</Tag>)}</div><div className="modal-status"><span className={`status status-${selectedProject.status === 'IN DEVELOPMENT' ? 'dev' : 'ok'}`}><span/> {selectedProject.status}</span></div><div className="modal-actions">{selectedProject.repo ? <a className="primary-button" href={selectedProject.repo} target="_blank" rel="noreferrer"><Github size={16}/> OPEN REPOSITORY <ArrowUpRight size={14}/></a> : <a className="outline-button" href={`${GITHUB_PROFILE}?tab=repositories`} target="_blank" rel="noreferrer"><Github size={16}/> CHECK GITHUB REPOSITORIES <ArrowUpRight size={14}/></a>}<a className="outline-button" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">GITHUB PROFILE</a></div><p className="modal-note"><BadgeCheck size={14}/> Only repository links that are known have been connected. Add the correct repository URL for the other projects before publishing.</p></div></div>}
  </div>;
}
function StarIcon(){return <span className="star-icon">★</span>}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
