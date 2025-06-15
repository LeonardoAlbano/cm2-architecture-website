"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users } from "lucide-react";

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6 },
};

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 border-brand-300 text-brand-700 text-xs md:text-sm"
          >
            Nossa Equipe
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-900 mb-4 md:mb-6">
            Conheça a CM² Arquitetura
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-brand-600 max-w-3xl mx-auto">
            Escritório formado por arquitetas especialistas que combinam
            experiência acadêmica com expertise prática para entregar projetos
            excepcionais.
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 mb-12 md:mb-16">
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            whileInView={fadeInUp.animate}
            initial={fadeInUp.initial}
            viewport={{ once: true }}
          >
            <Card className="h-full border-brand-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
                    <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-brand-600" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg md:text-xl font-semibold text-brand-900">
                      Fernanda Cubas
                    </h3>
                    <p className="text-sm md:text-base text-brand-600">
                      Arquiteta e Urbanista
                    </p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-brand-700 leading-relaxed mb-4">
                  Formada pela Universidade Católica de Santa Catarina em
                  Arquitetura e Urbanismo. Atua na área de Projetos
                  Arquitetônicos residenciais, comerciais e interiores.
                </p>
                <p className="text-sm md:text-base text-brand-600">
                  Especialista em aplicar novas tendências e criar soluções
                  funcionais e criativas para cada projeto.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
            whileInView={fadeInUp.animate}
            initial={fadeInUp.initial}
            viewport={{ once: true }}
          >
            <Card className="h-full border-brand-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
                    <Award className="w-6 h-6 md:w-8 md:h-8 text-brand-600" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg md:text-xl font-semibold text-brand-900">
                      Ana Claudia Michels
                    </h3>
                    <p className="text-sm md:text-base text-brand-600">
                      Arquiteta e Técnica em Edificações
                    </p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-brand-700 leading-relaxed mb-4">
                  Formada pela Unisociesc em Arquitetura e Urbanismo e Técnico
                  em Edificações. Especialista em projetos executivos e
                  documentações.
                </p>
                <p className="text-sm md:text-base text-brand-600">
                  Sempre atenta às novas legislações, oferece informações claras
                  e técnicas para todas as etapas de aprovação.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-50 to-brand-100 rounded-xl md:rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 md:mb-6">
            <Users className="w-8 h-8 md:w-12 md:h-12 text-brand-600 mb-4 sm:mb-0 sm:mr-4" />
            <h3 className="text-xl md:text-2xl font-bold text-brand-900 text-center sm:text-left">
              Equipe Multidisciplinar
            </h3>
          </div>
          <p className="text-center text-sm md:text-base lg:text-lg text-brand-700 leading-relaxed max-w-4xl mx-auto">
            Nosso escritório também conta com colaboradores da área de
            Engenharia Civil, que oferecem todo o apoio técnico e nos trazem
            maior confiança na execução dos projetos estruturais, garantindo
            segurança e qualidade em cada entrega.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
