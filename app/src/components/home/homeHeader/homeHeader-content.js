import IMG1 from './images/fashion-woman-1.webp'
import IMG2 from './images/fashion-man-1.webp'
import IMG3 from './images/fashion-kid-1.webp'
import IMG4 from './images/fashion-home.webp'
import STEP1 from './images/women-1.webp'
import STEP2 from './images/women-2.webp'
import STEP3 from './images/women-3.webp'
import STEP4 from './images/men-1.webp'
import STEP5 from './images/men-2.webp'
import STEP6 from './images/men-3.webp'

const data = [
    {
        style: "home",
        content: "Picked by our Stylists, just for you.",
        image: IMG4,
        imageAlt: "Woman and man model wearing Stitch Fix clothing in a city setting.",
        howItWorks: 
        [{
            id: 1,
            image: STEP1,
            imgAlt: "Woman with phone taking the Stitch Fix style quiz.",
            heading: "Take your style quiz",
            detail: "Tell us about your style, sizes, and budget —the more we know, the more your Stylist can help."
        },
        {
            
            id: 2,
            image: STEP2,
            imgAlt: "A Stitch Fix stylist carrying boxes next to women's clothing.",
            heading: "Share your style goals",
            detail: "Let your Stylist know what you're looking for via notes. They'll select 5 personalized pieces, and send your 'Fix' box straight to your door."
        },
        {
            id: 3,
            image: STEP3,
            imgAlt: "A lay down of women's clothing and box from Stitch Fix.",
            heading: "Get your Fix",
            detail: "There's a $20 styling fee per Fix order, which is then credited to whatever you keep."
        }]
},
    {
        style: "women",
        content: "Personalized fall finds, thanks to your Stylist.",
        image: IMG1,
        imageAlt: "Models in various locations wearing Stitch Fix women's fall clothing.",
        howItWorks: 
        [{
            id: 1,
            image: STEP1,
            imgAlt: "Woman with phone taking the Stitch Fix style quiz.",
            heading: "Take your style quiz",
            detail: "Tell us about your style, sizes, and budget —the more we know, the more your Stylist can help."
        },
        {
            id: 2,
            image: STEP2,
            imgAlt: "A Stitch Fix stylist carrying boxes next to women's clothing.",
            heading: "Connect with your Stylist",
            detail: "Let your Stylist know what you're looking for via notes. They'll select 5 personalized pieces, and send your 'Fix' box straight to your door."
        },
        {
            id: 3,
            image: STEP3,
            imgAlt: "A lay down of women's clothing and box from Stitch Fix.",
            heading: "Get your Fix",
            detail: "There's a $20 styling fee that's applied to what you keep. Bonus: Get 25% off your entire order when you keep all 5 items."
    }]
},
    { 
        style: "men",
        content: "Your personal style, delivered. So easy.",
        image: IMG2,
        imageAlt: "Models in various locations wearing Stitch Fix men's fall clothing.",
        howItWorks: 
        [{
            id: 1,
            image: STEP4,
            imgAlt: "Man with phone taking the Stitch Fix style quiz.",
            heading: "Take your style quiz",
            detail: "Tell us about your style, sizes, and budget —the more we know, the more your Stylist can help."
        },
        {
            id: 2,
            image: STEP5,
            imgAlt: "A man and woman Stitch Fix stylist picking clothing from a rack.",
            heading: "Connect with your Stylist",
            detail: "Let your Stylist know what you're looking for via notes. They'll select 5 personalized pieces, and send your 'Fix' box straight to your door."
        },
        {
            id: 3,
            image: STEP6,
            imgAlt: "A lay down of men's clothing and box from Stitch Fix.",
            heading: "Get your Fix",
            detail: "There's a $20 styling fee that's applied to what you keep. Bonus: Get 25% off your entire order when you keep all 5 items."
    }]
},
    {
        style: "kids",
        content: "Their new fall outfits, made easy.",
        image: IMG3,
        imageAlt: "Parents and kids in various locations wearing Stitch Fix clothing.",
        howItWorks: [
        {
            id: 1,
            image: "",
            imgAlt: "",
            heading: "Tell us about their style",
            detail: "Share your price range, plus your kid's style and sizes. We'll send 10 pieces just for them. No subscription required."
        },
        {
            id: 2,
            image: "",
            imgAlt: "",
            heading: "Try it on",
            detail: "Omg it's here! Unbox their Fix together, and have them try everything on when they're feeling cooperative. Keep their favorites, send back the rest."
        },
        {
            id: 3,
            image: "",
            imgAlt: "",
            heading: "Free shipping & returns",
            detail: "Always. We even include a prepaid return envelope."
        }]
    }
]

export default data;