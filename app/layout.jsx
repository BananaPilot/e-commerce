import './styles/globals.css'
import Header from './components/Header'
import Provider from './components/Provider'

export const metadata = {
  title: 'SPRING',
}
 
function RootLayout({ children }) {
  return (
    <html lang='en'>
        <head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </head>
        <body>
            <Provider>
                <main className='app'>
                    <Header/>
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout