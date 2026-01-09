import { useState } from 'react';
import { useIsMobile } from './ui/use-mobile';
import { ArrowLeft } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'other';
  timestamp: string;
}

interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  avatar: string;
  online: boolean;
}

export function Messages() {
  const [conversations] = useState<Conversation[]>([
    {
      id: 1,
      name: 'Swift Logistics',
      lastMessage: 'Great! Looking forward to working with you.',
      timestamp: '2m ago',
      unread: 2,
      avatar: 'SL',
      online: true,
    },
    {
      id: 2,
      name: 'FreightCo',
      lastMessage: 'When can you start the Dallas route?',
      timestamp: '1h ago',
      unread: 0,
      avatar: 'FC',
      online: true,
    },
    {
      id: 3,
      name: 'ColdChain Express',
      lastMessage: 'Payment has been processed.',
      timestamp: '3h ago',
      unread: 0,
      avatar: 'CC',
      online: false,
    },
    {
      id: 4,
      name: 'Northwest Freight',
      lastMessage: 'Thanks for the smooth delivery!',
      timestamp: '1d ago',
      unread: 0,
      avatar: 'NF',
      online: false,
    },
  ]);

  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hi! I saw your bid on the Phoenix route.',
      sender: 'other',
      timestamp: '10:30 AM',
    },
    {
      id: 2,
      text: 'Yes, I\'m very interested. I have experience with flatbed transport.',
      sender: 'user',
      timestamp: '10:32 AM',
    },
    {
      id: 3,
      text: 'Perfect! Can you start on Monday?',
      sender: 'other',
      timestamp: '10:33 AM',
    },
    {
      id: 4,
      text: 'Absolutely! I\'ll be ready to go first thing Monday morning.',
      sender: 'user',
      timestamp: '10:35 AM',
    },
    {
      id: 5,
      text: 'Great! Looking forward to working with you.',
      sender: 'other',
      timestamp: '10:36 AM',
    },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [showChatOnMobile, setShowChatOnMobile] = useState(false);
  const isMobile = useIsMobile();

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
        }),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const selectedConv = conversations.find((c) => c.id === selectedConversation);

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '32px', margin: '0 0 8px 0', color: 'var(--text-primary)' }}>
          Messages
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-secondary)', margin: 0 }}>
          Communicate with clients and drivers
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '320px 1fr',
          gap: '20px',
          height: isMobile ? 'calc(100vh - 180px)' : '600px',
        }}
      >
        {/* Conversations List */}
        <div
          style={{
            backgroundColor: 'var(--bg-white)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '16px',
            overflowY: 'auto',
            display: showList ? 'block' : 'none',
          }}
        >
          <input
            type="text"
            placeholder="Search conversations..."
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              fontSize: '14px',
              marginBottom: '16px',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => {
                  setSelectedConversation(conv.id);
                  setShowChatOnMobile(true);
                }}
                style={{
                  padding: '12px',
                  backgroundColor:
                    selectedConversation === conv.id ? '#ede9fe' : 'transparent',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                  border:
                    selectedConversation === conv.id
                      ? '1px solid var(--primary-purple-light)'
                      : '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  if (selectedConversation !== conv.id) {
                    e.currentTarget.style.backgroundColor = 'var(--bg-light)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedConversation !== conv.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <div style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                  <div style={{ position: 'relative' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--primary-purple)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        flexShrink: 0,
                      }}
                    >
                      {conv.avatar}
                    </div>
                    {conv.online && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '2px',
                          right: '2px',
                          width: '12px',
                          height: '12px',
                          backgroundColor: 'var(--success-green)',
                          border: '2px solid white',
                          borderRadius: '50%',
                        }}
                      />
                    )}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '4px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '15px',
                          fontWeight: '600',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {conv.name}
                      </span>
                      {conv.unread > 0 && (
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: '600',
                            backgroundColor: 'var(--primary-purple)',
                            color: 'white',
                            padding: '2px 6px',
                            borderRadius: '10px',
                            minWidth: '18px',
                            textAlign: 'center',
                          }}
                        >
                          {conv.unread}
                        </span>
                      )}
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        marginBottom: '2px',
                      }}
                    >
                      {conv.lastMessage}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      {conv.timestamp}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div
          style={{
            backgroundColor: 'var(--bg-white)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            display: showChat ? 'flex' : 'none',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {isMobile && (
                <button
                  onClick={() => setShowChatOnMobile(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '8px',
                  }}
                >
                  <ArrowLeft size={20} />
                </button>
              )}
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--primary-purple)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 'bold',
                  }}
                >
                  {selectedConv?.avatar}
                </div>
                {selectedConv?.online && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      right: '0',
                      width: '12px',
                      height: '12px',
                      backgroundColor: 'var(--success-green)',
                      border: '2px solid white',
                      borderRadius: '50%',
                    }}
                  />
                )}
              </div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  {selectedConv?.name}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  {selectedConv?.online ? 'Online' : 'Offline'}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                style={{
                  padding: '8px 12px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '18px',
                  cursor: 'pointer',
                }}
                title="More options"
              >
                ⋮
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: '20px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: 'flex',
                  justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '70%',
                    padding: '12px 16px',
                    backgroundColor:
                      message.sender === 'user'
                        ? 'var(--primary-purple)'
                        : 'var(--bg-light)',
                    color: message.sender === 'user' ? 'white' : 'var(--text-primary)',
                    borderRadius: '12px',
                    borderBottomRightRadius: message.sender === 'user' ? '4px' : '12px',
                    borderBottomLeftRadius: message.sender === 'user' ? '12px' : '4px',
                  }}
                >
                  <div style={{ fontSize: '15px', lineHeight: '1.5', marginBottom: '4px' }}>
                    {message.text}
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      opacity: 0.7,
                      textAlign: 'right',
                    }}
                  >
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div
            style={{
              padding: '16px 20px',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              gap: '12px',
              alignItems: 'flex-end',
            }}
          >
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: '12px',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                fontSize: '15px',
                resize: 'none',
                minHeight: '44px',
                maxHeight: '120px',
                fontFamily: 'inherit',
              }}
              rows={1}
            />
            <button
              onClick={handleSendMessage}
              style={{
                padding: '12px 24px',
                backgroundColor: 'var(--primary-purple)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                height: '44px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary-purple-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary-purple)';
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}