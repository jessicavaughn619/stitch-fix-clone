import big_tall from './images/big_tall.webp'
import kids from './images/kids.webp'
import maternity from './images/maternity.webp'
import men from './images/men.webp'
import petite from './images/petite.webp'
import plus from './images/plus.webp'
import women from './images/women.webp'
import women_jackets from './images/women_jackets.webp'
import women_jeans from './images/women_jeans.webp'
import women_shoes from './images/women_shoes.webp'
import women_tops from './images/women_tops.webp'
import women_workwear from './images/women_workwear.webp'
import men_shirts from './images/men_shirts.webp'
import men_pants from './images/men_pants.webp'
import men_shoes from './images/men_shoes.webp'
import men_sweaters from './images/men_sweaters.webp'
import men_tees from './images/men_tees.webp'
import kids_one from './images/kids_one.webp'
import kids_two from './images/kids_two.webp'
import kids_three from './images/kids_three.webp'
import kids_four from './images/kids_four.webp'
import kids_five from './images/kids_five.webp'
import kids_six from './images/kids_six.webp'
import kids_seven from './images/kids_seven.webp'


const data = [
    {
        id: 1,
        style: "home",
        title: "Tell us what you like, we'll find what you love",
        content: "We get to know your style, fit and price range based on your style quiz, requests and feedback.",
        slides: [
            {
                id: 1,
                style: "Women",
                link: "https://www.stitchfix.com/women",
                image: women,
                imageAlt: "Model wearing Stitch Fix women's clothing including printed dress and army jacket."
            },
            {
                id: 2,
                style: "Plus",
                link: "https://www.stitchfix.com/women/plus",
                image: plus,
                imageAlt: "Model wearing Stitch Fix women's clothing including sweater and jeans."
            },
            {
                id: 3,
                style: "Kids",
                link: "https://www.stitchfix.com/kids",
                image: kids,
                imageAlt: "Model wearing Stitch Fix kid's clothing including denim jacket."
            },
            {
                id: 4,
                style: "Men",
                link: "https://www.stitchfix.com/men",
                image: men,
                imageAlt: "Model wearing Stitch Fix men's clothing including blue flannel."
            },
            {
                id: 5,
                style: "Maternity",
                link: "https://www.stitchfix.com/women/maternity",
                image: maternity,
                imageAlt: "Model wearing Stitch Fix maternity clothing including stretchy dress."
            },
            {
                id: 6,
                style: "Petite",
                link: "https://www.stitchfix.com/women/petite",
                image: petite,
                imageAlt: "Model wearing Stitch Fix women's petite clothing including black dress."
            },
            {
                id: 7,
                style: "Big & Tall",
                link: "https://www.stitchfix.com/men/big-tall",
                image: big_tall,
                imageAlt: "Model wearing Stitch Fix men's big and tall clothing including khaki pants."
            }
        ]
    },
    {
        id: 2,
        style: "women",
        title: "Tell us what you like, we'll find what you love",
        content: "We get to know your style, fit and price range based on your style quiz, requests and feedback.",
        slides: [
            {
                id: 1,
                item: "Jackets",
                image: women_jackets,
                imageAlt: "Model wearing Stitch Fix women's clothing including grey jacket."
            },
            {
                id: 2,
                item: "Tops",
                image: women_tops,
                imageAlt: "Model wearing Stitch Fix women's clothing including green top."
            },
            {
                id: 3,
                item: "Jeans",
                image: women_jeans,
                imageAlt: "Model wearing Stitch Fix women's clothing including dark blue denim."
            },
            {
                id: 4,
                item: "Shoes",
                image: women_shoes,
                imageAlt: "Model wearing Stitch Fix women's clothing including black loafers."
            },
            {
                id: 5,
                item: "Workwear",
                image: women_workwear,
                imageAlt: "Plus model wearing Stitch Fix women's clothing including pencil skirt."
            }
        ]
    },
    {
        id: 3,
        style: "men",
        title: "Leave it to the experts",
        content: "We get to know your style, fit and price range based on your style quiz, requests and feedback.",
        slides: [
            {
                id: 1,
                item: "Shirts",
                image: men_shirts,
                imageAlt: "Model wearing Stitch Fix men's clothing including button up shirt."
            },
            {
                id: 2,
                item: "Pants",
                image: men_pants,
                imageAlt: "Model wearing Stitch Fix men's clothing including black pants."
            },
            {
                id: 3,
                item: "Shoes",
                image: men_shoes,
                imageAlt: "Model wearing Stitch Fix men's clothing including black shoes."
            },
            {
                id: 4,
                item: "Sweaters",
                image: men_sweaters,
                imageAlt: "Model wearing Stitch Fix men's clothing including grey sweater."
            },
            {
                id: 5,
                item: "Tees",
                image: men_tees,
                imageAlt: "Model wearing Stitch Fix men's clothing including graphic tee."
            }
        ]
    },
    {
        id: 4,
        style: "kids",
        title: "Fall for all",
        content: "Back-to-school clothes for the playground to picture day. Enter the new season and school year in style.",
        slides: [
            {
                id: 1,
                image: kids_one,
                imageAlt: "Model wearing Stitch Fix kid's clothing including pink shirt."
            },
            {
                id: 2,
                image: kids_two,
                imageAlt: "A family wearing Stitch Fix clothing."
            },
            {
                id: 3,
                image: kids_three,
                imageAlt: "Model wearing Stitch Fix kid's clothing including flannel."
            },
            {
                id: 4,
                image: kids_four,
                imageAlt: "A mother and daughter wearing women's and kid's clothing from Stitch Fix."
            },
            {
                id: 5,
                image: kids_five,
                imageAlt: "Model wearing Stitch Fix kid's clothing including printed legging."
            },
            {
                id: 6,
                image: kids_six,
                imageAlt: "Models wearing Stitch Fix clothing including mom in floral dress and green army jacket, young boy in yellow beanie, shark T-shirt, and sweatpants, young girl in long-sleeve T-shirt and jeans."
            },
            {
                id: 7,
                image: kids_seven,
                imageAlt: "Models wearing Stitch Fix clothing including mom in a blue leather jacket, striped T-shirt and chino pants, young boy with NASA space T-shirt and plaid shorts."
            }
        ]
    }
]

export default data;