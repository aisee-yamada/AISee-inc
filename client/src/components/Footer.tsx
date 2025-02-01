import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">AISee株式会社</h3>
            <p className="text-sm text-muted-foreground">
              AI技術で業務効率化をサポートする<br />
              プロフェッショナル集団
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">メニュー</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services">
                  <a className="text-sm text-muted-foreground hover:text-primary">
                    サービス
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/company">
                  <a className="text-sm text-muted-foreground hover:text-primary">
                    会社概要
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-primary">
                    お問い合わせ
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} AISee株式会社. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
