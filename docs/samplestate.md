{
  currentUser: {
    id: 1,
    username: 'app-academy'
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors = []}
  }
  categories: {
    1: {
      title: "sample",
      description: "dfsa",
      tagline: "this is sample"
    }
  }
  campaigns: {
    1: {
      user_id: 1,
      category_id: 2,
      title: "our campaign",
      description: "is to save a school",
      overview: "longer description..."
      start_date: 1/1/2017,
      end_date: 3/3/2017,
      status: 5700,
      goal: 10000,
      main_img_url: "www.pics.com/pic.jpeg"
    }
  }
  contributions: {
    1: {
      user_id: 2,
      campaign_id: 2,
      amount: 3,
      date: 1/1/17
    }
  }
  rewards: {
    1: {
      campaign_id: 1,
      description: "equity!"
    }
  }

}





}
