export default function Heading ({ tag, text, style })  {
    const Tag = tag || 'h1'
    return <Tag className={style}>{text}</Tag>
}

