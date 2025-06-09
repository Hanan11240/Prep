
// function fetchUserposts(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
// }

// function fetchPost(user) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
// }
// const userPostspr = fetchUserposts(1);

// userPostspr.then(user => user.json())
//     .then(result => fetchPost(result))
//     .then(posts => posts.json())
//     .then(response => {
//         const postTitles = response.map(post => post.title)
//         postTitles.forEach(title => {
//             console.log(title)
//         });
//     })

async function fetchUser(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!res.ok) throw new Error("Failed to fetch user");
    return await res.json();
}

async function fetchUserPost(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!res.ok) throw new Error("Failed to fetch user posts");
    return await res.json();
}
async function displayUserPosts(userId) {
    try {
        const user = await fetchUser(userId);
        console.log('Name', user.name)

        const userPosts = await fetchUserPost(user.id);
          userPosts.forEach(post => console.log(`- ${post.title}`));
        

    } catch (error) {

    }
}


displayUserPosts(1);
