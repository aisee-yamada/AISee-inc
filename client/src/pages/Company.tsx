import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Company() {
  return (
    <div className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">会社概要</h1>
        </motion.div>

        <Card className="mb-12">
          <CardContent className="p-6">
            <table className="w-full">
              <tbody className="divide-y">
                <tr>
                  <th className="py-4 pr-4 text-left w-1/4">会社名</th>
                  <td className="py-4">AISee株式会社</td>
                </tr>
                <tr>
                  <th className="py-4 pr-4 text-left">設立</th>
                  <td className="py-4">2022年4月</td>
                </tr>
                <tr>
                  <th className="py-4 pr-4 text-left">資本金</th>
                  <td className="py-4">1,000万円</td>
                </tr>
                <tr>
                  <th className="py-4 pr-4 text-left">代表取締役</th>
                  <td className="py-4">山田 太郎</td>
                </tr>
                <tr>
                  <th className="py-4 pr-4 text-left">事業内容</th>
                  <td className="py-4">
                    • AI技術を活用したビジネスソリューションの提供<br />
                    • 業務効率化コンサルティング<br />
                    • AIシステムの開発・導入支援
                  </td>
                </tr>
                <tr>
                  <th className="py-4 pr-4 text-left">所在地</th>
                  <td className="py-4">
                    〒100-0001<br />
                    東京都千代田区XXX-XXX<br />
                    XXXビル 5階
                  </td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        <div className="aspect-video relative mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.75146887677618!3d35.68123618019432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1695151848070!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
