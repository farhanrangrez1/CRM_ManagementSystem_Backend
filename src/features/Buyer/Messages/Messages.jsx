import React, { useRef, useEffect, useState } from 'react';

const conversations = [
  {
    id: 1,
    name: 'Fashion Hub Ltd',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    lastMessage: 'We can offer you a special discount for bulk orders',
    time: '2 hours ago',
    unread: 2,
    messages: [
      { sender: 'them', text: 'Hello! Thank you for your inquiry about our premium cotton t-shirts.', time: '10:30 AM' },
      { sender: 'me', text: 'Hi, I\'m interested in ordering 500 pieces. What would be the best price you can offer?', time: '10:35 AM' },
      { sender: 'them', text: 'For 500 pieces, we can offer you ₹350 per piece instead of the regular ₹399. This includes free shipping to your location.', time: '10:40 AM' },
      { sender: 'me', text: 'That sounds good. What about the delivery timeline?', time: '10:45 AM' },
      { sender: 'them', text: 'We can deliver within 7-10 business days. We also provide tracking information once shipped.', time: '10:50 AM' },
      { sender: 'them', text: 'We can offer you a special discount for bulk orders', time: '2 hours ago' },
    ],
    online: true,
  },
  {
    id: 2,
    name: 'TechGear Solutions',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    lastMessage: 'The headphones are in stock and ready to ship',
    time: '1 day ago',
    unread: 0,
    messages: [],
    online: false,
  },
  {
    id: 3,
    name: 'Natural Beauty Co',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    lastMessage: 'Thank you for your interest in our organic prod',
    time: '3 days ago',
    unread: 1,
    messages: [],
    online: false,
  },
  {
    id: 4,
    name: 'ElectroTech India',
    avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
    lastMessage: 'We have completed your order successfully',
    time: '5 days ago',
    unread: 0,
    messages: [],
    online: false,
  },
];

function Messages() {
  const [selected, setSelected] = useState(0);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selected, conversations[selected].messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    conversations[selected].messages.push({ sender: 'me', text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
    setInput('');
  };

  const filteredConvos = conversations.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container-fluid" style={{ fontFamily: 'Inter, sans-serif', background: '#f7f9fb', minHeight: '100vh', padding: 0 }}>
      <div className="row g-0" style={{ height: '100vh' }}>
        {/* Sidebar */}
        <div className="col-12 col-md-4 col-lg-3 border-end bg-white" style={{ maxWidth: 340, minWidth: 260, height: '100vh', overflowY: 'auto' }}>
          <div className="p-4 pb-2 border-bottom">
            <h3 className="fw-bold mb-1" style={{ fontSize: '1.05rem', color: '#222' }}>Messages</h3>
            <div className="text-muted" style={{ fontSize: '0.85rem' }}>Communicate with sellers and manage your conversations</div>
          </div>
          <div className="px-4 pt-3 pb-2">
            <input type="text" className="form-control form-control-sm" placeholder="Search conversations..." value={search} onChange={e => setSearch(e.target.value)} style={{ borderRadius: 8, fontSize: '0.85rem' }} />
          </div>
          <div className="list-group list-group-flush px-2 pt-2">
            {filteredConvos.map((c, i) => (
              <button key={c.id} className={`list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 px-3 ${selected === i ? 'active' : ''}`} style={{ border: 'none', borderRadius: 10, background: selected === i ? '#f4f7fa' : 'transparent', fontWeight: selected === i ? 600 : 500, fontSize: '0.85rem', color: selected === i ? '#222' : '#222' }} onClick={() => setSelected(i)}>
                <img src={c.avatar} alt={c.name} className="rounded-circle" style={{ width: 38, height: 38, objectFit: 'cover', border: c.online ? '2px solid #22c55e' : '2px solid #e5e7eb' }} />
                <div className="flex-grow-1 text-start">
                  <div className="d-flex align-items-center gap-2">
                    <span>{c.name}</span>
                    {c.unread > 0 && <span className="badge bg-primary bg-opacity-10 ms-1" style={{ fontSize: '0.7em' }}>{c.unread}</span>}
                  </div>
                  <div className="text-muted small text-truncate" style={{ maxWidth: 170, fontSize: '0.8rem' }}>{c.lastMessage}</div>
                </div>
                <div className="d-flex flex-column align-items-end gap-1">
                  <span className="text-muted small" style={{ fontSize: '0.7em' }}>{c.time}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        {/* Chat Area */}
        <div className="col bg-light d-flex flex-column" style={{ height: '100vh', minWidth: 0 }}>
          {/* Chat Header */}
          <div className="d-flex align-items-center gap-3 border-bottom px-4 py-3 bg-white" style={{ minHeight: 72 }}>
            <img src={conversations[selected].avatar} alt={conversations[selected].name} className="rounded-circle" style={{ width: 38, height: 38, objectFit: 'cover', border: conversations[selected].online ? '2px solid #22c55e' : '2px solid #e5e7eb' }} />
            <div className="flex-grow-1">
              <div className="fw-semibold" style={{ fontSize: '0.95rem', color: '#222' }}>{conversations[selected].name}</div>
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-success" style={{ fontSize: '0.7em', background: conversations[selected].online ? '#22c55e' : '#e5e7eb', color: conversations[selected].online ? '#fff' : '#888' }}>{conversations[selected].online ? 'Online' : 'Offline'}</span>
              </div>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-light btn-sm rounded-circle" title="Call"><i className="bi bi-telephone" /></button>
              <button className="btn btn-light btn-sm rounded-circle" title="More"><i className="bi bi-three-dots-vertical" /></button>
            </div>
          </div>
          {/* Chat Messages */}
          <div className="flex-grow-1 px-4 py-4" style={{ overflowY: 'auto', background: '#f4f7fa' }}>
            {conversations[selected].messages.map((msg, idx) => (
              <div key={idx} className={`d-flex mb-3 ${msg.sender === 'me' ? 'justify-content-end' : 'justify-content-start'}`}>
                <div className={`p-3 rounded-4 shadow-sm ${msg.sender === 'me' ? 'bg-primary text-white' : 'bg-white text-dark'}`} style={{ maxWidth: '75%', fontSize: '0.85rem', borderBottomRightRadius: msg.sender === 'me' ? 0 : 18, borderBottomLeftRadius: msg.sender === 'me' ? 18 : 0, background: msg.sender === 'me' ? '#6366f1' : '#fff', color: msg.sender === 'me' ? '#fff' : '#222', boxShadow: '0 2px 8px 0 rgba(16,30,54,0.06)' }}>
                  {msg.text}
                  <div className="text-end text-muted small mt-1" style={{ fontSize: '0.7em' }}>{msg.time}</div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Chat Input */}
          <form className="border-top bg-white px-4 py-3 d-flex align-items-center gap-2" onSubmit={handleSend} autoComplete="off">
            <input type="text" className="form-control form-control-lg" placeholder="Type your message..." value={input} onChange={e => setInput(e.target.value)} style={{ borderRadius: 12, fontSize: '0.85rem' }} />
            <button className="btn btn-primary d-flex align-items-center justify-content-center" type="submit" style={{ borderRadius: 12, minWidth: 38, minHeight: 38 }}>
              <i className="bi bi-send fs-5"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Messages;