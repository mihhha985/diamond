export default function Layout({
  children, 
  sidebar, 
}: {
  children: React.ReactNode,
  sidebar: React.ReactNode, 
}) {
  return (
    <section className="catalog">
      {sidebar}
      {children}
    </section>
  )
}