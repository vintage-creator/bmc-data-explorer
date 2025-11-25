import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from "recharts";
import { tradeStatistics } from "@/data/tradingData";

export const TradeDistribution = () => {
  const distributionData = [
    { name: "Win Trades", value: tradeStatistics.profitTrades, color: "hsl(var(--success))" },
    { name: "Loss Trades", value: tradeStatistics.lossTrades, color: "hsl(var(--destructive))" },
  ];

  const positionData = [
    { 
      name: "Short Positions", 
      total: tradeStatistics.shortPositions, 
      winRate: tradeStatistics.shortWinRate,
      wins: Math.round((tradeStatistics.shortPositions * tradeStatistics.shortWinRate) / 100),
      losses: tradeStatistics.shortPositions - Math.round((tradeStatistics.shortPositions * tradeStatistics.shortWinRate) / 100),
    },
    { 
      name: "Long Positions", 
      total: tradeStatistics.longPositions, 
      winRate: tradeStatistics.longWinRate,
      wins: Math.round((tradeStatistics.longPositions * tradeStatistics.longWinRate) / 100),
      losses: tradeStatistics.longPositions - Math.round((tradeStatistics.longPositions * tradeStatistics.longWinRate) / 100),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      <Card className="p-6 bg-card border-border">
        <h3 className="text-xl font-bold text-foreground mb-6">Win/Loss Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={distributionData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {distributionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-xl font-bold text-foreground mb-6">Position Type Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={positionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Bar dataKey="wins" stackId="a" fill="hsl(var(--success))" name="Wins" />
            <Bar dataKey="losses" stackId="a" fill="hsl(var(--destructive))" name="Losses" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </motion.div>
  );
};
