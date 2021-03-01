import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('nathan');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();//this will give us a history of the users routes

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('NewBlog added');
            setIsPending(false);
            // history.go(-1);// uses .go() forward or back according to their history
            history.push('/');//pushes the user back to the home page
        });        
    };

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog title:</label>
                <input type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value) }
                />  
                 <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                  value={ author }
                  onChange={(e) => setAuthor(e.target.value)}  
                >
                    <option value="nathan">nathan</option>
                    <option value="nathan2">nathan2</option>
                </select>
                { !isPending && <button>Add blog</button> }
                { isPending && <button disabled>Adding blog...</button> }

                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
      );
}
 
export default Create;