import Head from 'next/head';
import Image from 'next/image';
import { ReactTyped } from 'react-typed';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.backgroound}></div>  
    <div className={styles.waveWrapper}>
  <svg className={styles.wave} viewBox="0 0 1440 320">
    <path
      fill="#0f172a"
      fillOpacity="1"
      d="M0,160L60,160C120,160,240,160,360,154.7C480,149,600,139,720,144C840,149,960,171,1080,170.7C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    ></path>
  </svg>
</div>
      <Head>
        <title>Ade Rizky Pratama | Portofolio</title>
      </Head>
      <nav className={styles.navbar}>
      <li><a href="#projects">Proyek</a></li>
  <ul>
    <li><a href="#about">Tentang</a></li>
    <li><a href="#skills">Keahlian</a></li>
    <li><a href="#contact">Kontak</a></li>
  </ul>
</nav>
<section id="about" className={styles.about}>Gevariel</section>
<section id="skills" className={styles.skills}>Programing & Gamer</section>
<section id="contact" className={styles.contact}>Instagram</section>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Halo, Saya <span className={styles.name}>Ade Rizky Pratama</span>
        </h1>
        <ReactTyped
          strings={['Mahasiswa IT', 'Programmer', 'Pembelajar Sejak SD']}
          typeSpeed={40}
          backSpeed={50}
          loop
          className={styles.typing}
        />
        <div className={styles.imageContainer}>
        <section className={styles.about}>
  <h2>Tentang Saya</h2>
  <p>
  Saya adalah mahasiswa IT yang tertarik pada dunia pemrograman sejak SD. Awalnya, ketertarikan itu muncul karena terinspirasi dari film. 
    Namun ternyata passion saya memang mengoperasikan komputer, kenapa saya bilang passion karena pada saat membedah suatu permasalahan
    yang berkaitan dengan elektronik khususnya komputer saya sangat antusias, dari situ saya tau bahwa saya memang berada dibidang tersebut. Untuk saat ini saya sudah menguasai bahasa Pascal dan JavaScript, serta sedikit memahami dunia peretasan.
  </p>
  <section className={styles.skills}>
  <h2>Keahlian</h2>
  <ul>
    <li>Bahasa Pemrograman: Pascal, JavaScript</li>
    <li>Framework & Library: React.js, Next.js </li>
    <li>Tools: Visual Studio Code, Git</li>
    <li>Topik Khusus: Dasar Peretasan, Logika Pemrograman, Web Development</li>
  </ul>
  <section className={styles.contact}>
  <h2>Kontak Saya</h2>
  <p>Email: gevarielcielo@gmail.com</p>
  <p>Instagram: @gevarielcielo</p>
  <p>GitHub: <a href="https://github.com/Anonymouse775" target="_blank" rel="noopener noreferrer">Anonymouse775</a></p>
</section>
</section>
</section>
<section id="projects" className={styles.projects}>
  <h2>Proyek Saya</h2>
  <div className={styles.projectList}>
    <div className={styles.projectCard}>
      <h3>Portofolio Pribadi</h3>
      <p>Website ini dibuat dengan Next.js sebagai latihan dan showcase.</p>
    </div>
    <div className={styles.projectCard}>
      <h3>Simulasi Kalkulator</h3>
      <p>Proyek latihan menggunakan JavaScript murni untuk membuat kalkulator.</p>
    </div>
    <div className={styles.projectCard}>
      <h3>Website Sekolah (Dummy)</h3>
      <p>Desain awal website sekolah berbasis HTML dan CSS.</p>
    </div>
  </div>
</section>
          <Image
            src="/Ade.jpg"
            alt="Ade Rizky Pratama"
            width={200}
            height={200}
            className={styles.image}
          />
        </div>
        <audio id="musik" autoPlay loop>
  <source src="/musik.mp3" type="audio/mpeg" />
  Browser Anda tidak mendukung pemutar audio.
</audio>
<button onClick={() => document.getElementById('musik').play()} className={styles.playButton}>
  Mainkan Musik
</button>
<footer className={styles.footer}>
  <p>© {new Date().getFullYear()} Ade Rizky Pratama. Dibuat dengan Next.js</p>
</footer>
      </main>
    </div>
  );
}