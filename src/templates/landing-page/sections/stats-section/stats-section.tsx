"use client";

import { motion } from "framer-motion";
import { Award, Users, Building2, Clock } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Building2,
      number: "150+",
      label: "Projetos Realizados",
      description: "Residenciais e comerciais",
    },
    {
      icon: Users,
      number: "95%",
      label: "Clientes Satisfeitos",
      description: "Avaliação de excelência",
    },
    {
      icon: Award,
      number: "15+",
      label: "Anos de Experiência",
      description: "No mercado de arquitetura",
    },
    {
      icon: Clock,
      number: "30",
      label: "Dias Médios",
      description: "Para entrega de projetos",
    },
  ];

  return (
    <section className="py-20 bg-brand-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Números que Falam por Si
          </h2>
          <p className="text-xl text-brand-200 max-w-3xl mx-auto">
            Nossa experiência e dedicação se refletem nos resultados que
            alcançamos junto aos nossos clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-brand-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-700 transition-colors">
                <stat.icon className="w-10 h-10 text-brand-200" />
              </div>
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-white mb-2"
              >
                {stat.number}
              </motion.div>
              <h3 className="text-xl font-semibold text-brand-100 mb-2">
                {stat.label}
              </h3>
              <p className="text-brand-300">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
