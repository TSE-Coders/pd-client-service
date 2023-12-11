import './globals.css'

export const metadata = {
  title: 'PodRace',
  description: 'From NYC with love',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main>
       {children}
       </main>
      </body>
    </html>
  )
}
