
function fetchUserposts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
}

function fetchPost(user) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
}
const userPostspr = fetchUserposts(1);

userPostspr.then(user => user.json())
    .then(result => fetchPost(result))
    .then(posts => posts.json())
    .then(response => {
        const postTitles = response.map(post => post.title)
        postTitles.forEach(title => {
            console.log(title)
        });
    })
