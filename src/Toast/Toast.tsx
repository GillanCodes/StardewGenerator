type Props = {
    title?: string;
    content: string;
}

export default function Toast({title, content}: Props)
{
    return (
        <div>
            {title && (
                <p>
                    <strong>{title}</strong>
                </p>
            )}
            <p>{content}</p>
        </div>
    )
}