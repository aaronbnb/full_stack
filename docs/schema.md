`## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_img_url | string    |
zip             | integer   | bonus?

## campaigns
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
category_id | integer   | not null, foreign key (references categories)
title       | string    | not null, uniqueness: true
description | string    | not null
location    | string    | not null
overview    | text      | not null
start_date  | integer   | not null, default: false
end_date    | integer   | not null, default: false
status      | float     | not null, default: false
goal        | integer   | not null, default: false
main_img_url| string    | not null, default: false
sup_img_url | string    | not null, default: false


## contributions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
campaign_id | integer   | not null, foreign key (references campaigns), indexed
amount      | float     | not null
date        | integer   | not null

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
tagline     | string    | not null
status      | string    | not null

## rewards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
campaign_id | integer   | not null, foreign key (references campaigns), indexed
description | integer   | not null
