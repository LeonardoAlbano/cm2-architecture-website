"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <Building2 className="w-8 h-8 text-brand-200" />
              <span className="text-2xl font-bold">CM² Arquitetura</span>
            </div>
            <p className="text-brand-200 leading-relaxed">
              Construindo sonhos através de projetos arquitetônicos
              excepcionais. Especialistas em soluções criativas e funcionais.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center hover:bg-brand-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center hover:bg-brand-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center hover:bg-brand-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Serviços</h3>
            <ul className="space-y-3 text-brand-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Projeto Arquitetônico
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Projeto Estrutural
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Projetos Complementares
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Imagens 3D
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentação
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Links Rápidos</h3>
            <ul className="space-y-3 text-brand-200">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-white transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-white transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Contato</h3>
            <div className="space-y-4 text-brand-200">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>(47) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>contato@cm2arquitetura.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>Santa Catarina, Brasil</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-brand-800 mt-12 pt-8 text-center text-brand-300"
        >
          <p>© 2025 CM² Arquitetura. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
