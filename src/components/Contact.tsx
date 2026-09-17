import React from 'react';
import { ArrowUpRight, Send, MessageCircle } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/siteData';
import { WhatsAppIcon, LinkedInIcon, InstagramIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-white border-t border-zinc-200/70">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl">
          {/* Section Tag */}
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-600 uppercase tracking-wider mb-4">
            <Send className="w-4 h-4 text-emerald-600" />
            <span>Contato direto</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 mb-4">
            {personalInfo.contact.title}
          </h2>

          {/* Text */}
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed mb-10">
            {personalInfo.contact.description}
          </p>

          {/* Contact Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {socialLinks.map((item) => {
              const isWhatsApp = item.icon === 'whatsapp';
              const isLinkedIn = item.icon === 'linkedin';
              const isInstagram = item.icon === 'instagram';

              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-200 ${
                    isWhatsApp
                      ? 'bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800 shadow-md hover:-translate-y-1'
                      : 'bg-zinc-50 border-zinc-200/90 text-zinc-900 hover:bg-white hover:border-zinc-300 hover:shadow-card hover:-translate-y-1'
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isWhatsApp
                          ? 'bg-zinc-800 text-emerald-400'
                          : 'bg-white border border-zinc-200/80 text-zinc-700 group-hover:border-zinc-300'
                      }`}
                    >
                      {isWhatsApp && <WhatsAppIcon className="w-5 h-5" />}
                      {isLinkedIn && <LinkedInIcon className="w-5 h-5" />}
                      {isInstagram && <InstagramIcon className="w-5 h-5" />}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isWhatsApp && (
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Principal
                        </span>
                      )}
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                          isWhatsApp ? 'text-zinc-400 group-hover:text-white' : 'text-zinc-400 group-hover:text-zinc-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <h4
                      className={`text-base font-bold tracking-tight mb-1 ${
                        isWhatsApp ? 'text-white' : 'text-zinc-900'
                      }`}
                    >
                      {item.name}
                    </h4>
                    <p
                      className={`text-xs ${
                        isWhatsApp ? 'text-zinc-300' : 'text-zinc-600'
                      }`}
                    >
                      {item.label}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Informal footer note */}
          <div className="mt-8 flex items-center gap-2 text-xs text-zinc-600 font-mono">
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Mensagens diretas, sem intermediários ou formulários burocráticos.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
