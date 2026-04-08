"use client";
 
import React, { useState } from 'react';
import { Cinzel, Lato } from "next/font/google";
 
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
 
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
 
export default function PortfolioLayout() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [contactForm, setContactForm] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [contactStatus, setContactStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
 
  // Handle form input changes
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
 
  // Handle form submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setContactStatus('');
 
    try {
      // Initialize EmailJS
      if (!window.emailjs) {
        await loadEmailJS();
      }
 
      // Send email
      const result = await window.emailjs.send(
        'service_fnpnsoj', // Replace with your EmailJS service ID
        'template_n07gu9n', // Replace with your EmailJS template ID
        {
          from_name: contactForm.from_name,
          from_email: contactForm.from_email,
          subject: contactForm.subject,
          message: contactForm.message,
          to_email: 'jvrmgmt@gmail.com' // Replace with your email
        },
        'E19rMyI5Z6c0-2gGI' // Replace with your EmailJS public key
      );
 
      if (result.status === 200) {
        setContactStatus('Message sent successfully! I\'ll get back to you soon.');
        setContactForm({
          from_name: '',
          from_email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      setContactStatus('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
 
  // Load EmailJS script
  const loadEmailJS = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js';
      script.onload = () => {
        window.emailjs.init('E19rMyI5Z6c0-2gGI'); // Replace with your public key
        resolve();
      };
      document.head.appendChild(script);
    });
  };
 

  // Sample portfolio data - replace with your actual videos
  const projects = [
    {
      id: 1,
      title: "Commercial Spot",
      category: "Advertising",
      videoUrl: "https://example.com/video1.mp4",
      thumbnail: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=250&fit=crop",
      description: "30-second commercial for luxury brand"
    },
    {
      id: 2,
      title: "Music Video",
      category: "Music",
      videoUrl: "https://example.com/video2.mp4",
      thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=250&fit=crop",
      description: "Full production music video"
    },
    {
      id: 3,
      title: "Documentary",
      category: "Documentary",
      videoUrl: "https://example.com/video3.mp4",
      thumbnail: "https://images.unsplash.com/photo-1533961817551-99a4d4a4b88a?w=400&h=250&fit=crop",
      description: "Short-form documentary piece"
    },
    {
      id: 4,
      title: "Brand Film",
      category: "Corporate",
      videoUrl: "https://example.com/video4.mp4",
      thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=250&fit=crop",
      description: "Company brand story film"
    },
    {
      id: 5,
      title: "Event Coverage",
      category: "Events",
      videoUrl: "https://example.com/video5.mp4",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=250&fit=crop",
      description: "Live event videography and editing"
    },
    {
      id: 6,
      title: "Social Content",
      category: "Social Media",
      videoUrl: "https://example.com/video6.mp4",
      thumbnail: "https://images.unsplash.com/photo-1516534775068-bb57100d4f10?w=400&h=250&fit=crop",
      description: "Short-form social media content"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-background-primary)' }}>
      {/* Navigation */}


      {/* Hero Section */}
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        
        overflow: 'hidden',
        backgroundColor: '#000'
      }}>
        {/* Video Background */}
        <div style={{
          position: 'absolute',
          inset: '0',
          zIndex: 0
        }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: '0.4'
            }}
          >
            <source src="https://res.cloudinary.com/dhfndsnb6/video/upload/Timeline_1_dmi7af.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div style={{
            position: 'absolute',
            inset: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.25)'
          }} />
        </div>

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '800px',
          color: '#fff'
        }}>
          <h1 style={{
            fontSize: '72px',
                   fontFamily: cinzel.style.fontFamily,
            fontWeight: '500',
            margin: '0 0 1rem 0',
            color: '#fff',
            lineHeight: '1.2'
            
          }}>Javi Cervera</h1>
          <h2 style={{
            fontSize: '16px',
                   fontFamily: lato.style.fontFamily,
            fontWeight: '400',
            margin: '0 0 2rem 0',
            color: 'rgba(255, 255, 255, 0.8)',
            letterSpacing: '2px'
          }}> Videographer and Content Creator </h2>
          <p style={{
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.7)',
            margin: '0 0 2rem 0',
            lineHeight: '1.8'
          }}></p>
          
  
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
          animation: 'bounce 2s infinite'
        }}>
          <div style={{
            width: '24px',
            height: '40px',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '8px 0'
            
          }}>
            <div style={{
              width: '3px',
              height: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '2px',
              animation: 'scroll 1.5s infinite'
            }} />
          </div>
        </div>

        <style>{`
          @keyframes bounce {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes scroll {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(12px); opacity: 0; }
          }
        `}</style>
      </section>

    

       {/* Portfolio Grid - Vertical Videos */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: 'var(--color-background-secondary)',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1500px'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '500',
            color: 'var(--color-text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            margin: '0 0 3rem 0'
          }}>Portfolio</h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            justifyItems: 'center'
          }}>
            {[
              { id: 1, src: 'https://res.cloudinary.com/dhfndsnb6/video/upload/Timeline_122_00000000_pwaujc.mp4' }, 
              { id: 2, src: 'https://res.cloudinary.com/dhfndsnb6/video/upload/Timeline_122_00108000_gzpxjs.mp4' },
              { id: 3, src: 'https://res.cloudinary.com/dhfndsnb6/video/upload/Timeline_122_00089012_r7unvl.mp4' },
              { id: 4, src: 'https://res.cloudinary.com/dhfndsnb6/video/upload/Timeline_122_00088561_hnphh3.mp4' },
              { id: 5, src: 'https://res.cloudinary.com/dhfndsnb6/video/upload/Timeline_122_00089748_fotuuw.mp4' },
              { id: 6, src: 'https://res.cloudinary.com/dhfndsnb6/video/upload/Timeline_1221_yljjf2.mp4' }
            ].map((video) => (
              <div
                key={video.id}
                style={{
                  borderRadius: 'var(--border-radius-lg)',
                  overflow: 'hidden',
                  backgroundColor: '#000',
                  aspectRatio: '9 / 16',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  width: '100%',
                  maxWidth: '500px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <video
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  controls
                  muted
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser doesn't support HTML5 video.
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div>
          <p></p>
        </div>
      </section>


      {/* Contact Section */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: 'var(--color-background-secondary)',
        borderTop: '1px solid var(--color-border-tertiary)',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <h3 style={{
            fontSize: '28px',
            fontWeight: '500',
            margin: '0 0 1rem 0',
            color: 'var(--color-text-primary)',
            fontFamily: cinzel.style.fontFamily
          }}>Let's Work Together</h3>
          <p style={{
            color: 'var(--color-text-secondary)',
            margin: '0 0 2rem 0',
            fontSize: '16px',
            lineHeight: '1.6',
            fontFamily: lato.style.fontFamily
          }}>
            Have a project in mind? Send me a message and I'll get back to you soon.
          </p>
 
          <form onSubmit={handleContactSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {/* Name Input */}
            <input
              type="text"
              placeholder="Your Name"
              name="from_name"
              value={contactForm.from_name}
              onChange={handleContactChange}
              required
              style={{
                padding: '12px 16px',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid var(--color-border-secondary)',
                backgroundColor: 'var(--color-background-primary)',
                color: 'var(--color-text-primary)',
                fontSize: '14px',
                fontFamily: lato.style.fontFamily,
                transition: 'border-color 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--color-border-primary)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--color-border-secondary)';
              }}
            />
 
            {/* Email Input */}
            <input
              type="email"
              placeholder="Your Email"
              name="from_email"
              value={contactForm.from_email}
              onChange={handleContactChange}
              required
              style={{
                padding: '12px 16px',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid var(--color-border-secondary)',
                backgroundColor: 'var(--color-background-primary)',
                color: 'var(--color-text-primary)',
                fontSize: '14px',
                fontFamily: lato.style.fontFamily,
                transition: 'border-color 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--color-border-primary)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--color-border-secondary)';
              }}
            />
 
            {/* Subject Input */}
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={contactForm.subject}
              onChange={handleContactChange}
              required
              style={{
                padding: '12px 16px',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid var(--color-border-secondary)',
                backgroundColor: 'var(--color-background-primary)',
                color: 'var(--color-text-primary)',
                fontSize: '14px',
                fontFamily: lato.style.fontFamily,
                transition: 'border-color 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--color-border-primary)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--color-border-secondary)';
              }}
            />
 
            {/* Message Textarea */}
            <textarea
              placeholder="Your Message"
              name="message"
              value={contactForm.message}
              onChange={handleContactChange}
              required
              rows="5"
              style={{
                padding: '12px 16px',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid var(--color-border-secondary)',
                backgroundColor: 'var(--color-background-primary)',
                color: 'var(--color-text-primary)',
                fontSize: '14px',
                fontFamily: lato.style.fontFamily,
                transition: 'border-color 0.3s ease',
                outline: 'none',
                resize: 'vertical'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--color-border-primary)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--color-border-secondary)';
              }}
            />
 
            {/* Status Message */}
            {contactStatus && (
              <p style={{
                color: contactStatus.includes('successfully') ? '#4ade80' : '#ef4444',
                fontSize: '14px',
                margin: '0.5rem 0 0 0'
              }}>
                {contactStatus}
              </p>
            )}
 
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: '12px 32px',
                backgroundColor: isSubmitting ? 'var(--color-text-tertiary)' : 'var(--color-text-primary)',
                color: 'var(--color-background-primary)',
                textDecoration: 'none',
                borderRadius: 'var(--border-radius-md)',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'opacity 0.3s ease',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                border: 'none',
                fontFamily: lato.style.fontFamily,
                opacity: isSubmitting ? 0.6 : 1
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) e.target.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) e.target.style.opacity = '1';
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        borderTop: '1px solid var(--color-border-tertiary)',
        textAlign: 'center',
        color: 'var(--color-text-tertiary)',
        fontSize: '12px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '1rem'
        }}>
          <a 
            href="https://www.instagram.com/javi.movv/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = 'var(--color-text-primary)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = 'var(--color-text-secondary)';
            }}
          >
            Instagram
          </a>
          <a 
            href="https://www.linkedin.com/in/javiercerveralopez/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = 'var(--color-text-primary)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = 'var(--color-text-secondary)';
            }}
          >
            LinkedIn
          </a>
        </div>
        <p style={{ margin: '0' }}>© 2026 Javi Cervera. All rights reserved.</p>
      </footer>
    </div>
  );
}