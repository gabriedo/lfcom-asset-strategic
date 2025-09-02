import { TrendingUp, Shield, Target } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "+R$ 500M",
    label: "em ativos analisados",
    description: "Volume total de operações avaliadas"
  },
  {
    icon: Target,
    value: "30-60%",
    label: "descontos típicos",
    description: "Economia média em aquisições"
  },
  {
    icon: Shield,
    value: "100%",
    label: "processos blindados",
    description: "Segurança jurídica garantida"
  }
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-surface-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center space-y-4 hover-lift p-6 rounded-2xl border border-border"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-surface-black rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-surface-white" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-display text-surface-black font-bold">
                  {stat.value}
                </h3>
                <p className="text-title text-surface-black font-semibold">
                  {stat.label}
                </p>
                <p className="text-body text-surface-medium">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};