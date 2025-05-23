import { MdPersonSearch } from "react-icons/md"; 
import data from "../../assets/members.json";
import React, { useState, useEffect } from 'react';

export default function Member() {
  const [email, setEmail] = useState('');
  const [members, setMembers] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    setMembers(data);
  }, []);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage({ type: 'error', text: 'Email tidak boleh kosong.' });
      return;
    }

    if (!validateEmail(email)) {
      setMessage({ type: 'error', text: 'Format email tidak valid.' });
      return;
    }

    const member = members.find(
      (m) => m.email?.toLowerCase().trim() === email.toLowerCase().trim()
    );

    if (member) {
      setMessage({ type: 'success', data: member });
    } else {
      setMessage({ type: 'not_found' });
    }
  };

  const renderMessage = () => {
    if (!message) return null;

    if (message.type === 'error') {
      return (
        <div className="mt-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg shadow-sm">
          ❌ {message.text}
        </div>
      );
    }

    if (message.type === 'not_found') {
      return (
        <div className="mt-6 p-4 bg-red-50 border border-red-300 text-red-800 rounded-lg shadow-sm">
          <div className="text-xl font-semibold mb-1">❌ Email tidak ditemukan</div>
          <p>Alamat email tidak terdaftar sebagai member.</p>
        </div>
      );
    }

    if (message.type === 'success') {
      const { nama, tipe_member } = message.data;

      const style = {
        silver: {
          icon: '🥈',
          bg: 'bg-gray-50',
          text: 'text-gray-800',
          border: 'border-gray-300',
        },
        gold: {
          icon: '🥇',
          bg: 'bg-yellow-50',
          text: 'text-yellow-800',
          border: 'border-yellow-300',
        },
        platinum: {
          icon: '💎',
          bg: 'bg-purple-50',
          text: 'text-purple-800',
          border: 'border-purple-300',
        }
      }[tipe_member] || {};

      return (
        <div className={`mt-6 p-5 rounded-lg shadow-md border ${style.bg} ${style.text} ${style.border} transition-all`}>
          <div className="flex items-center gap-3 mb-2 text-xl">
            <span className="text-2xl">{style.icon}</span>
            <strong style={{ fontFamily: "'Abril Fatface', serif" }}>Selamat datang, {nama}!</strong>
          </div>
          <p>Anda adalah <span className="font-abril">Member {tipe_member.charAt(0).toUpperCase() + tipe_member.slice(1)}</span>.</p>
        </div>
      );
    }
  };

  return (
    <section id="member" className="my-12 px-6 max-w-xl mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-abril text-center text-black-700 mb-6 flex items-center justify-center gap-2">
          <span role="img" aria-label="search"></span><MdPersonSearch  className="text-green-600"/> Cek Keanggotaan
        </h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
            Masukkan Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full mt-4 bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-800 transition"
          >
            Cek Keanggotaan
          </button>
        </form>

        {renderMessage()}
      </div>
    </section>
  );
}
