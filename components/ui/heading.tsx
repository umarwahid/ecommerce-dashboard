interface HeadingProps {
  title: string
  description: string
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
}) => {
  return (
    <div>
      <h2 className="font-bold text-2xl">{title}</h2>
      <p>{description}</p>
    </div>
  )
}
