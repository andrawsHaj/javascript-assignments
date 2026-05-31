
const users = [
{ id: 1, username: "dania", followers: 1200, verified: true },
{ id: 2, username: "omar", followers: 350, verified: false },
{ id: 3, username: "luna", followers: 2400, verified: true },
{ id: 4, username: "zain", followers: 90, verified: false },
{ id: 5, username: "maya", followers: 800, verified: true },
];
const posts = [
{
id: 1,
userId: 1,
title: "Why JavaScript is Weird",
content: "JavaScript has strange but interesting behavior.",
likes: 1500,
category: "Programming",
},
{
id: 2,
userId: 3,
title: "Best Gaming Setup",
content: "Today I will show my gaming room.",
likes: 2200,
category: "Gaming",
},
{
id: 3,
userId: 1,
title: "React Tips",
content: "Use components to organize your UI.",
likes: 900,
category: "Programming",
},
{
id: 4,
userId: 5,
title: "Morning Routine",
content: "Small habits can change your day.",
likes: 700,
category: "Lifestyle",
},
];


// Task 1

const userCards = users.map(user => {
  let status;
  if (user.followers >= 500) {
    status = "Active User";
  } else {
    status = "New User";
  }
  return `@${user.username} - ${user.followers} followers - ${status}`;
});

console.log(userCards)


// Task 2

const ViralPosts = posts.filter((post) => {
  if(post.likes > 1000){
    return true;
  }
});
console.log(ViralPosts) 



// Task 3

const mostPopular = users.reduce((max, user) => {
  if(user.followers > max.followers){
    return user
  }
  return max;
}
);
console.log(mostPopular)



// Task 4

const inactiveUsers = users.filter((user) => {
  const found = posts.find((post) => post.userId === user.id)
  if(found){
    return false;
  } else{
    return true;
  }
}
)

console.log(inactiveUsers)



// Task 5

const totalLikes = posts.reduce((sum, post) => {
  return sum + post.likes;
}, 0);

console.log(totalLikes)




// Task 6

const verifiedUser = users.some(user => user.verified);
console.log(verifiedUser)



// Task 7 

const platformQuality = posts.every((post) => {
  return post.title && post.content;
}
)
console.log(platformQuality);




// Task 8

const trendingTitles = posts.map((post) => {
  return post.title.toUpperCase()
}
)
console.log(trendingTitles)




// Task 9 

const gamingFeed = posts.filter((post) => {
  return post.category === "Gaming"
}
)
console.log(gamingFeed)




// Task 10

const sortedUsers = users.sort((a, b) => {
  return b.followers - a.followers
}
)
console.log(sortedUsers)




// Task 11

const searchedUsername = "dania";
const userName = users.find((user) => {
  return user.username === searchedUsername;
}
)
console.log(userName)




// Task 12

const totalUsers = users.length;
const totalPosts = posts.length;
const averageLikesPerPost = totalLikes / totalPosts;
const categoryCounts = posts.reduce((acc, post) => {
  if (acc[post.category]) {
    acc[post.category] = acc[post.category] + 1;
  } else {
    acc[post.category] = 1;
  }
  return acc;
}, {});

const mostPopularCategory = Object.keys(categoryCounts).reduce((a, b) => {
  if (categoryCounts[a] > categoryCounts[b]) {
    return a;
  } else {
    return b;
  }
});
const platformStats = {
  totalUsers,
  totalPosts,
  totalLikes,
  averageLikesPerPost,
  mostPopularCategory,
};

console.log(platformStats);