async function editFromHandler(event){
    event.preventDefault();
    const title = document.querySelector('input[name="post-title"]').value;
    const post_url = document.querySelector('input[name="post-url"]').value;
    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_url
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    } 
}

document.querySelector('.edit-post-btn').addEventListener('click', editFromHandler);
