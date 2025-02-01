import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">お問い合わせ</h1>
          <p className="text-xl text-muted-foreground mb-12">
            AI導入に関するご相談、お見積もりのご依頼など、<br />
            お気軽にお問い合わせください。
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
