const faqData = [
    {
        id: 1,
        style: "home",
        faqs: [
            {
                id: 1,
                question: "Are there actual human Stylists?",
                answer: "Yes, they're real! We're proud to work with 1000s of passionate Stylists from all over the U.S. They're fashion experts who are motivated to learn about your style and evolving needs to find the perfect pieces for you.",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 2,
                question: "Styling sounds expensive—what is pricing like?",
                answer: "It's your style at your price. Just tell the range you feel comfortable spending and we'll personalize everything to your budget. Set a price range by type of items (tops, pants, dresses, etc.) and we'll stick to it (unless you give us permission for the occasional splurge). We carry a variety of price points: women's and men's items start at around $30, and run all the way up to about $500. And our kids' items start at only $10. You'll pay a $20 styling fee per Fix order, which is then credited to whatever you keep. Love it all? Get a 25% discount when you keep everything in your Fix. Shipping, returns and exchances are always free. (PS: We always send a preprinted, prepaid label for the most hassle-free returns.)",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 3,
                question: "Is this a subscription?",
                answer: "There is no subscription required. Your Stitch Fix experience is totally up to you. You can choose automatic deliveries as an easy way to get fresh style to your door on a regular schedule. Opt in to receive your Fixes at a frequency that's right for you—every 2-3 weeks, every month, every other month or every three months. Prefer to get your Fixes on demand? No problem, just order whenever you're looking for a wardrobe refresh.",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 4,
                question: "How do you nail my fit?",
                answer: "First, your style quiz gives us an understanding of your sizes and how you like your clothes to fit. We carry tons of brands in a wide range of sizes so our Stylists can send you the best-fitting pieces. With each Fix, we're able to further perfect your fit, knowing the items that have (and haven't) worked for you. The more Fixes you get, the more precisely 'you' they become. We always factor in the notes you send to your Stylist, too.",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 5,
                question: "How does my Stylist know what to send me?",
                answer: "We are your partners in style. We're here to listen and help you achieve your personal style. The more you share with us, the more your Stylist will know what you love. Your style quiz answers help us get an idea of pieces you'll like and match you with a Stylist. With each order, we get to know your style even better via the items that have (and haven't) worked for you. You can also leave a note for your Stylist whenever you schedule a shipment. Looking to update your workwear wardrobe? Have an event or vacation coming up? Big life change? Let us know! In addition to the notes, some other tools we use to help send you pieces personalized just for you are: keeping your style profile up to date, giving feedback on the items in each Fix and your Fix history (what you keep and what you return.)",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 6,
                question: "How do I communicate with my Stylist?",
                answer: "You can leave a note for your Stylist whenever you schedule your next Fix—you can edit this note as much as you want up to the time your Stylist gets started. View, edit or add to your note directly on your Fixes page or in the Stitch Fix app after scheduling.",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 7,
                question: "Can I browse and purchase pieces on my own?",
                answer: "Yes, we call it 'Freestyle'. Once you've received your first Fix, you'll find the Freestyle tab on your profile—you can browse your personalized Freestyle shop, curated with pieces just for you. With Freestyle, you can browse suggestions for items that complete your Fix looks, discover what's trending for you based on your style preferences and so much more. Obsessed with a certain piece you wear again and again? Or did your Stylist send you the perfect pair of jeans? You can also shop for new colors, prints or sizes of pieces you've already purchased and have to have more of.",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 8,
                question: "How long do I have to try things on?",
                answer: "Once your Fix is delivered, try on all of your Stylist-selected items. Keep what you like, and send back the rest within your 3-day try-on window. If you need more time, no problem—there's always the option to extend your checkout and return windows by a few days.",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 9,
                question: "What range of sizes do you carry?",
                answer: "We carry a wide range of sizes for women, men and kids: - Women: XS - 3X (including Petite, Plus and Maternity) - Mens: XS - 3XL (including Big & Tall) - Kids: 2T - 18",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 10,
                question: "Do you have kids' clothing?",
                answer: "We sure do! We carry kids' clothes in sizes 2T - 18—starting at just $10.",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 11,
                question: "Do you offer petites and plus sizes?",
                answer: "Yes. We carry petite clothes styles designed with narrower shoulder, shorter sleeves and just-right hemlines in sizes from XS and 0, as well as petite plus sizes. We also have an extensive selection of perfect-fitting plus-size styles designed for curves (like jeans you'll love and trending looks) in sizes up to 24W and 3X.",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 12,
                question: "How about maternity clothing?",
                answer: "Yes. We offer personalized style for this exciting time for moms to be. Your Stylist might even be one of the first to know you're expecting. From cute, versatile styles that grow with you to easy-to-wear pieces that'll help you feel confident in your new routine, we've got you covered for every stage.",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 13,
                question: "What brands do you carry?",
                answer: "We carry 1,000+ brands and styles for women, men and kids. You'll find familiar faves like Madewell, The North Face, Free People, Adidas, Beyond Yoga and many more in addition to a variety of Stitch Fix exclusive brands.",
                moreInfoTitle: "For a full list, click here.",
                moreInfoLink: "https://www.stitchfix.com/our-brands"
            },
            {
                id: 14,
                question: "How often will I receive a Fix?",
                answer: "It's totally up to you! You can choose automatic deliveries as an easy way for fresh style to come on a regular schedule. Opt in to receive your Fixes at a frequency that's right for you—every 2-3 weeks, every month, every other month or every three months. Prefer to get your Fixes on demand? No problem, just order whenever you're looking for a wardrobe refresh.",             
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 15,
                question: "How can I shop for my whole family?",
                answer: "It's so easy to get personalized style for everyone, all in one place. We have lots of amazing clothes for women, men and kids—let our Stylists do the shopping for the whole family! When you create a Kids profile, we automatically convert your account to a family account, where you can manage Fixes for each family member. A family account consists of one adult and can include up to four kids. Everyone shares the same billing and shipping information.",             
                moreInfoTitle: "Learn more about family accounts here.",
                moreInfoLink: "https://support.stitchfix.com/hc/en-us/articles/360001688487-Can-I-manage-my-family-s-accounts-in-one-place-"
            },
            {
                id: 16,
                question: "Can I have my partner on my account?",
                answer: "Currently, there can only be one adult and up to four kids per account. We  make sure to understand each individual's unique styling needs, so every adult has their own account with personal preferences and suggestions. If your partner hasn't signed up for their own Stitch Fix experience yet, you'll both get a credit if you refer them to set up an account!",
                moreInfoTitle: "",
                moreInfoLink: ""
            }
        ]
    },
    {
        id: 2,
        style: "women",
        faqs: [
            {
                id: 1,
                question: "Is this a subscription service?",
                answer: "Nope—order a Fix delivery of curated pieces whenever you'd like, then instantly buy items from your very own shop anytime. There's no subscription required.",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 2,
                question: "What do I pay and when?",
                answer: "If you'd like pieces selected by your style expert, there's a $20 styling fee up front—and that fee gets credited toward anything you keep. (Don't worry, we'll let you preview items before we send anything your way.) You'll also get 25% off if you keep all five items in your Fix.",
                moreInfoTitle: "About our pricing",
                moreInfoLink: ""
            },
            {
                id: 3,
                question: "What do items cost?",
                answer: "We have items across every price range and carry thousands of just-right styles. Easily set your price preferences for each clothing category in your style quiz.",
                moreInfoTitle: "About our pricing",
                moreInfoLink: ""
            },
            {
                id: 4,
                question: "How do you find my style and fit?",
                answer: "We're fit experts. We learn from your style quiz and ongoing feedback to pinpoint the best items for your taste, size and fit. Bonus: The more we interact, the more personalized your experience becomes.",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 5,
                question: "Can I shop on my own without a stylist?",
                answer: "Yes! After ordering your first Fix, you will be able to browse your own personalized store using Freestyle. Here, you’ll be able able to shop outfit suggestions and new pieces refreshed daily, just for you. You can even shop to complete looks with items you purchased in your Fix.",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 6,
                question: "Free shipping, returns & exchanges?",
                answer: "Yep—shipping, returns & exchanges are always free. A prepaid return label is included with each order.",
                moreInfoTitle: "",
                moreInfoLink: ""
            }
        ]
    },
    {
        id: 3,
        style: "men",
        faqs: [
            {
                id: 1,
                question: "Is this a subscription service?",
                answer: "Nope-order a Fix delivery of curated pieces whenever you'd like, then instantly buy items from your very own shop anytime. There's no subscription required.",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 2,
                question: "What do I pay and when?",
                answer: "If you'd like pieces selected by your style expert, there's a $20 styling fee up front—and that fee gets credited toward anything you keep. (Don't worry, we'll let you preview items before we send anything your way.) You'll also get 25% off if you keep all five items in your Fix.",
                moreInfoTitle: "About our pricing",
                moreInfoLink: ""
            },
            {
                id: 3,
                question: "What do items cost?",
                answer: "We have items across every price range and carry thousands of just-right styles. Easily set your price preferences for each clothing category in your style quiz.",
                moreInfoTitle: "About our pricing",
                moreInfoLink: ""
            },
            {
                id: 4,
                question: "How do you find my style and fit?",
                answer: "We're fit experts. We learn from your style quiz and ongoing feedback to pinpoint the best items for your taste, size and fit. Bonus: The more we interact, the more personalized your experience becomes.",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 5,
                question: "Can I shop on my own without a stylist?",
                answer: "Yes! After ordering your first Fix, you will be able to browse your own personalized store using Freestyle. Here, you’ll be able able to shop outfit suggestions and new pieces refreshed daily, just for you. You can even shop to complete looks with items you purchased in your Fix.",
                moreInfoTitle: "",
                moreInfoLink: ""
            },
            {
                id: 6,
                question: "Free shipping, returns & exchanges?",
                answer: "Yep—shipping, returns & exchanges are always free. A prepaid return label is included with each order.",
                moreInfoTitle: "",
                moreInfoLink: ""
            }

        ]
    }
]

export default faqData;