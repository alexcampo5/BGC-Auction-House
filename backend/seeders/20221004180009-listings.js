'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'listings',
      [
        {
          title: 'Old Tabby Golf Links @ Spring Island',
          imageUrl: 'https://i.imgur.com/XcfCGyM.jpg',
          description:
            'Arnold Palmer built one of his greatest courses at Spring Island. Known as one of his top 2 designs, Old Tabby Links at Spring Island is fully immersed in the landscape. With no homes visi0ble from the course, golfers are in their element throughout the game. Paved cart paths have been forsaken for dirt walkways, preventing runoff and accommodating walkers. With a casual atmosphere and a no rush attitude, golf here is truly a leisure pursuit. In 2019, for the 20th year running, Old Tabby has earned recertification in the Audubon Cooperative Program for its long standing commitment to environmental stewardship throughout the course design.',
          itemSummary: 'Golf for 4 including cart',
          startingBid: 250,
          bidIncrement: 50,
          approximateValue: 1000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Belfair Golf Club',
          imageUrl: 'https://i.imgur.com/UIMNwFb.jpg',
          description: `Arnold Palmer built one of his greatest courses at Featuring two of Tom Fazio's most impressive designs, the Belfair Golf Club stands out amongst private clubs in the Hilton Head golf scene. 
          "Belfair is the ultimate in golf. It's Shadow Creek quality," Fazio has said of the club. "I'd stake my reputation on the fact that Belfair is as good as any golf course you will ever see or play." 
          The West course came first, and Fazio was immediately rehired for the East course. Each course offers its own challenge, but Fazio worked with the natural landscape to ensure that both courses would have the ambiance of its location. Each features grandiose pines, marshland and native grasses. 
          "Fazio has really done some of his more impressive work at Belfair," said a TravelGolf.comSpring Island. Known as one of his top 2 designs, Old Tabby Links at Spring Island is fully immersed in the landscape. With no homes visible from the course, golfers are in their element throughout the game. Paved cart paths have been forsaken for dirt walkways, preventing runoff and accommodating walkers. With a casual atmosphere and a no rush attitude, golf here is truly a leisure pursuit. In 2019, for the 20th year running, Old Tabby has earned recertification in the Audubon Cooperative Program for its long standing commitment to environmental stewardship throughout the course design.`,
          itemSummary: 'Golf for 4 including cart',
          startingBid: 250,
          bidIncrement: 50,
          approximateValue: 1100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // {
        //   title: 'Old Tabby Golf Links @ Spring Island',
        //   imageUrl: '',
        //   description:
        //     'Arnold Palmer built one of his greatest courses at Spring Island. Known as one of his top 2 designs, Old Tabby Links at Spring Island is fully immersed in the landscape. With no homes visible from the course, golfers are in their element throughout the game. Paved cart paths have been forsaken for dirt walkways, preventing runoff and accommodating walkers. With a casual atmosphere and a no rush attitude, golf here is truly a leisure pursuit. In 2019, for the 20th year running, Old Tabby has earned recertification in the Audubon Cooperative Program for its long standing commitment to environmental stewardship throughout the course design.',
        //   itemSummary: 'Golf for 4 including cart',
        //   startingBid: 250,
        //   bidIncrement: 50,
        //   approximateValue: 1000,
        //   createdAt: new Date(),
        //   updatedAt: new Date()
        // },
        {
          title: 'Colleton River Golf Course',
          imageUrl: 'https://i.imgur.com/Z7T0ADg.jpg',
          description:
            'The quality of the Colleton River Club courses is matched only by their beauty. World-renowned designers, Jack Nicklaus and Pete Dye bring Colleton River Members 36 masterfully planned holes amidst sweeping water views. The 6-hole executive Par 3 course from Bruce Borland adds yet another option to the Colleton River golf experience. Warm up and practice takes place on expansive driving ranges, putting greens, chipping greens and bunkers. The recently completed Learning Center, located in the Practice Park, helps Members take their game to the next level. Two Clubhouses are equally impressive and complement the courses, offering a variety of spaces to dine, relax and take in the landscaped vistas and awe-inspiring natural beauty of Colleton River Club.',
          itemSummary: 'Golf for 4 including cart',
          startingBid: 300,
          bidIncrement: 50,
          approximateValue: 1300,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Chechessee Creek Golf Club',
          imageUrl: 'https://i.imgur.com/paWJeWW.jpg',
          description:
            'At Chechessee Creek Club, golf is at the center of an unparalleled club experience. As the only Bill Coore & Ben Crenshaw-designed golf course in South Carolina, members enjoy a course that rewards players adept at strategy, precision, and short game equally with those with power and length.With seasoned caddies available to share their knowledge of the course, members enjoy a walk among the scenic Lowcountry landscape of majestic Live oaks and long-needle pines with stunning marsh views dotted along the course.',
          itemSummary:
            'Golf for 4 including cart. Players will be responsible for their caddie fees ($100 per bag).',
          startingBid: 300,
          bidIncrement: 50,
          approximateValue: 1300,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: `Haig Point Golf Club @ Daufuskie Island
          `,
          imageUrl: 'https://i.imgur.com/DCyMDwZ.jpg',
          description: `If there is anywhere where pictures are worth 1,000 words it is our Rees Jones masterpiece. The design and physical beauty are breathtaking, and both contribute to an incomparable experience. Even in a region recognized for landmark golf courses, Haig Point consistently draws accolades and hosts noteworthy tournaments.

          First designed in 1986, the initial routing included 20 holes, including the two extra greens. Rees Jones’ returned to Daufuskie Island in 2007 to restore the greens and sharpen the course’s legacy as one of the best in the nation.`,
          itemSummary:
            'Includes golf for 4, ferry service, transportation to course and 2 golf carts',
          startingBid: 300,
          bidIncrement: 50,
          approximateValue: 1300,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Sea Pines Country Club',
          imageUrl: 'https://i.imgur.com/XEvjSdu.jpg',
          description: `Be swept up in a feeling of adventure and anticipation from the first tee of the private 18-hole Club Course.The par-72 Arnold Palmer-designed gem epitomizes Lowcountry golf and is a true shotmaker’s layout with narrow landing areas, gentle doglegs and subtle greens that call for precision from tee to green. `,
          itemSummary: 'Golf for 4',
          startingBid: 200,
          bidIncrement: 25,
          approximateValue: 800,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Berkely Hall Golf Club',
          imageUrl: 'https://i.imgur.com/IdnXqim.jpg',
          description: `The golf experience at Berkeley Hall is a seamless blend of natural wonder and architectural craftsmanship. Tom Fazio designed two courses, known simply as the North Course and the South Course. While each has its own distinct personality, both are superbly routed with a seamless blend of balance, variety and flow. With no interior homes or roads, these two “core golf” courses are inspired by the classic designs of the 1920s, such as Riviera Country Club, Winged Foot and Seminole. With routing that meanders through an open coastal landscape framed by seaside grasses, each course also delivers dramatic elevation changes, beautiful water features, and bold strategic bunkering that showcase the architect’s artistry.`,
          itemSummary: 'Golf for 4',
          startingBid: 250,
          bidIncrement: 50,
          approximateValue: 1100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Secession Golf Club',
          imageUrl: 'https://i.imgur.com/jVblEsR.jpg',
          description: `Opening in the fall of 1992, the private Secession Golf Club is often ranked among the best golf courses in South Carolina and the entire southern region of the country. It deserves this reputation.
          An excellent course, Secession is an homage to Scotland and the hallowed roots of golf in a visually stunning Lowcountry setting. The golf course boasts many features you'd find in Scotland - especially the stacked-sod bunkers - while showcasing the broad marsh views and moss-draped oaks of its South Carolina coast location.
          None of the Scottish-themed golf courses in the area are as beautiful as Secession. "Links-like" is an apt description, as there are few trees to block the picturesque views of the surrounding marsh.`,
          itemSummary: 'Golf for 4 including cart',
          //the items below are not accurate yet
          startingBid: 250,
          bidIncrement: 50,
          approximateValue: 1000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'BMW 101 Experience at the BMW Performance Center',
          imageUrl: 'https://i.imgur.com/ah2amuu.jpg',
          description: `Discover why the Ultimate Driving Machine isn’t just a tagline. Each BMW was built for maximum enjoyment at the limit, and you’ll be able to experience every spine-tingling sensation behind the wheel in our Driver’s program.`,
          itemSummary: `You receive:
          1 night stay at the Greenville Marriot for 2 people
          Round trip shuttle service from Marriott to BMW Performance Center
          One 2 hour driving session with professional driving instructor
          Opportunity to schedule vehicle overview of a BMW with a BMW Product Specialist
          Complimentary lunch at MBW Performance Center
          `,
          startingBid: 250,
          bidIncrement: 25,
          approximateValue: 975,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Outside Palmetto Bluff Charter',
          imageUrl: 'https://i.imgur.com/dvw4yjc.jpg',
          description:
            'Nestled in the heart of Palmetto Bluff is the award-winning adventure team of Outside Palmetto Bluff™, offering uniquely crafted guided experiences. Set out on a Lowcountry adventure and explore the May River and the Palmetto Bluff property on a variety of exclusive excursions designed to amaze! All Palmetto Bluff tours, excursions, clinics and rentals are private and exclusive to your group. ',
          itemSummary: 'Two hour private charter for six people.',
          startingBid: 200,
          bidIncrement: 25,
          approximateValue: 750,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Club Champion Club Fitting',
          imageUrl: 'https://i.imgur.com/yUimAvd.jpg',
          description:
            'A better game starts with a better custom golf club fitting. That’s why each one of our fitters goes through hundreds of hours of rigorous textbook and hands-on training at our exclusive Club Champion University. That’s on top of manufacturer certifications and bi-weekly training calls. Because of our unmatched high standards, Club Champion has been ranked as one of Golf Digest’s Top 100 Club Fitters for the past ten years in a row.',
          itemSummary:
            'Driver Fitting. During your Driver Fitting, your fitter will work with your swing to find more power off the tee and greater distance in your shots. You will also work on dispersion, accuracy, and overall success with the driver',
          startingBid: 50,
          bidIncrement: 10,
          approximateValue: 300,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Low Country Boil',
          imageUrl: 'https://i.imgur.com/QKzq80f.jpg',
          description:
            'Our own Gary Davis, Boys and Girls Club  of Bluffton Board Member, will catch fresh shrimp and prepare a low country boil (shrimp, corn, sausage, potatoes) for 8 to 10 people at the home of the winning bidder. (does not include beverages, plates and other serving items)',
          itemSummary: ' ',
          //no bid data
          startingBid: 250,
          bidIncrement: 50,
          approximateValue: 1000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Montage Palmetto Bluff',
          imageUrl: 'https://i.imgur.com/BauXo5R.jpg',
          description:
            'Nestled along the scenic May River in South Carolina’s Lowcountry, Montage Palmetto Bluff is set within a vibrant 20,000-acre community between Hilton Head Island and Savannah. Providing guests access to all that Palmetto Bluff has to offer, the resort encompasses an extensive nature preserve, two picturesque villages featuring an array of inspired dining options, a riverfront marina and a Jack Nicklaus Signature Golf Course.',
          itemSummary: `Package includes:
          A Two Night Stay in a Lagoon View Room (includes room, tax, valet parking, and daily fee)
          One Dinner For two at the River House – The Montage’s new steak and seafood restaurant.
          Includes appetizer, entrée and dessert along with one bottle of wine selected by the sommelier or one round of craft cocktails (includes server’s gratuity)`,
          startingBid: 1000,
          bidIncrement: 100,
          approximateValue: 3000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'May River Golf Club',
          imageUrl: 'https://i.imgur.com/nOxQRNE.jpg',
          description: `For the avid golfer, a round of golf at the May River Golf Course is a journey to nirvana.
            Take in the majesty of century-old live oaks and serene native landscapes as you linger on the scenic, 18-hole Jack Nicklaus Signature Course. Woven throughout the May River Forest are 7,171 yards, with several holes on the banks of the river. Plus, enhance your game in the world-class practice facility. Treat yourself to the ultimate golf paradise.`,
          itemSummary: 'Golf for 4 including cart',
          startingBid: 300,
          bidIncrement: 50,
          approximateValue: 1200,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        // {
        //   title: 'Old Tabby Golf Links @ Spring Island',
        //   imageUrl: '',
        //   description:
        //     'Arnold Palmer built one of his greatest courses at Spring Island. Known as one of his top 2 designs, Old Tabby Links at Spring Island is fully immersed in the landscape. With no homes visible from the course, golfers are in their element throughout the game. Paved cart paths have been forsaken for dirt walkways, preventing runoff and accommodating walkers. With a casual atmosphere and a no rush attitude, golf here is truly a leisure pursuit. In 2019, for the 20th year running, Old Tabby has earned recertification in the Audubon Cooperative Program for its long standing commitment to environmental stewardship throughout the course design.',
        //   itemSummary: 'Golf for 4 including cart',
        //   startingBid: 250,
        //   bidIncrement: 50,
        //   approximateValue: 1000,
        //   createdAt: new Date(),
        //   updatedAt: new Date()
        // },
        // {
        //   title: 'Old Tabby Golf Links @ Spring Island',
        //   imageUrl: '',
        //   description:
        //     'Arnold Palmer built one of his greatest courses at Spring Island. Known as one of his top 2 designs, Old Tabby Links at Spring Island is fully immersed in the landscape. With no homes visible from the course, golfers are in their element throughout the game. Paved cart paths have been forsaken for dirt walkways, preventing runoff and accommodating walkers. With a casual atmosphere and a no rush attitude, golf here is truly a leisure pursuit. In 2019, for the 20th year running, Old Tabby has earned recertification in the Audubon Cooperative Program for its long standing commitment to environmental stewardship throughout the course design.',
        //   itemSummary: 'Golf for 4 including cart',
        //   startingBid: 250,
        //   bidIncrement: 50,
        //   approximateValue: 1000,
        //   createdAt: new Date(),
        //   updatedAt: new Date()
        // }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
}
