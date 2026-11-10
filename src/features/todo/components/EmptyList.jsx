import './EmptyList.css'

export function EmptyList({content}) {
  return (
    <section className="empty-list">
      <h1>{content.title}</h1>
      <br/>
      <span>{content.subTitle}</span>
    </section>
  )
}