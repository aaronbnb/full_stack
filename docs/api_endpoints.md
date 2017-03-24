Root

/

user profile
get /profile/:id


campaign
get /campaigns/:id
get /campaigns/new
post /campaigns/:id
patch /campaigns/:id
get /campaigns/ index

category
get /category/ == index
get /category/:id === show

users
post /api/profile/:id
patch /api/profile/:id
get /api/profile/:id

session
post /api/session
delete /api/session

rewards
get /api/campaign/:id/rewards

campaign
post /api/campaign
get /api/campaign/:id
patch /api/campaign/:id

comments
post /api/campaign/:id/comments
get /api/campaign/:id/comments

contributions
post /api/campaign/:id/contributions
get /api/campaign/:id/contributions
get /api/profile/:id/contributions
categories
