# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: 'aaron415', email: 'aaronf@gmail.com', profile_img_url: "", zip: 94610, tagline: "Just a human being, trying to learn everyday",
description: "I'm just learning to be self-employed, setting your own schedule and the like. It's a challenge but I love it. Indieclono will help give me the opportunity to succeed." )


Campaign.create(title: "Raspberry Pi's for Oakland Tech High School and East Bay",
description: "Build clocks (heh...), build vocational skills, and perhaps, lead a few students to lifelong careers and passions.",
location: "Oakland, CA", overview: "Raspberry Pi is premier way to be introduced to semi-conductor, modern hardware, and a great way to spend a weekend. Could be a great experience for these kids.",
goal: 5000, status: 1000, main_img_url: "https://www.gadgetdaily.xyz/wp-content/uploads/2014/07/LeadSpread.png", user_id: 1, category_id: 2, duration: 30)

Campaign.create(title: "Second Chance Lottery Machine", description: "An electronic machine to read and input 'second chance' Powerball lottery tickets.", location: "San Leandro, CA",
overview: "Each lottery ticket carries a code for a second chance lottery draw. Millions are won each year through these 'second chances.' Every bodega, corner store, and supermarket has tens if not hundreds of valid second chance lottery tickets in the garbage because it's a considerable pain to enter the tickets through Powerball's online interface. We want to build a scanner that can read the codes and then use software to enter the codes on Powerball's site. This could be big!",
goal: 10000, status: 3000, main_img_url: "https://sophosnews.files.wordpress.com/2016/04/shutterstock_303181571.jpg?w=780&h=408&crop=1", user_id: 1, category_id: 1, duration: 25)
Campaign.create(title: "Micro-Dosing Study", description: "Millennials Unite! Let's fund the definitive study on micro-dosing, a new treatment." , location: "San Francisco, CA" , overview: "Mental health prescriptions are not the only treatment. Many are discovering that microdosing psilocybin is improving their work, mood, and life. The funds will provide micro-doses to 150 volunteers and compensate pathologists/allergists/psychiatrists for monitoring efforts.", goal: 10000, status: 2000, main_img_url: "http://img06.deviantart.net/4d90/i/2012/060/6/3/magic_mushrooms_png_by_mysticmorning-d4rdxxg.png", user_id: 1, category_id: 1, duration: 25)
Campaign.create(title: "Universal Basic Income study", description: "Confront the pressing issue of our time, the confluence of technology and consolidation of wealth.", location: "New York, NY", overview: "We're taking off Y Combinator's basic income study with some important changes. We're providing a $1000 basic income to 100 people for 2 years. less than YC's. Rather than probe its effects on Oaklanders, already so close to tech and its economic opportunity. We're doing the study in Cincinnati, Ohio, a diverse community at a time of transition. How will people use the money? Will it benefit them in 'multiples'? We set no rules for what they must do with the money. Let's find out what happens.", goal: 750000, status: 150000, main_img_url: "http://images.gawker.com/zmmjstvk7cumeuzcbsjs/c_scale,fl_progressive,q_80,w_800.png",
user_id: 1, category_id: 2, duration: 30)
Campaign.create(title: "Class Action Suit against Comcast", description: "So many offenses, so little ability to take on a big company in multi-year litigation. Until now!", location: "Denver, CO", overview: "Comcast has been deceptive about its throttling and higher-end packages. They've been caught red-handed. Let's make them pay. Complex civil litigation takes years but should be a solid payoff at the end. Let's raise so much that they can't drown us by pointless, time-draining motions.", goal: 750000, status: 100000, main_img_url: "http://core0.staticworld.net/images/article/2014/01/bittorrent_throttling-100227323-large.png", user_id: 1, category_id: 1, duration: 30)


t.string  "title",        null: false
t.string  "description",  null: false
t.string  "location"
t.string  "overview"
t.integer "goal",         null: false
t.integer "status"
t.string  "main_img_url"
t.integer "user_id"
t.integer "category_id"
t.integer "duration"
