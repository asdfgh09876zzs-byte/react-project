export default function Cardcomponent({cardTitle,backgroundcolor }) {
  return (
    <div className={`${backgroundcolor} h-50 rounded-3xl p-5`}> {cardTitle}</div>

  )
}
