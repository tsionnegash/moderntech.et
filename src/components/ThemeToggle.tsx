import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="pink-glow border-pink/20 hover:border-pink/40"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-golden" />
      ) : (
        <Moon className="h-5 w-5 text-pink" />
      )}
    </Button>
  );
}
