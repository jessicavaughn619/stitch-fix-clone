import { BiLogoFacebook, BiLogoInstagram, BiLogoPinterest, BiLogoTiktok, BiLogoYoutube } from 'react-icons/bi'
import { RiTwitterXLine } from 'react-icons/ri'

const socialData = [
    {
        id: 1,
        title: "Facebook",
        icon: <BiLogoFacebook />,
        link: "",
        handles: [{
            id: 1,
            label: "Women",
            handle: "/stitchfix",
            link: "https://www.facebook.com/stitchfix"
        },
        {
            id: 2,
            label: "Men",
            handle: "/stitchfixmen",
            link: "https://www.facebook.com/stitchfixmen"
        }]
    },
    {
        id: 2,
        title: "Instagram",
        icon: <BiLogoInstagram />,
        link: "",
        handles: [{
            id: 1,
            label: "Women",
            handle: "@stitchfix",
            link: "https://www.instagram.com/stitchfix"
        },
        {
            id: 2,
            label: "Men",
            handle: "@stitchfixmen",
            link: "https://www.instagram.com/stitchfixmen"
        }]
    },
    {
        id: 3,
        title: "Pinterest",
        icon: <BiLogoPinterest />,
        link: "",
        handles: [{
            id: 1,
            label: "Women",
            handle: "/stitchfix",
            link: "https://www.pinterest.com/stitchfix"
        },
        {
            id: 2,
            label: "Men",
            handle: "/stitchfixmen",
            link: "https://www.pinterest.com/stitchfixmen"
        }]
    },
    {
        id: 4,
        title: "X",
        icon: <RiTwitterXLine />,
        link: "",
        handles: [{
            id: 1,
            label: "Women",
            handle: "@stitchfix",
            link: "https://www.twitter.com/stitchfix"
        },
        {
            id: 2,
            label: "Men",
            handle: "@stitchfixmen",
            link: "https://www.twitter.com/stitchfixmen"
        }]
    },
    {
        id: 5,
        title: "TikTok",
        icon: <BiLogoTiktok />,
        link: "https://www.tiktok.com/@stitchfix",
        handles: []
    },
    {
        id: 6,
        title: "YouTube",
        icon: <BiLogoYoutube />,
        link: "https://www.youtube.com/stitchfix",
        handles: []
    }
]

export default socialData