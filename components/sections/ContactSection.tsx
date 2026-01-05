'use client';

import { useState } from 'react';
import { contact } from '@/lib/data';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Contact</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Map Section */}
          <ScrollReveal delay={0.2}>
            <Card className="p-0 overflow-hidden h-full">
              <div className="relative h-full min-h-[400px]">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8614486897373!2d${contact.longitude}!3d${contact.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDgnMDMuNiJOIDEwMcKwNDEnMTguNCJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-800">Kuala Lumpur, Malaysia</span>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.3}>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {status === 'loading' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    Failed to send message. Please try again or email me directly at {contact.email}
                  </div>
                )}
              </form>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
