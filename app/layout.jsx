import './styles/globals.css'

export const metadata = {
  title: 'E-commerce',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <body>{children}</body>
    </html>
  )
}
