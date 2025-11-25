import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Shield, Target, AlertCircle } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    title: "Exceptional Win Rate",
    description: "80.65% win rate significantly exceeds industry standards. Your strategy demonstrates strong market timing and risk management.",
    type: "success",
  },
  {
    icon: Target,
    title: "Profit Factor Strength",
    description: "4.40 profit factor indicates excellent risk-reward ratio. For every $1 risked, you're making $4.40 in profit.",
    type: "success",
  },
  {
    icon: Shield,
    title: "Controlled Drawdown",
    description: "10.74% relative drawdown shows disciplined risk management. Consider maintaining position sizing during volatile periods.",
    type: "info",
  },
  {
    icon: Lightbulb,
    title: "Position Type Balance",
    description: "Both long (80% win rate) and short (80.95% win rate) positions perform exceptionally well. Your strategy adapts to market conditions.",
    type: "info",
  },
  {
    icon: AlertCircle,
    title: "Consecutive Wins Streak",
    description: "23 consecutive wins generated $4,714. While impressive, ensure you maintain strict stop-losses to protect gains.",
    type: "warning",
  },
];

export const InsightsTips = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Card className="p-6 bg-card border-border">
        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-primary" />
          Performance Insights & Tips
        </h3>
        
        <div className="space-y-4">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            const getColor = () => {
              if (insight.type === "success") return "text-success";
              if (insight.type === "warning") return "text-warning";
              return "text-primary";
            };
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="flex gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors border border-border/50"
              >
                <div className={`flex-shrink-0 ${getColor()}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{insight.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{insight.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Card>
    </motion.div>
  );
};
