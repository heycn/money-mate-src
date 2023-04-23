interface Props {
  children: React.ReactNode
}

export const Gradient: React.FC<Props> = ({ children }) => (
  <header bg-gradient='to-b from-#addcd480' px-16px shadow-lg shadow-light-7>
    {children}
  </header>
)