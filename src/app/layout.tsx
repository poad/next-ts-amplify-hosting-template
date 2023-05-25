import './globals.css';

import { ReactNode } from 'react';
import '@aws-amplify/ui-react/styles.css';

export default function Document({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
