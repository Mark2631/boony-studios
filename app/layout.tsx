import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Boony Studios | Photography & Events in Meru, Kenya",
  description: "Photography, cinematic films, drone coverage, event livestreams, prints and event branding in Meru, Kenya. Tell Boony Studios about your day and get your event quote started.",
  openGraph: {
    title: "Boony Studios | Your moments. Held forever.",
    description: "Photography and films for the days you’ll talk about for the rest of your life. Based in Meru, Kenya.",
    images: ["/boony-hero.png"],
    type: "website",
  },
}

export const viewport: Viewport = { themeColor: "#f6f3ed", width: "device-width", initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
