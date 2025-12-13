import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-pink/20 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-foreground/80 flex items-center justify-center gap-2">
          © 2025 The Daily Momentum | Built with
          <Heart className="h-4 w-4 text-pink fill-pink" />
          for Growth, Awareness & Conscious Living
        </p>
      </div>
    </footer>
  );
}
