import { NextResponse } from 'next/server'

const BRAND_CONTEXT = `You are an AI assistant for DreamsLabelsByHarshita, a women's ethnic wear brand in India.
The brand sells ONLY through Instagram & Facebook DMs and WhatsApp - there is NO website.

Brand Voice:
- Feminine, warm, trustworthy, helpful
- Friendly Hinglish/English for Indian women audience
- Never pushy or robotic
- Focus on comfort, quality, affordability, and style

IMPORTANT:
- All CTAs must be "DM for price", "WhatsApp to order", "Comment 'Interested'", etc.
- NEVER mention website or checkout links
- Always encourage engagement through comments, DMs, or WhatsApp`

export async function POST(request: Request) {
  try {
    const { type } = await request.json()

    let generatedContent: any = {}

    switch (type) {
      case 'daily':
        generatedContent = generateDailyContent()
        break
      case 'comments':
        generatedContent = generateCommentTemplates()
        break
      case 'facebook':
        generatedContent = generateFacebookPost()
        break
      case 'sales':
        generatedContent = generateSalesContent()
        break
      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }

    return NextResponse.json(generatedContent)
  } catch (error) {
    console.error('Generation error:', error)
    return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 })
  }
}

function generateDailyContent() {
  const reelIdeas = [
    "Hook: 'POV: You found the perfect ethnic outfit for under ₹2000 💕' - Show a stunning transformation from casual to ethnic wear. Start with unpacking, then styling tips, and final twirl. Use trending audio.",
    "Hook: '3 Ways to Style ONE Kurti Set' - Quick transitions showing the same kurti styled casually, for office, and for festive occasions. Adds value + showcases versatility.",
    "Hook: 'When comfort meets style ✨' - Show yourself getting ready in DreamsLabels ethnic wear, emphasizing comfort (stretchy fabric, breathable material) while looking gorgeous.",
    "Hook: 'Ethnic Wear Styling Mistakes to Avoid' - Educational content showing wrong vs right styling. Positions you as expert + builds trust.",
    "Hook: 'Get ready with me for Puja 🪔' - Relatable festive content showing complete ethnic look styling from DreamsLabels collection."
  ]

  const captions = [
    `Ethnic wear that feels like a dream 💕

When comfort meets elegance, magic happens! ✨

This beautiful piece is:
✓ Super comfortable fabric
✓ Perfect for festivals & parties
✓ Affordable luxury
✓ Limited stock!

Want to know the price?
👉 DM us "INTERESTED"
or WhatsApp for instant reply 💬

#DreamsLabelsByHarshita #EthnicWear #IndianFashion`,

    `POV: You're looking for ethnic wear that doesn't compromise on comfort 👗

We got you, babe! 💕

This collection is specially curated keeping YOU in mind:
🌸 Breathable fabrics
🌸 Easy to style
🌸 Budget-friendly
🌸 Makes you feel confident

Limited pieces available!
📩 Comment "DETAILS" or DM now
💬 WhatsApp us for quick response

#ComfortMeetsStyle #EthnicLove #DesiGirl`,

    `Festive season = Time to shine ✨

But why spend thousands when you can look stunning in our affordable collection? 😍

This beauty is:
💖 High quality fabric
💖 Perfect fit
💖 Trending design
💖 Won't break your bank!

Grab yours before it's gone!
👉 DM "PRICE" now
📱 WhatsApp for instant response

#FestiveVibes #AffordableFashion #EthnicWearLove`
  ]

  const hashtagSets = [
    ['#EthnicWear', '#IndianFashion', '#KurtiSets', '#DesiStyle', '#WomensWear', '#FashionIndia', '#AffordableFashion', '#StyleGoals', '#DreamsLabels', '#InstaFashion'],
    ['#TraditionalWear', '#EthnicVibes', '#DesiGirl', '#FashionBlogger', '#OutfitInspo', '#IndianEthnic', '#KurtiLove', '#TrendingFashion', '#DMForPrice', '#WomensFashion'],
    ['#FestiveWear', '#SareeLove', '#KurtiStyle', '#EthnicCollection', '#FashionDaily', '#IndianStyle', '#ComfortWear', '#StyleDiaries', '#DreamOutfit', '#ShopSmall']
  ]

  const storyIdeas = [
    "Behind-the-scenes: Show fabric quality close-up + packaging process. Add text: 'Quality you can trust 💕'",
    "Poll: 'Which color should we restock? Pink 💗 or Blue 💙' - Drives engagement + gives insights",
    "Customer testimonial screenshot with text: 'She's glowing in DreamsLabels ✨ You're next!'",
    "Quick styling tip: '2-minute kurti styling hack for busy mornings 🌅'",
    "Flash offer story: 'First 5 DMs get ₹200 off! 🏃‍♀️💨 Screenshot & DM now!'"
  ]

  const randomReel = reelIdeas[Math.floor(Math.random() * reelIdeas.length)]
  const randomCaption = captions[Math.floor(Math.random() * captions.length)]
  const randomHashtags = hashtagSets[Math.floor(Math.random() * hashtagSets.length)]
  const randomStory = storyIdeas[Math.floor(Math.random() * storyIdeas.length)]

  return {
    reelIdea: randomReel,
    caption: randomCaption,
    hashtags: randomHashtags,
    storyIdea: randomStory
  }
}

function generateCommentTemplates() {
  const commentReplies = [
    {
      trigger: "Price?",
      reply: "Hi dear! 💕 Sent you all details in DM. Check your inbox! ✨"
    },
    {
      trigger: "Interested",
      reply: "Yay! 🎉 DMing you the details right away, sweetheart! 💕"
    },
    {
      trigger: "Available?",
      reply: "Yes dear! 😍 Still available. Sending you details in DM 💬"
    },
    {
      trigger: "Size?",
      reply: "We have multiple sizes! 💕 DM me and I'll help you find your perfect fit! ✨"
    },
    {
      trigger: "Colors?",
      reply: "Beautiful color options available! 🌈 Check your DM for all details 💕"
    },
    {
      trigger: "Beautiful",
      reply: "Thank you so much, love! 💕 Would look stunning on you too! DM if interested ✨"
    },
    {
      trigger: "Details",
      reply: "Absolutely! 💕 Sliding into your DMs with all the details right now! 💬"
    }
  ]

  const dmReplies = [
    {
      scenario: "Initial interest inquiry",
      reply: `Hi beautiful! 💕

Thank you so much for your interest in DreamsLabelsByHarshita! 😍

This piece is absolutely stunning and available right now! ✨

Price: [Price Details]
Available Sizes: [Size Options]
Fabric: [Fabric Details]

We accept orders through:
📱 WhatsApp: [Your WhatsApp]
💬 Instagram DM
💳 Payment: UPI/Bank Transfer

Want to place an order or have any questions? I'm here to help! 💕`
    },
    {
      scenario: "Asking about fabric quality",
      reply: `Great question, dear! 💕

We pride ourselves on quality! Our fabric is:
✨ Premium quality
✨ Comfortable for all-day wear
✨ Breathable & skin-friendly
✨ Durable and long-lasting

All our pieces are carefully quality-checked before dispatch 📦

Our happy customers love the quality! 😍
Would you like to see customer reviews?

Ready to order? I can send you full details! 💕`
    },
    {
      scenario: "Price negotiation",
      reply: `I totally understand, sweetheart! 💕

Our prices are already kept super affordable considering the quality we offer. We want every woman to feel beautiful without breaking the bank! ✨

However, I have good news! 🎉
✓ Free shipping on orders above ₹999
✓ Order 2+ items and get special discount
✓ First-time customer? Let me check if I can offer something special! 💕

Would you like to proceed with the order? I'm here to help! 😍`
    },
    {
      scenario: "Ready to order",
      reply: `Yayy! So excited for you! 🎉💕

Here's what I need:
1️⃣ Your full name
2️⃣ WhatsApp number
3️⃣ Delivery address
4️⃣ Size confirmation

Payment details:
💳 UPI: [Your UPI]
🏦 Bank Transfer: [Bank Details]

Once payment is done, send screenshot and we'll dispatch within 24 hours! 📦✨

Your order will reach you in 3-5 days 🚚

Anything else you'd like to know? 💕`
    }
  ]

  return {
    commentReplies,
    dmReplies
  }
}

function generateFacebookPost() {
  const posts = [
    `Hey beautiful ladies! 💕

Looking for comfortable yet stunning ethnic wear that doesn't cost a fortune?

DreamsLabelsByHarshita brings you premium quality ethnic wear collection! ✨

Why our customers love us:
🌸 Superior fabric quality
🌸 Comfortable all-day wear
🌸 Affordable luxury
🌸 Fast delivery across India
🌸 Amazing customer service

Perfect for:
✓ Festivals & Pujas
✓ Family functions
✓ Office wear
✓ Party wear

Limited stock available! 😍

📩 DM or Comment "INTERESTED" to see our latest collection
💬 WhatsApp us for instant response

Share with friends who love ethnic fashion! 💕

#EthnicWear #IndianFashion #WomensFashion #AffordableStyle #DreamsLabels`,

    `Ladies, can we talk about ethnic wear struggles? 🙋‍♀️

❌ Too expensive
❌ Uncomfortable fabric
❌ Limited size options
❌ Takes forever to deliver

We heard you! That's why DreamsLabelsByHarshita exists 💕

✅ Pocket-friendly prices
✅ Premium comfortable fabrics
✅ Multiple sizes available
✅ Quick delivery

Our promise: Quality ethnic wear that makes you feel confident and comfortable! ✨

Want to see our collection?
👉 Comment "SHOW ME" or DM us
📱 WhatsApp for catalog

Let's make ethnic fashion accessible for everyone! 💕

Tag a friend who needs to know about this! 👯‍♀️

#EthnicFashion #ComfortableStyle #AffordableFashion #WomensWear`,

    `🎉 Festive season is here! 🎉

Time to update your ethnic wardrobe! 💕

DreamsLabelsByHarshita new collection is LIVE! ✨

Whether you need:
🪔 Traditional for pujas
💃 Trendy for parties
👗 Elegant for functions
💼 Formal for work

We've got you covered! 😍

Premium quality | Affordable prices | Fast delivery

LIMITED PIECES - First come, first serve! ⏰

💌 Want to see the collection?
👉 Comment "YES" below
📩 DM us
💬 WhatsApp for instant catalog

Your dream ethnic outfit is just a message away! 💕

Share with your girl gang! 👯‍♀️

#NewCollection #EthnicWearLove #FestiveFashion #IndianStyle #ShopLocal`
  ]

  return {
    fbGroupPost: posts[Math.floor(Math.random() * posts.length)]
  }
}

function generateSalesContent() {
  const salesPosts = [
    `⚡ FLASH SALE ALERT ⚡

Ladies, you asked for it! 💕

For the NEXT 24 HOURS ONLY:
🔥 FLAT 20% OFF on our premium collection
🔥 FREE shipping all over India
🔥 Extra 5% off on prepaid orders

This is your chance to grab that stunning ethnic outfit you've been eyeing! 😍

Why wait?
✨ Limited stock
✨ Sizes selling out FAST
✨ This offer won't repeat!

⏰ Offer valid till tomorrow midnight only!

📩 DM "FLASH SALE" NOW
💬 WhatsApp us immediately
👇 Comment "INTERESTED" below

Don't miss out, gorgeous! This is THE time! 💕

Tag friends who'd love this! 👯‍♀️

#FlashSale #EthnicWear #LimitedTimeOffer #ShopNow #DreamsLabels`,

    `🚨 ONLY 5 PIECES LEFT! 🚨

Our most popular ethnic wear set is almost SOLD OUT! 😱

Customers are LOVING this because:
💕 Supreme comfort
💕 Elegant design
💕 Perfect fit
💕 Instagram-worthy look
💕 Affordable price!

⚠️ Once it's gone, it's gone!
We might not restock for months! ⏰

Don't let this be the outfit that got away! 💔

🏃‍♀️ QUICK! DM "AVAILABLE" now
💬 WhatsApp for instant booking
👇 Comment "MINE" to reserve

First 5 DMs get it! ⚡

Who's grabbing theirs? 😍

#LimitedStock #LastChance #EthnicFashion #ShopNow #HurryUp`,

    `🎁 SPECIAL FESTIVE OFFER 🎁

Festive season = Time to shine! ✨

DreamsLabelsByHarshita Festive Special:
🌸 Buy 2, Get FLAT ₹500 OFF
🌸 Buy 3, Get FLAT ₹1000 OFF
🌸 FREE Matching Dupatta worth ₹399 on orders above ₹1999

Perfect time to update your entire ethnic wardrobe! 💕

Whether it's for:
🪔 Diwali celebrations
🎊 Wedding season
👪 Family gatherings
📸 Festive photoshoots

We've got premium pieces waiting for you! 😍

⏰ Limited Period Offer!
📦 Fast Delivery across India

Ready to upgrade your wardrobe?
📩 DM "FESTIVE OFFER"
💬 WhatsApp us now
👇 Comment "DETAILS"

Your festive glow-up starts here! ✨

Share with your ethnic wear loving friends! 💕

#FestiveOffer #EthnicWearSale #DiwaliCollection #SpecialOffer #ShopLocal`
  ]

  return {
    salesPost: salesPosts[Math.floor(Math.random() * salesPosts.length)]
  }
}
