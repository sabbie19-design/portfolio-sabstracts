import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';
import { WindowModal } from '../components/WindowModal';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

function SocialBadge({ link, text, color, textColor }: { link: string; text: string; color: string; textColor: string }) {
  return (
    <a href={link} className={`px-6 py-2 ${color} ${textColor} font-pixel text-xl uppercase tracking-widest border-4 border-black shadow-brutal hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all inline-block`}>
      {text}
    </a>
  );
}

export default function ContactPage() {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorDetail, setErrorDetail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) {
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: senderName,
          from_email: senderEmail,
          message: message,
          to_email: 'sabcabigon19@gmail.com',
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setSenderName('');
      setSenderEmail('');
      setMessage('');
    } catch (err: unknown) {
      console.error('EmailJS Error:', err);
      const errorMsg = err && typeof err === 'object' && 'text' in err
        ? (err as { text: string }).text
        : 'Unknown error';
      setErrorDetail(errorMsg);
      setStatus('error');
    }
  };

  return (
    <main className="pt-[80px] px-4 sm:px-8 max-w-7xl mx-auto relative overflow-hidden sm:overflow-visible pb-[30vh]">
      {/* Single rigid folder: tab + body animate together */}
      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10"
      >
        {/* Folder Tab — flush on top, no sticky */}
        <div className="inline-block px-4 py-2 sm:px-8 sm:py-3 bg-[#BFA5FF] border-4 border-black border-b-0 rounded-t-2xl font-bold font-paytone text-base sm:text-xl uppercase relative top-[4px] shadow-[inset_2px_2px_0px_rgba(255,255,255,0.4)]">
          <span className="text-black tracking-wide drop-shadow-[1px_1px_0px_rgba(255,255,255,0.5)]">04. CONTACT.html</span>
        </div>

        {/* Folder Body */}
        <div className="border-4 border-black shadow-brutal-lg bg-[#D4C4FF] min-h-[80vh] p-4 sm:p-8 relative z-10 rounded-b-2xl rounded-tr-2xl pb-16">
          <div className="absolute inset-0 bg-white/10 rounded-xl pointer-events-none" style={{ mixBlendMode: 'overlay' }}></div>
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 items-center bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] p-6 sm:p-10 rounded-xl border-4 border-black shadow-brutal bg-white/40 mix-blend-multiply mt-4">
          <div className="flex-1 w-full relative z-10">
            <WindowModal title="new_message.exe" barColor="bg-[#AEE1FF]" icon="💌" className="rotate-[-1deg]">
              <form
                className="flex flex-col gap-4 font-pixel text-xl"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block mb-1 font-bold">To:</label>
                  <input
                    type="text"
                    className="w-full border-2 border-black p-2 bg-gray-100 shadow-[inset_2px_2px_0px_rgba(0,0,0,0.2)] focus:outline-none"
                    value="sabcabigon19@gmail.com"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block mb-1 font-bold">Your Name:</label>
                  <input
                    type="text"
                    name="from_name"
                    className="w-full border-2 border-black p-2 bg-white shadow-[inset_2px_2px_0px_rgba(0,0,0,0.2)] focus:outline-none focus:bg-yellow-50"
                    placeholder="Your Name"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-bold">From:</label>
                  <input
                    type="email"
                    name="from_email"
                    className="w-full border-2 border-black p-2 bg-white shadow-[inset_2px_2px_0px_rgba(0,0,0,0.2)] focus:outline-none focus:bg-yellow-50"
                    placeholder="your_email@domain.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-bold">Message:</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full border-2 border-black p-2 bg-white shadow-[inset_2px_2px_0px_rgba(0,0,0,0.2)] focus:outline-none focus:bg-yellow-50 resize-none"
                    placeholder="Hey! Let's build something cool..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 bg-[#FF94C7] border-4 border-black shadow-brutal font-paytone text-2xl text-white star-stroke hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'SENDING...' : 'SEND ➔'}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#B2F0E6] border-4 border-black p-3 text-center font-pixel text-lg shadow-brutal"
                  >
                    ✅ Message sent successfully! I'll get back to you soon ✨
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#FFB5D8] border-4 border-black p-3 text-center font-pixel text-lg shadow-brutal"
                  >
                    ❌ Failed to send. {errorDetail || 'Please reconnect your EmailJS service or try again.'}
                  </motion.div>
                )}
              </form>
            </WindowModal>
          </div>

          <div className="flex-1 w-full flex flex-col gap-6 items-center lg:items-start text-center lg:text-left z-10">
            <h2 className="font-paytone text-5xl sm:text-7xl uppercase leading-none text-black drop-shadow-[4px_4px_0_white]">
              Let's be<br /> <span className="text-[#8844FF] star-stroke">Friends!</span>
            </h2>
            <p className="font-comic text-2xl max-w-sm font-bold bg-[#FFD166] p-3 border-4 border-black inline-block rotate-2 shadow-brutal">
              Open for new opportunities, collabs, or just sharing retro playlists! 🛼✨
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 w-full">
              <SocialBadge link="#" text="GitHub" color="bg-[#000]" textColor="text-white" />
              <SocialBadge link="#" text="LinkedIn" color="bg-[#0A66C2]" textColor="text-white" />
              <SocialBadge link="#" text="Twitter" color="bg-[#1DA1F2]" textColor="text-white" />
            </div>

            <div className="mt-8 flex gap-4 w-full justify-center lg:justify-start overflow-hidden flex-wrap">
              <img src="https://img.shields.io/badge/Designed_for-Windows_95-008080?style=for-the-badge&logo=windows&logoColor=white" alt="Badge" className="h-10 shadow-[2px_2px_0_0_rgba(0,0,0,1)]" />
              <img src="https://img.shields.io/badge/Best_viewed_in-Netscape-000080?style=for-the-badge&logo=netscape&logoColor=white" alt="Badge" className="h-10 shadow-[2px_2px_0_0_rgba(0,0,0,1)]" />
            </div>
          </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
