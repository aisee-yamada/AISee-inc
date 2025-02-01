import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, LineChart, Clock, Users, Building2, FileSpreadsheet } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center jp-pattern">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="jp-heading text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              伝統と革新の融合<br />
              <span className="text-primary">AI技術</span>で<br />
              ビジネスを進化させる
            </h1>
            <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
              AISeeは、最新のAI技術を活用して<br />
              企業の業務効率化をサポートします
            </p>
            <Button asChild size="lg" className="rounded-none">
              <Link href="/contact">無料相談はこちら</Link>
            </Button>
          </motion.div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-bottom-right" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="jp-heading text-3xl font-bold text-center mb-4">
            AISeeが選ばれる理由
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            確かな技術と実績で、お客様のビジネスをサポートします
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg rounded-none">
              <CardContent className="pt-6">
                <Brain className="w-12 h-12 text-primary mb-4" />
                <h3 className="jp-heading text-xl font-bold mb-2">
                  最新AI技術の活用
                </h3>
                <p className="text-muted-foreground">
                  ChatGPTなど最新のAI技術を活用し、
                  効率的な業務改善を実現します。
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg rounded-none">
              <CardContent className="pt-6">
                <LineChart className="w-12 h-12 text-primary mb-4" />
                <h3 className="jp-heading text-xl font-bold mb-2">
                  実績のある改善手法
                </h3>
                <p className="text-muted-foreground">
                  数多くの導入実績に基づく、
                  効果的な業務改善を提案します。
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg rounded-none">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="jp-heading text-xl font-bold mb-2">
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

      {/* AI活用事例 Section */}
      <section className="py-20 jp-pattern">
        <div className="container">
          <h2 className="jp-heading text-3xl font-bold text-center mb-4">
            AI活用事例
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            様々な業務シーンでAIを活用し、効率化を実現します
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg rounded-none">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="jp-heading text-xl font-bold mb-2">
                  カスタマーサクセス
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 顧客対応が属人的で、解約兆候を見逃す</li>
                  <li>• FAQの整備が不十分で問い合わせが多い</li>
                  <li>• 顧客ごとの適切なフォローアップ施策を提案</li>
                </ul>
                <div className="mt-4 text-primary font-medium">
                  AI解決策：
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ 過去の会話ログから解約リスクのある顧客を特定</li>
                  <li>✓ FAQの自動作成（問い合わせ履歴をもとに改善）</li>
                  <li>✓ 顧客ごとに最適なフォローアップ施策を提案</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg rounded-none">
              <CardContent className="pt-6">
                <Building2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="jp-heading text-xl font-bold mb-2">
                  人事・採用
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 求人票作成が属人的で応募数にバラつきがある</li>
                  <li>• 書類選考者に時間がかかりすぎる</li>
                  <li>• 候補者との面接対応に手間がかかる</li>
                </ul>
                <div className="mt-4 text-primary font-medium">
                  AI解決策：
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ 効果分析をもとに魅力的な求人票を自動作成</li>
                  <li>✓ 職務経歴書を自動スクリーニング（合格率予測）</li>
                  <li>✓ 候補者との初期的面接質問対応を生成</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg rounded-none">
              <CardContent className="pt-6">
                <FileSpreadsheet className="w-12 h-12 text-primary mb-4" />
                <h3 className="jp-heading text-xl font-bold mb-2">
                  事務・経理・財務
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 経費精算が手間（領収書整理・チェック）</li>
                  <li>• キャッシュフローの予測が不正確</li>
                  <li>• 財務レポートが机上の空論になりがち</li>
                </ul>
                <div className="mt-4 text-primary font-medium">
                  AI解決策：
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ 領収書の自動認識・経費チェック</li>
                  <li>✓ 収支データから将来予測を分析</li>
                  <li>✓ 財務レポートを自動生成し経営判断を支援</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 jp-pattern">
        <div className="container text-center">
          <h2 className="jp-heading text-3xl font-bold mb-4">
            AI導入でビジネスを変革する
          </h2>
          <p className="text-muted-foreground mb-8">
            まずは無料相談から始めてみませんか？
          </p>
          <Button asChild size="lg" className="rounded-none">
            <Link href="/contact">無料相談はこちら</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}