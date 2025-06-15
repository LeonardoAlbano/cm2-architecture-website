"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="pt-20 pb-12 md:pb-16 bg-gradient-to-b from-brand-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <span className="bg-brand-100 text-brand-800 px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-medium">
                ✨ Construindo Sonhos por CM²
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-6xl font-bold text-brand-900 leading-tight"
            >
              Transforme Sua
              <span className="text-brand-600 block">Visão em Realidade</span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-brand-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Especialistas em projetos arquitetônicos e documentação.
              Oferecemos soluções funcionais e criativas para projetos
              residenciais, comerciais e de interiores.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:gap-4 sm:justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-brand-900 hover:bg-brand-800 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg w-full sm:w-auto"
                onClick={() => scrollToSection("contato")}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-brand-300 text-brand-700 hover:bg-brand-50 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg w-full sm:w-auto"
                onClick={() => scrollToSection("servicos")}
              >
                <Play className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                Conheça Nossos Serviços
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative bg-gradient-to-br from-brand-100 to-brand-200 rounded-2xl lg:rounded-3xl p-6 md:p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-brand-300 rounded-full -translate-y-24 translate-x-24 md:-translate-y-32 md:translate-x-32 opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-brand-400 rounded-full translate-y-16 -translate-x-16 md:translate-y-24 md:-translate-x-24 opacity-20"></div>

              <div className="relative z-10 text-center space-y-4 md:space-y-6">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-xl md:rounded-2xl mx-auto flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl md:text-3xl">🏗️</span>
                </motion.div>

                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold text-brand-900">
                    Projetos Completos
                  </h3>
                  <p className="text-sm md:text-base text-brand-600">
                    Da concepção à execução
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
