import { useState } from 'react'
import './App.css'

function App() {
  const [sapaan, setSapaan] = useState("Halo! Disini kalian akan mengenal aku lebih dalam 😊💕.")

  return (
    <>

      <section id="center">
        <div>
          <h1>Ratu Lintang Wati</h1>
          <p>
            Mahasiswa <code>Pendidikan Ilmu Komputer</code> di Universitas Pendidikan Indonesia.
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => alert(sapaan)}
        >
          Klik untuk Sapa 👋
        </button>

       <div className="galeri-foto">
  <img src="/gambar1.jpeg" alt="Foto Ratu Lintang Wati" />
  <img src="/gambar2.jpeg" alt="Foto with Pilkom'B Girls" />
  <img src="/gambar3.jpeg" alt="Foto rapat komisi pengawasan BLM Kemakom" />
</div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">

        <div id="docs">
          <h2>Tentang Saya</h2>
          <p>Latar belakang</p>
          <ul>
            <li>
              <span>🎓 Universitas Pendidikan Indonesia</span>
            </li>
            <li>
              <span>💻 Program Studi: Pendidikan Ilmu Komputer angkatan 2025</span>
            </li>
            <li>
              <span>🤗 Hobby: Mendengarkan musik, membaca komik, novel,dan menulis </span>
            </li>
          </ul>
        </div>
        
        <div id="social">
          <h2>Hubungi Saya</h2>
          <p>Mari terhubung melalui platform di bawah ini</p>
          <ul>
            <li>
              <a href="https://github.com/ratulinn" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://instagram.com/ratulinnn" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:rl9377373@gmail.com" target="_blank" rel="noreferrer">
                Email
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App