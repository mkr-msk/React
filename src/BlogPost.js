import { useEffect } from "react";

function BlogPost({ title, body }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <p>
            <h1>{title}</h1>
            {body}
        </p>
    );
}

export default BlogPost;