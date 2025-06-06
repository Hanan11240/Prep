const users = [
    {
        id: 1,
        name: "Hanan"
    },
    {
        id: 2,
        name: "Ahsan"
    }, {
        id: 3,
        name: "Munaqib"
    }
]

const posts = [
    {
        userId: 1,
        posts: ['abc', 'cwe', 'cwwe', 'cwecwec', 'cecewwecw']
    },
    {
        userId: 2,
        posts: ['afewbc', 'cwfwee', 'cwfweffwefwe', 'fwef', 'cecewfwfwewecw']
    },

]

function fetchUser(userId, callback) {
    const user = users.find(user => user.id === userId)
    if (!user) {
        const error = `User not found with id ${userId}`
        callback(error, null)
    } else {
        callback(null, user)
    }



}

function fetchUserPost(userId, callback) {
    const userPosts = posts.find(post => post.userId === userId)
    if (!userPosts) {
        const error = `No post found for user with id ${userId}`
        callback(error, null)
    } else {
        callback(null, userPosts?.posts)
    }
}

function displayUserPosts(userId) {

    fetchUser(userId, (err, user) => {
        if (err) {
            console.log(err)
            return
        } else {
            console.log(user)
        }


        fetchUserPost(user.id, (error, posts) => {
            if (error) {
                console.log(error)
                return
            } else {
                posts.forEach(post => console.log(post))
            }
        })
    })

}



displayUserPosts(4);