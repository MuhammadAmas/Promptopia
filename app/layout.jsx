import '@styles/global.css';
import { Children } from 'react';

export const metaData = {
    title: 'promptopia',
    description: 'Discover and Share the AI Prompts'
}
const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body>
                <div className='main'>
                    <div className="gradient">
                    </div>
                </div>
                <main className='app'>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout;
