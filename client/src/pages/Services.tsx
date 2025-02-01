import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { RocketIcon, BrainCircuitIcon, MessagesSquareIcon } from "lucide-react";

export default function Services() {
  return (
    <div className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">サービス</h1>
          <p className="text-xl text-muted-foreground mb-12">
            AI技術を活用した様々なソリューションを提供し、<br />
            お客様のビジネスの効率化をサポートします。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <RocketIcon className="w-12 h-12 text-primary mb-4" />
              <CardTitle>AI業務自動化</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                <li>• ルーチンワークの自動化</li>
                <li>• データ入力・処理の効率化</li>
                <li>• 業務フローの最適化</li>
              </ul>
              <Button asChild>
                <Link href="/contact">詳細を相談する</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BrainCircuitIcon className="w-12 h-12 text-primary mb-4" />
              <CardTitle>AI分析・予測</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                <li>• ビジネスデータの分析</li>
                <li>• 需要予測・売上予測</li>
                <li>• 異常検知・リスク分析</li>
              </ul>
              <Button asChild>
                <Link href="/contact">詳細を相談する</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessagesSquareIcon className="w-12 h-12 text-primary mb-4" />
              <CardTitle>AIチャットボット</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6 text-muted-foreground">
                <li>• カスタマーサポート自動化</li>
                <li>• 社内FAQ対応</li>
                <li>• 24時間対応の実現</li>
              </ul>
              <Button asChild>
                <Link href="/contact">詳細を相談する</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
