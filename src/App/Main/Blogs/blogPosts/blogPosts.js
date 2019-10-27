const blogPosts = [
    {
        id: 1,
        category: "lifestyle",
        title: "10 Things To Do To Change Your Life Forever",
        photo:"./images/Photo1.png",
        intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur sed necessitatibus possimus iusto sunt maiores, reiciendis, temporibus assumenda esse nobis corporis commodi.",
        content:"",
        authorName:"Henry Little",
        authorPhoto:"./images/Author1.png",
        date:"April 28, 2016 10:15",
        postType:"main"

    },
    
    {
        id: 2,
        category: "inspiration",
        title: "4 Natural Ways To Have Young Skin",
        photo:"./images/Photo2.png",
        intro:"",
        content: "<div class='test'>text</div>",

        authorName:"Henry Jackson",
        authorPhoto:"./images/Author2.png",
        date:"April 28, 2016 10:50",
        postType:"horizontal"

    },
    
    {
        id: 3,
        category: "inspiration",
        title: "10 Things To Do To Change Your Life Forever",
        photo:"./images/Photo3.png",
        intro:'Lorem ipsum dolor sit amet, to consectetur  adipi scing elit. Nulla vehicula lorem and lacus. Vestibulum vitae mauris lorem ips',
        content:"",
        authorName:"Jackson Lopez",
        authorPhoto:"./images/Author3.png",
        date:"April 01, 2013 10:15",
        postType:"horizontal"

    },
    
    {
        id: 4,
        category: "inspiration",
        title: "10 Singals From Your Body Telling You Should Sleep More",
        photo:"./images/Photo4.png",
        intro:'Lorem ipsum dolor sit amet, to consectetur  adipi scing elit. Nulla vehicula lorem and lacus. Vestibulum vitae mauris lorem ips',
        content:"",
        authorName:"Jennifer Jackson",
        authorPhoto:"./images/Author3.png",
        date:"January 28, 2016 10:15",
        postType:"horizontal"

    },
    
    {
        id: 5,
        category: "trip",
        title: "Why It’s Amazing To Date People Who Love Traveling",
        photo:"./images/Photo5.png",
        intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        content:"",
        authorName:"Martin Ipson",
        authorPhoto:"./images/Author2.png",
        date:"September 11, 2001 10:15",
        postType:"horizontal"

    
    },

    {
        id: 15,
        category: "trip",
        title: "Black prickleback, tubeblenny North American darter escolar bleak.",
        photo:"./images/Photo6.png",
        intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        content:"",
        authorName:"Martin Ipson",
        authorPhoto:"./images/Author2.png",
        date:"September 11, 2001 10:15",
        postType:"horizontal"

    
    },
    
    {
        id: 6,
        category: "inspiration",
        title: "Food That Actually Taste Better When You Freeze",
        photo:"./images/Photo7.png",
        intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        content:"",
        authorName:"Henry Ford",
        authorPhoto:"./images/Author1.png",
        date:"September 01, 2011 21:15",
        postType:"tiny-vertical"

    },

    {
        id: 26,
        category: "inspiration",
        title: "Four-eyed fish sandroller, yellowbanded perch: weeverfish grayling torpedo Blacksmelt",
        photo:"./images/Photo8.png",
        intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        content:"",
        authorName:"Henry Ford",
        authorPhoto:"./images/Author1.png",
        date:"September 01, 2011 21:15",
        postType:"tiny-vertical"

    },

    {
        id: 56,
        category: "inspiration",
        title: "Taste Better When You Freeze",
        photo:"./images/Photo9.png",
        intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        content:"",
        authorName:"Henry Ford",
        authorPhoto:"./images/Author1.png",
        date:"September 01, 2011 21:15",
        postType:"tiny-vertical"

    },

    

    {
        id: 16,
        category: "inspiration",
        title: "Food Freeze",
        photo:"./images/Photo10.png",
        intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        content:"",
        authorName:"Henry Ford",
        authorPhoto:"./images/Author1.png",
        date:"September 01, 2011 21:15",
        postType:"tiny-vertical"

    },
    
    {
        id: 7,
        category: "photography",
        title: "10 Tips for Noobs in Photo",
        photo:"./images/Photo11.png",
        intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        content:"",
        authorName:"Herbert Dom",
        authorPhoto:"./images/Author2.png",
        date:"May 19, 2005 00:00",
        postType:"tiny-vertical"

    },
    
    {
        id: 8,
        category: "trip",
        title: "11 Fantastic To Spend Holidays",
        photo:"./images/Photo12.png",
        intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        content:"",
        authorName:"Max Carlson",
        authorPhoto:"./images/Author3.png",
        date:"May 19, 2005 04:00",
        postType:"vertical"
    
    },
    
    {
        id: 9,
        category: "inspiration",
        title: "Art Makes You Mentally Healthy",
        photo:"./images/Photo13.png",
        intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        content:"",
        authorName:"Brenda Ticks",
        authorPhoto:"./images/Author2.png",
        date:"June 19, 2005 00:00",
        postType:"vertical"
    },

    {
        id: 19,
        category: "inspiration",
        title: "Black swallower long-finned char tetra poolfish",
        photo:"./images/Photo14.png",
        intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        content:"",
        authorName:"Brenda Ticks",
        authorPhoto:"./images/Author2.png",
        date:"June 19, 2005 00:00",
        postType:"vertical"
    },
    
    {
        id: 59,
        category: "inspiration",
        title: "Make Your Mentally Healthy",
        photo:"./images/Photo15.png",
        intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        content:"",
        authorName:"Brenda Ticks",
        authorPhoto:"./images/Author2.png",
        date:"June 19, 2005 00:00",
        postType:"vertical"
    },
    
    ]

    export default blogPosts;

    export const getBlogById = (array) => (
    array.reduce((accObj, blog) => ({
    ...accObj, 
    [blog.id]: blog,
}), {})
)