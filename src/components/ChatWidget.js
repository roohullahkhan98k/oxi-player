'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, BookOpen, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [touched, setTouched] = useState({ email: false, name: false });
  const [faqOpenId, setFaqOpenId] = useState(null);

  const emailError = !email && touched.email ? 'Email is required' : '';
  const nameError = !name && touched.name ? 'Name is required' : '';

  function handleSubmit(e) {
    e.preventDefault();
    setTouched({ email: true, name: true });
    if (!email || !name) return;
    // Submit or start chat action placeholder
  }

  return (
    <div className="fixed right-10 bottom-5 z-60" style={{ fontFamily: "'Product Sans','Segoe UI',sans-serif" }}>
      <button
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        onClick={() => setIsOpen(!isOpen)}
        className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full shadow-lg cursor-pointer relative"
        style={{ backgroundColor: '#e40014' }}
      >
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-white"
          initial={false}
          animate={{ opacity: isOpen ? 1 : 0, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={26} />
        </motion.span>
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-white"
          initial={false}
          animate={{ opacity: isOpen ? 0 : 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <MessageCircle size={26} />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:static sm:p-0"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, x: 60, scaleY: 0.98 }}
              animate={{ opacity: 1, x: 0, scaleY: 1 }}
              exit={{ opacity: 0, x: 60, scaleY: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl overflow-hidden shadow-2xl w-[90vw] sm:w-[360px] md:w-[420px] lg:w-[440px]"
              style={{ background: activeTab === 'faq' ? '#ffffff' : 'linear-gradient(180deg, #bf232e 0%, #ffffff 70%)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 max-h-[80vh] overflow-hidden relative">
                <button
                  aria-label="Close chat panel"
                  onClick={() => setIsOpen(false)}
                  className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded hover:bg-black/10 cursor-pointer"
                >
                  <ChevronDown size={18} />
                </button>
              <div className="mb-3 text-white/90 text-sm">
                Please avoid asking questions that can already be answered on our FAQ button.
              </div>

              <div className="flex gap-2 mb-4">
                <button
                  type="button"
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm cursor-pointer ${
                    activeTab === 'chat' ? 'text-white' : 'text-black/70'
                  }`}
                  style={{ backgroundColor: activeTab === 'chat' ? '#e40014' : 'transparent' }}
                  onClick={() => setActiveTab('chat')}
                >
                  <MessageCircle size={16} /> Chat
                </button>
                <button
                  type="button"
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm cursor-pointer ${
                    activeTab === 'faq' ? 'text-white' : 'text-black/70'
                  }`}
                  style={{ backgroundColor: activeTab === 'faq' ? '#e40014' : 'transparent' }}
                  onClick={() => setActiveTab('faq')}
                >
                  <BookOpen size={16} /> FAQ
                </button>
              </div>

              {activeTab === 'chat' ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-black/80">
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                      className="mt-1 w-full rounded-md border border-black/10 bg-white/90 px-3 py-2 text-sm text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/20"
                      placeholder="Your name"
                    />
                    {nameError ? <p className="mt-1 text-xs text-red-600">{nameError}</p> : null}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-black/80">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                      className="mt-1 w-full rounded-md border border-black/10 bg-white/90 px-3 py-2 text-sm text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/20"
                      placeholder="you@example.com"
                    />
                    {emailError ? <p className="mt-1 text-xs text-red-600">Email is required</p> : null}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-black/80">
                      I am here for <span className="text-red-600">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <select
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="w-full appearance-none rounded-md border border-black/10 bg-white/90 pr-8 pl-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black/20 transition"
                      >
                        <option value="" disabled hidden>Select reason</option>
                        <option value="app">App activation via PayPal</option>
                        <option value="support">End user support</option>
                        <option value="reseller">IBX reseller support</option>
                      </select>
                      <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-black/50">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full inline-flex items-center justify-between rounded-md px-4 py-3 text-white items-center cursor-pointer"
                    style={{ backgroundColor: '#e40014' }}
                  >
                    <span>Start chatting</span>
                    <Send size={18} className="opacity-90 shrink-0" />
                  </button>
                </form>
              ) : (
                <FAQSection faqOpenId={faqOpenId} setFaqOpenId={setFaqOpenId} />
              )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}


function FAQSection({ faqOpenId, setFaqOpenId }) {
  const list = [
    {
      id: 'manual-android-tv',
      title: 'Manual Installation on Android TV',
      content: (
        <div className="space-y-3 text-black/80">
          <p>If our apps aren't published yet on Google Play or were removed:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Install Downloader app from Google Play</li>
            <li>Open Downloader app and enter code:</li>
          </ol>
          <div className="grid grid-cols-1 gap-2">
            <div className="rounded-md bg-white/80 border border-black/10 p-3">
              <div className="font-medium">OXI Player (Default)</div>
              <div className="text-xs">Downloader Code: 1171959</div>
            </div>
            <div className="rounded-md bg-white/80 border border-black/10 p-3">
              <div className="font-medium">OXI Player Pro 🆕</div>
              <div className="text-xs">Downloader Code: 923441</div>
            </div>
            <div className="rounded-md bg-white/80 border border-black/10 p-3">
              <div className="font-medium">OXI Pro Player TV 🆕</div>
              <div className="text-xs">Downloader Code: 6402995</div>
            </div>
            <div className="rounded-md bg-white/80 border border-black/10 p-3">
              <div className="font-medium">OXI Pro</div>
              <div className="text-xs">Downloader Code: 474637</div>
            </div>
          </div>
          <p className="text-xs">*Only with Activation Codes</p>
          <p>Our apps are intended for Android TV devices and are not optimized for phones and tablets.</p>
        </div>
      ),
    },
    {
      id: 'license-activation',
      title: 'App License Activation',
      content: (
        <div className="space-y-2 text-black/80">
          <p>
            After 7 days trial, visit our website → "Activate License" → Enter credentials (MAC ID and Device Key) →
            Complete purchase.
          </p>
          <p>
            If you want to activate app through PayPal or if you're having trouble with gateway payments in your
            country, please contact our support team via live-chat.
          </p>
        </div>
      ),
    },
    {
      id: 'magic-fix',
      title: 'Fix app with a magic trick',
      content: (
        <div className="space-y-2 text-black/80">
          <p>Having issues with app on Smart TV? Try this simple step:</p>
          <p>🔌 Unplug your TV and network devices from power for 1–2 minutes. Then plug them back in and reopen app.</p>
          <p>✅ It actually works in some cases!</p>
          <p>🙄 Smart TVs often have cache and limited memory, which can cause performance problems.</p>
        </div>
      ),
    },
    {
      id: 'stuck-loading',
      title: 'App stuck on a loading page',
      content: (
        <div className="space-y-2 text-black/80">
          <div>
            <div className="font-medium">Possible Causes:</div>
            <ul className="list-disc list-inside ml-2">
              <li>Playlist errors</li>
              <li>Internet connection issues</li>
              <li>ISP blocking</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Solution:</div>
            <ul className="list-disc list-inside ml-2">
              <li>Restart app 2-3 times</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">If persists:</div>
            <ul className="list-disc list-inside ml-2">
              <li>Remove current playlist (in your account dashboard)</li>
              <li>Restart app</li>
              <li>Check if the demo playlist works</li>
              <li>If demo works: Contact your IPTV provider</li>
              <li>If demo fails: Check internet/ISP for potential blocks</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'reset-playlist',
      title: 'Resetting App Playlist',
      content: (
        <div className="space-y-2 text-black/80">
          <ol className="list-decimal list-inside space-y-1">
            <li>Open the store</li>
            <li>Select "Reset" → "App"</li>
            <li>Enter MAC ID & Device Key</li>
            <li>Add new working playlist after reset</li>
          </ol>
          <p className="text-xs">Resetting Playlist will remove all existing playlists on your device.</p>
        </div>
      ),
    },
    {
      id: 'switch-mac',
      title: 'Transfer activation to another TV',
      content: (
        <div className="space-y-2 text-black/80">
          <ol className="list-decimal list-inside space-y-1">
            <li>Login with old MAC ID at Switch MAC ID</li>
            <li>Navigate to "Switch MAC ID"</li>
            <li>Add new MAC ID and confirm</li>
          </ol>
        </div>
      ),
    },
    {
      id: 'trial-expired',
      title: 'Lifetime Paid But App Shows Trial Expired',
      content: (
        <div className="space-y-2 text-black/80">
          <p>Unfortunately, some unethical IPTV resellers are taking advantage of the system by:</p>
          <ul className="list-disc list-inside ml-2">
            <li>Reusing MAC addresses and device keys from ex-customers and switching activation to another customer.</li>
          </ul>
          <div className="font-medium">To protect activation on app, please follow these important tips:</div>
          <ul className="list-disc list-inside ml-2">
            <li>If you switch to a new IPTV provider, change your Device Key immediately.</li>
            <li>Only work with trusted and verified IPTV providers.</li>
          </ul>
          <p>Thank you for your understanding and continued support!</p>
        </div>
      ),
    },
    {
      id: 'become-reseller',
      title: 'Become OXI Player Reseller Today',
      content: (
        <div className="space-y-2 text-black/80">
          <p>Expand your IPTV business with OXI Player's premium solutions.</p>
          <div className="font-medium">Why Choose Us?</div>
          <ul className="list-disc list-inside ml-2">
            <li>20+ high-quality apps across all major platforms</li>
            <li>1-year & lifetime license options</li>
            <li>Exclusive reseller pricing</li>
            <li>Dedicated support and resources</li>
            <li>All major devices (Android, iOS, Windows, macOS, Roku, Smart TVs)</li>
          </ul>
          <button className="mt-2 w-full inline-flex items-center justify-center rounded-md px-4 py-2 text-white" style={{ backgroundColor: '#e40014' }}>
            Start Registration For FREE
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="text-sm">
      <AnimatePresence mode="wait">
        {faqOpenId ? (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <button
              type="button"
              className="mb-3 inline-flex items-center gap-2 text-black cursor-pointer"
              onClick={() => setFaqOpenId(null)}
            >
              <ChevronLeft size={16} /> Click to go back to FAQs list
            </button>
            <div className="rounded-lg bg-white border border-black/10 p-4">
              <div className="font-semibold mb-2 text-black">{list.find((i) => i.id === faqOpenId)?.title}</div>
              <div className={faqOpenId === 'manual-android-tv' ? 'max-h-64 overflow-y-auto pr-2' : ''}>
                {list.find((i) => i.id === faqOpenId)?.content}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-2"
          >
            {list.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFaqOpenId(item.id)}
                className="w-full text-left rounded-md bg-white border border-black/10 px-3 py-2 flex items-center justify-between hover:bg-white cursor-pointer"
              >
                <span className="text-black">{item.title}</span>
                <ChevronRight size={16} className="text-black/50" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


