export default function Placeholder({ label = 'Image Placeholder', tall = false }) {
  return (
    <div className={`placeholder-box ${tall ? 'tall' : ''}`}>
      <span>{label}</span>
    </div>
  )
}
