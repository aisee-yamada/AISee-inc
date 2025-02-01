import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, LineChart, Clock } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1535378917042-10a22c95931a')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI技術で<br />
              ビジネスを進化させる
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              AISeeは、最新のAI技術を活用して<br />
              企業の業務効率化をサポートします
            </p>
            <Button asChild size="lg">
              <Link href="/contact">無料相談はこちら</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            AISeeが選ばれる理由
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Brain className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  最新AI技術の活用
                </h3>
                <p className="text-muted-foreground">
                  ChatGPTなど最新のAI技術を活用し、
                  効率的な業務改善を実現します。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <LineChart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  実績のある改善手法
                </h3>
                <p className="text-muted-foreground">
                  数多くの導入実績に基づく、
                  効果的な業務改善を提案します。
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  迅速なサポート体制
                </h3>
                <p className="text-muted-foreground">
                  導入後もしっかりとしたサポート体制で
                  安心してご利用いただけます。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
