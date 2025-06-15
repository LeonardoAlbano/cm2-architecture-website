"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Home,
  Droplet,
  Zap,
  Shield,
  Camera,
  FileText,
  Scale,
  Users,
} from "lucide-react";

export default function ServiceSection() {
  const services = [
    {
      icon: Home,
      title: "Projeto Arquitetônico",
      description:
        "Projetos residenciais, comerciais e de interiores com soluções criativas e funcionais.",
    },
    {
      icon: Building2,
      title: "Projeto Estrutural",
      description:
        "Projetos estruturais seguros e eficientes em parceria com engenheiros civis.",
    },
    {
      icon: Droplet,
      title: "Projeto Hidráulico e Sanitário",
      description: "Sistemas hidráulicos e sanitários completos e otimizados.",
    },
    {
      icon: Zap,
      title: "Projeto Elétrico",
      description:
        "Instalações elétricas planejadas com segurança e eficiência energética.",
    },
    {
      icon: Shield,
      title: "Projeto Preventivo",
      description:
        "Projetos contra incêndio seguindo todas as normas de segurança.",
    },
    {
      icon: Camera,
      title: "Imagens 3D",
      description:
        "Visualizações realistas para melhor compreensão do projeto final.",
    },
    {
      icon: FileText,
      title: "Averbação da Construção",
      description:
        "Documentação completa para regularização junto aos órgãos competentes.",
    },
    {
      icon: Scale,
      title: "Convenção Condominial",
      description:
        "Elaboração de convenções e regimentos internos para condomínios.",
    },
    {
      icon: Users,
      title: "Instituição de Condomínio",
      description: "Assessoria completa para criação e gestão de condomínios.",
    },
  ];

  return (
    <section id="servicos" className="py-16 md:py-20 bg-brand-50">
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
            Nossos Serviços
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-900 mb-4 md:mb-6">
            Soluções Completas em Arquitetura
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-brand-600 max-w-3xl mx-auto">
            Do projeto inicial à documentação final, oferecemos um portfólio
            completo de serviços para transformar suas ideias em realidade.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-white bg-white hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-100 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-200 transition-colors">
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-brand-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-brand-900 mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-brand-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-brand-900 mb-4">
              Precisa de um Orçamento Personalizado?
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-brand-600 mb-6">
              Entre em contato conosco e receba uma proposta sob medida para seu
              projeto.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById("contato");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-brand-900 hover:bg-brand-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium text-base md:text-lg transition-colors w-full sm:w-auto"
            >
              Solicitar Orçamento
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
