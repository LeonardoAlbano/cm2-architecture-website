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
      className="pt-20 pb-16 bg-gradient-to-b from-brand-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <span className="bg-brand-100 text-brand-800 px-4 py-2 rounded-full text-sm font-medium">
                ✨ Construindo Sonhos por CM²
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-brand-900 leading-tight"
            >
              Transforme Sua{" "}
              <span className="text-brand-600 block">Visão em Realidade</span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-brand-600 leading-relaxed max-w-2xl"
            >
              Especialistas em projetos arquitetônicos e documentação.
              Oferecemos soluções funcionais e criativas para projetos
              residenciais, comerciais e de interiores.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-brand-900 hover:bg-brand-800 text-white px-8 py-4 text-lg"
                onClick={() => scrollToSection("contato")}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-brand-300 text-brand-700 hover:bg-brand-50 px-8 py-4 text-lg"
                onClick={() => scrollToSection("servicos")}
              >
                <Play className="mr-2 w-5 h-5" />
                Conheça Nossos Serviços
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-brand-100 to-brand-200 rounded-3xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-300 rounded-full -translate-y-32 translate-x-32 opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-400 rounded-full translate-y-24 -translate-x-24 opacity-20"></div>

              <div className="relative z-10 text-center space-y-6">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="w-24 h-24 bg-white rounded-2xl mx-auto flex items-center justify-center shadow-lg"
                >
                  <span className="text-3xl">🏗️</span>
                </motion.div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-brand-900">
                    Projetos Completos
                  </h3>
                  <p className="text-brand-600">Da concepção à execução</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
