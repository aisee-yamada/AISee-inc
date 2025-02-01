import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "ホーム" },
    { href: "/services", label: "サービス" },
    { href: "/blog", label: "ブログ" },
    { href: "/company", label: "会社概要" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <a className="flex items-center space-x-2">
              <span className="font-bold text-xl text-primary">AISee</span>
            </a>
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex-nowrap">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href}>
                    <a
                      className={cn(
                        "px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:text-primary",
                        location === item.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </a>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button asChild className="hidden md:flex whitespace-nowrap">
          <Link href="/contact">お問い合わせ</Link>
        </Button>
      </nav>
    </header>
  );
}