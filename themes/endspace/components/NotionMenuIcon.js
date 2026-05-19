const EMOJI_PATTERN =
  /[\u{1F300}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F018}-\u{1F270}]/u

const isUrlIcon = icon =>
  typeof icon === 'string' && (icon.startsWith('http') || icon.startsWith('data:'))

const isEmojiIcon = icon => typeof icon === 'string' && EMOJI_PATTERN.test(icon)

export default function NotionMenuIcon({ icon, className = '' }) {
  if (!icon) return null

  if (isUrlIcon(icon) && !isEmojiIcon(icon)) {
    return (
      <span
        className={`endspace-notion-menu-icon ${className}`}
        style={{
          WebkitMaskImage: `url("${icon}")`,
          maskImage: `url("${icon}")`
        }}
      />
    )
  }

  return (
    <span className={`endspace-notion-menu-emoji ${className}`}>
      {icon}
    </span>
  )
}
