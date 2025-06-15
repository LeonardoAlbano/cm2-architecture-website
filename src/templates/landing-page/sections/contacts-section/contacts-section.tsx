"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(47) 99999-9999",
      action: "tel:+5547999999999",
      description: "Ligue agora para falar conosco",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Fale Conosco",
      action: "https://wa.me/5547999999999",
      description: "Tire suas dúvidas rapidamente",
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@cm2arquitetura.com",
      action: "mailto:contato@cm2arquitetura.com",
      description: "Envie sua mensagem detalhada",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Santa Catarina",
      action: "#",
      description: "Atendemos toda a região",
    },
  ];

  return (
    <section id="contato" className="py-16 md:py-20 bg-white">
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
            Entre em Contato
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-900 mb-4 md:mb-6">
            Vamos Construir Juntos o Seu Sonho
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-brand-600 max-w-3xl mx-auto">
            Estamos prontos para transformar suas ideias em projetos reais.
            Entre em contato e descubra como podemos ajudar você.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4 mb-12 md:mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-brand-200 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-100 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-brand-200 transition-colors">
                    <method.icon className="w-6 h-6 md:w-8 md:h-8 text-brand-600" />
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-brand-900 mb-1 md:mb-2">
                    {method.title}
                  </h3>
                  <p className="text-xs md:text-base text-brand-700 font-medium mb-1 md:mb-2">
                    {method.value}
                  </p>
                  <p className="text-xs md:text-sm text-brand-600">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-brand-200 shadow-xl">
            <CardContent className="p-6 md:p-8 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-900 mb-4 md:mb-6">
                    Pronto para Começar Seu Projeto?
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-brand-600 leading-relaxed mb-6 md:mb-8">
                    Nossa equipe está preparada para atender suas necessidades
                    com profissionalismo e dedicação. Solicite um orçamento
                    personalizado e descubra como podemos transformar suas
                    ideias em realidade.
                  </p>

                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                      <span className="text-sm md:text-base text-brand-700">
                        Consulta inicial gratuita
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                      <span className="text-sm md:text-base text-brand-700">
                        Orçamento personalizado
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                      <span className="text-sm md:text-base text-brand-700">
                        Atendimento especializado
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <motion.a
                    href="https://wa.me/5547999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 md:py-4 text-base md:text-lg"
                    >
                      <MessageCircle className="mr-2 md:mr-3 w-4 h-4 md:w-5 md:h-5" />
                      WhatsApp - Resposta Rápida
                      <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                  </motion.a>

                  <motion.a
                    href="tel:+5547999999999"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-brand-300 text-brand-700 hover:bg-brand-50 py-3 md:py-4 text-base md:text-lg"
                    >
                      <Phone className="mr-2 md:mr-3 w-4 h-4 md:w-5 md:h-5" />
                      Ligar Agora
                    </Button>
                  </motion.a>

                  <motion.a
                    href="mailto:contato@cm2arquitetura.com"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-brand-300 text-brand-700 hover:bg-brand-50 py-3 md:py-4 text-base md:text-lg"
                    >
                      <Mail className="mr-2 md:mr-3 w-4 h-4 md:w-5 md:h-5" />
                      Enviar E-mail
                    </Button>
                  </motion.a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
