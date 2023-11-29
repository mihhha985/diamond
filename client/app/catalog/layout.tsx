export default function Layout({
  children, 
  sidebar, 
  pagination,
}: {
  children: React.ReactNode,
  sidebar: React.ReactNode, 
  pagination: React.ReactNode,
}) {
  return (
    <section className="catalog">
      {sidebar}
      {children}
      {pagination}
    </section>
  )
}