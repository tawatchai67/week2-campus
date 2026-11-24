import { useState } from 'react';

export default function App() {
  const [student] = useState({
    id: '69319010005',
    name: 'นายธวัชชัย วีราชัย',
    level: 'ปวส.1/2 เทคโนโลยีสารสนเทศ วิทยาลัยอาชีวศึกษาอุดรธานี'
  });

  return (
    <div style={{ maxWidth: '840px', margin: '40px auto', padding: '24px', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '2px solid #2563eb', paddingBottom: '16px', marginBottom: '24px' }}>
        <h1 style={{ color: '#1e3a8a', margin: 0 }}>🏬 Campus Shop 2026</h1>
        <p style={{ color: '#64748b', marginTop: '6px' }}>
          วิชาการพัฒนาซอฟต์แวร์ด้วยเทคโนโลยี Front-End (31901-2004)
        </p>
      </header>

      <main style={{ background: '#f8fafc', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '1.15rem', color: '#0f172a', marginTop: 0 }}>
          👨‍💻 บัตรประจำตัวนักพัฒนา (Developer Identity Card)
        </h2>
        <div style={{ lineHeight: '1.8', color: '#334155', fontSize: '0.95rem' }}>
          <div><strong>รหัสนักศึกษา:</strong> {student.id}</div>
          <div><strong>ชื่อ-สกุล:</strong> {student.name}</div>
          <div><strong>ระดับการศึกษา:</strong> {student.level}</div>
        </div>
      </main>
    </div>
  );
}