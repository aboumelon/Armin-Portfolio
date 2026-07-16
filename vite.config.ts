import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    // پلاگین تیلویند نسخه ۴
    tailwindcss(),
    
    // پشتیبانی از مسیردهی‌های کاستوم (مثل @/components)
    tsconfigPaths(),
    
    // کانفیگ اصلی TanStack Start
    tanstackStart({
      server: {
        // همان ارجاع به فایل server.ts که خود پروژه نیاز داشت
        entry: "server",
      },
    }),
    
    react(),
  ],
});