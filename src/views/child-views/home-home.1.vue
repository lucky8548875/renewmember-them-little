<template lang="pug">
#home
  .decoration
    #box1
    #circle1
    #circle2
    #box2
    #box3
    #box4
    #circle3
    #circle4
  a(name="home")
  section.landing.page-wide.high.center-child.flex.flex-wrap
    div.grid.wide(style="max-height: 18rem")
      .photo-containers.start-3.span-8.span-5-medium-plus

          
        .photo-container.two
          clazy-load(:src='"/img/home/2.jpg"')
            transition(name="fade" appear)
              div(style="background-image: url('/img/home/2.jpg')")
            div.animated-background(slot="placeholder")

        .photo-container.one
          clazy-load(:src='"/img/home/3.jpg"')
            transition(name="fade" appear)
              div(style="background-image: url('/img/home/3.jpg')")
            div.animated-background(slot="placeholder")

        .photo-container.three
          clazy-load(:src='"/img/home/1.jpg"')
            transition(name="fade" appear)
              div(style="background-image: url('/img/home/1.jpg')")
            div.animated-background(slot="placeholder")

      h1.banner-text.start-2.span-10.start-7-medium-plus.span-5-medium-plus.text-center-small.margin-bottom REMEMBER THEM LITTLE
      h2.banner-sub-text.start-2.span-10.start-7-medium-plus.span-5-medium-plus.text-center-small.margin-bottom for they will only be little once!
      router-link.book-button.start-3.span-8.start-7-medium-plus.span-4-medium.span-2-large.primary.text-center.flex.align-center.justify-space-between(to="/book" v-if="$store.getters.isAuthenticated")
          span.flex-grow Book Now
          fa.margin-right(icon="angle-right")
      router-link.secondary-button.start-3.span-8.start-7-medium.start-9-large.span-4-medium.text-center.span-2-large.flex.align-center.justify-space-between(to="/dashboard" v-if="$store.getters.isAuthenticated")
          span.flex-grow My Bookings
          fa.margin-right(icon="angle-right")

  a(name="services")
  section.services.page-wide
    h1.section-title Services
    carousel(perPage=1 paginationColor="#cccccc" paginationActiveColor="#1a73e8")
      slide(v-for="category in $store.getters.categories")
        div.wide.grid
          div.announcement-photo.start-2.span-10.span-6-medium-plus(:style='{backgroundPosition: "center", backgroundSize: "cover", backgroundColor: "#fff",backgroundImage: `url("${category.category_image}")`}')
          div.start-2.span-10.start-9-medium-plus.span-3-medium-plus.padding
            h2.text-center {{ category.category_name }}
            br
            p.text-center(style="font-size: 1.4rem") {{ category.category_description }}

  section.padding-large.padding-y-xlarge.high
    h1.section-title Why choose us?
    p.about-paragraph
      b.margin-right-small(style="font-size: inherit; line-height: inherit;") Remember Them Little
      span(style="font-size: inherit; line-height: inherit;") knows that childhood is a precious yet fleeting moment in everyone's lives because it is a time of learning and happiness but it only comes once and it goes away fast!
    br
    p.about-paragraph We here at RTL aim to capture those precious moments of your little ones in perfect stillness so they can become memorable for you and your family. Whether your child is a boy or a girl, a baby or a toddler or maybe even still in mommy's womb, we got the perfect tools to help you find the right setting and write the perfect plot for the little fairytale that is your child's years of youth.

  a(name="gallery")
  gallery

  a(name="faq")
  section.faqs
    h1.section-title(style="color: white") Frequently Asked Questions
    faqs-machine(v-bind:content="faqs")

  a(name="contact")
  footer
    .footer-content.grid-1.grid-3-medium-plus.padding(style="margin: auto")
      div
        h3 Navigation Links
        ul.remove-list-style
          li: a(href="#home") Home
          li: a(href="#services") Services
          li: a(href="#gallery") Gallery
          li: a(href="#faq") FAQ
      div
        h3 Contact
        ul.remove-list-style
          li: a(href="https://facebook.com/rememberthemlittle/" target="_blank")
            fa.margin-right-small(:icon="['fab', 'facebook']" fixed-width)
            span Remember Them Little
          li: a(href="https://m.me/rememberthemlittle" target="_blank")
            fa.margin-right-small(:icon="['fab', 'facebook-messenger']" fixed-width)
            span m.me/rememberthemlittle
          li: a(href="https://www.google.com/maps/place/Remember+them+little+(RTL)/@14.31941,120.9620582,18.78z/data=!4m5!3m4!1s0x3397d5a2c2793307:0xaf3543d134f4436b!8m2!3d14.3192306!4d120.9612519?fbclid=IwAR3k-p7pwr49wtKHm2mQy1GfFYJCMDq9FEjBCE_HhyRACwQwmsQMLB-bBFw" target="_blank")
            fa.margin-right-small(icon="map-marked" fixed-width)
            span Blk. 12, Lot 3 Fatima 1-K, Dasmariñas, Cavite
          li: a(href="https://www.google.com/maps/place/Remember+them+little+(RTL)/@14.31941,120.9620582,18.78z/data=!4m5!3m4!1s0x3397d5a2c2793307:0xaf3543d134f4436b!8m2!3d14.3192306!4d120.9612519?fbclid=IwAR3k-p7pwr49wtKHm2mQy1GfFYJCMDq9FEjBCE_HhyRACwQwmsQMLB-bBFw" target="_blank")
            fa.margin-right-small(icon="mobile" fixed-width)
            span 09XX XXX XXXX
      div
        h3 External Links
        ul.remove-list-style
          li(style="color: #aaaaaa") For other photo/video services, please visit
          li.inline-block(style="border: 1px solid #aaa; margin-top: 0.5rem")
            a.padding-small.inline-block(href="https://facebook.com/vmmediaproductions" target="_blank")
              fa.margin-right-small(:icon="['fab', 'facebook']" fixed-width)
              span VM Media Productions
</template>

<style lang="sass" scoped>
@import '../../assets/sass/helpers/responsive'

@font-face
  font-family: 'Market Saturday'
  src: url('../../assets/MarketSaturday.ttf') format('truetype')

@font-face
  font-family: 'The Queen'
  src: url('../../assets/TheQueen-Regular.ttf') format('truetype')

.photo-containers
  height: 50vw
  z-index: 0
  @include medium-plus
    height: auto
  @include large
    &:hover
      .one
        transform: rotate(-5deg) translateY(-8vw) translateX(-9.5vw) !important
      .two
        transform: rotate(5deg) translateX(8vw) translateY(-11.5vw) !important
      .three
        transform: translateY(7.5vw) translateX(-1vw) !important

.photo-container
  border-radius: 0.5rem
  box-shadow: 0px 0.5rem 2rem rgba(0,0,0,0.2)
  background-color: white
  width: 45vw
  height: 36vw
  transition: 0.2s transform ease-in-out
  padding: 0.35rem 0.35rem 0.35rem 0.35rem
  overflow: hidden
  position: absolute
  @include medium-plus
    padding: 0.5rem 0.5rem 0.5rem 0.5rem
  @include medium
    width: 25vw
    height: 20vw
  @include large
    width: 21vw
    height: 17vw

  div
    width: 100%
    height: 100%
    background-color: #f0f0f0
    background-size: cover

.one
  transform: rotate(-5deg) translateY(-7vw) translateX(-4vw)
  @include medium
    transform: rotate(-5deg) translateY(-1.5vw) translateX(-6vw)
  @include large
    transform: rotate(-5deg) translateY(-4.5vw) translateX(-6vw)
      
.two
  transform: rotate(5deg) translateX(20vw) translateY(-13vw)
  @include medium
    transform: rotate(5deg) translateX(4vw) translateY(-3.5vw)
  @include large
    transform: rotate(5deg) translateX(5vw) translateY(-7.5vw)

.three
  transform: translateY(7vw) translateX(10vw)
  @include medium
    transform: translateY(6.5vw) translateX(-1vw)
  @include large
    transform: translateY(3.5vw) translateX(-1vw)

.banner-text
  font-size: 5.5vw
  font-weight: lighter
  font-family: 'The Queen', serif
  margin-bottom: 0
  color: #696c6d
  text-shadow: 0px 10px 20px #00000011
  @include medium-plus
    font-size: 3vw
.banner-sub-text
  font-size: 6.5vw
  letter-spacing: 0.25vw
  font-family: 'Market Saturday', cursive
  font-weight: lighter
  margin-bottom: 1rem
  color: #696c6d
  text-shadow: 0px 10px 20px #00000011
  @include medium-plus
    font-size: 3.35vw

.book-button
  padding: 1rem
  border-radius: 3rem
  background: linear-gradient(-45deg, #FFC85F, #FF5F99, #55ACFF, #5EF3E7)
  background-size: 600%
  animation: anime 16s linear infinite
  position: relative

.book-button::before
  content: ''
  position: absolute
  width: 100%
  height: 100%
  border-radius: 3rem
  background: linear-gradient(-45deg, #FFC85F, #FF5F99, #55ACFF, #5EF3E7)
  background-size: 600%
  animation: anime 16s linear infinite
  filter: blur(10px)
  opacity: 0.5
  left: 0
  top: 0.75rem
  z-index: -1

.secondary-button
  padding: 1rem
  border-radius: 3rem
  background-color: white



@keyframes anime
  0%
    background-position: 0% 50%
  50%
    background-position: 100% 50%
  100%
    background-position: 0% 50%

.section-title
  text-align: center
  font-family: 'Market Saturday'
  font-size: 3rem
  font-weight: normal
  padding: 2rem
  text-shadow: 0px 10px 20px #00000011

.announcement-photo
  border-radius: 0.5rem
  background-size: cover
  height: 45vw
  box-shadow: 0px 10px 20px #00000011
  @include medium-plus
    height: 30vw

.about-paragraph
  font-size: 1.2rem
  line-height: 1.5rem
  @include large
    font-size: 1.4rem
    line-height: 2.25rem
    max-width: 55rem
    padding: 1rem 2rem

footer
  background-color: #111
  text-align: left
  > .footer-content
    width: 85%
    margin: auto

    div
      padding: 1rem

    a
      padding-top: 0.25rem
      padding-bottom: 0.25rem
      display: inline-block

  h3
    color: white
    margin-bottom: 0.5rem
    margin-top: 0.5rem

.decoration
  position: absolute
  top: 0
  left: 0
  right: 0
  width: 100vw
  height: 100%
  z-index: -10
  overflow-x: hidden
  min-height: 500vh

  #box1
    position: absolute
    background: linear-gradient(-45deg, #FFC85F, #FF5F99)
    width: 20rem
    height: 20rem
    transform: translate(-50%,calc(100vh - 10rem)) rotate(45deg)
    box-shadow: 0px 10px 20px #00000011
  
  #circle1
    position: absolute
    background: linear-gradient(-45deg, #55ACFF, #5EF3E7)
    width: 12rem
    height: 12rem
    transform: translate(6rem, calc(100vh - 6rem))
    border-radius: 50%
    overflow: hidden
    box-shadow: 0px 10px 20px #00000011
    @include small
      opacity: 0.5

  #circle1::after
    content: ''
    position: absolute
    background: linear-gradient(40deg, #55ACFF calc(45% - 1px), #55ACFF55 45%)
    width: 100%
    height: 100%
    border-radius: 50%
    box-shadow: 0px 10px 20px #00000011
    

  #circle2
    position: absolute
    top: 0
    background-color: #00000005
    width: 40rem
    height: 40rem
    transform: translate(calc(100vw - 20rem),-25vw)
    border-radius: 50%
    

  #box2
    position: absolute
    background: linear-gradient(-45deg, #FFC85F, #FF5F99)
    width: 30rem
    height: 30rem
    transform: translate(95vw,calc(230vh - 25rem)) rotate(45deg)
    box-shadow: 0px 10px 20px #00000011

    @include small
      opacity: 0.5

  #box3
    position: absolute
    background: linear-gradient(-45deg, #FF5F99, #55ACFF)
    width: 30rem
    height: 30rem
    transform: translate(90vw,calc(250vh - 20rem)) rotate(45deg)
    box-shadow: 0px 10px 20px #00000011

    @include small
      opacity: 0.5
  
  #box4
    position: absolute
    background-color: #55ACFF
    width: 100vw
    height: 130vh
    transform: translateY(calc(280vh)) skewY(5deg)
    

  #circle4
    position: absolute
    background: linear-gradient(-45deg,#55ACFF 50%, #5EF3E7 100%)
    width: 20rem
    height: 10rem
    transform: translate(-10rem, calc(272vh)) rotate(-45deg)
    border-top-left-radius: 20rem
    border-top-right-radius: 20rem
    box-shadow: 0px 10px 20px #00000011

    @include small
      display: none

  #circle3
    position: absolute
    background: linear-gradient(150deg,transparent calc(50% - 1px),#55ACFF 50%, #5EF3E7 100%)
    width: 30rem
    height: 15rem
    transform: translate(-10rem, calc(267vh)) rotate(-27deg)
    border-top-left-radius: 20rem
    border-top-right-radius: 20rem
    box-shadow: 0px 10px 20px #00000011

    @include small
      display: none


</style>



<script>
import FaqsMachine from '@/components/faqs-machine.vue'
import Gallery from '@/views/child-views/gallery.vue'
export default {
	data() {
		return {
      
			pictexts: [],
			faqs: [
				{
					question: "What is RTL?",
					answer: "Remember Them Little is a photography studio that focuses mainly on taking pictures of children. We are a subsidiary of VM Media Productions, which also offers photography services in addition to videography."
				},
				{
					question: "How do I pay?",
					answer: "You can pay by means of bank deposit or credit card. Message us after placing a booking for further details."
				},
				{
					question: "When is RTL open?",
					answer: "We are open everyday from 9am to 6pm but photoshoots may take place only on weekdays from 8am to 8pm."
        },
        {
					question: "Can I reschedule?",
					answer: "Yes but we must be informed on or before the day of the scheduled session and definitely before the time of the photoshoot."
        },
        {
					question: "Can I refund?",
					answer: "No. Payment is non-refundable."
        },
        {
					question: "How long do I have to wait for my photos?",
					answer: "All processing for prints takes at most 10 days. You will be notified through Messenger and this website when your photos are ready for pickup. You can check your orders under Orders section on your Dashboard. Be sure to have your pickup code to claim on-site."
        },
        {
					question: "Where is RTL located?",
					answer: "Our exact address is Blk. 12, Lot 3 Fatima 1-K Dasmariñas, Cavite. You can find us near De La Salle University - Dasmarinas Gate 1 and we are on the same side of the road as the said school. You should see an Angel’s Burger and Sr. Pedro around the corner to our barangay."
        },
        {
					question: "Do I need a Facebook account to sign in?",
					answer: "No, but we recommend it highly. If you do not have a Facebook account, you may sign in using SMS."
        },
        {
					question: "Can we get a softcopy of photos taken?",
					answer: "Yes, you can! Just remember to bring a flash drive. If you don't have one, you can buy one from us."
        },
        {
					question: "How to verify my payment?",
					answer: "Send us a copy of the deposit slip by messaging us on our Facebook page."
        },
        {
					question: "Are edited pictures included in any package?",
					answer: "No. However, edited pictures can be requested on-site after the photo session. It costs Php 300 for 10 edited images. "
        },
        {
					question: "Can I reserve a time slot that is not on an XX:00 or XX:30?",
					answer: "No. All time slots are on an hourly basis and we suggest that you should be here 30 minutes before your appointment."
        },
        {
					question: "Do you handle walkins?",
					answer: "Yes but if you plan on reserving an appointment on the same day you walkin, you should call us before to see available time slots."
        },
        {
					question: "Can we bring our own props and costumes?",
					answer: "Yes, you can."
        },
        
			],
			navigations: [
				{
					link: "#faqs",
					text: "Back to Top"
				},
				{
					link: "/app/book/index.html",
					text: "Bookings"
				},
				{
					link: "#services",
					text: "Services"
				},
				{
					link: "#faqs",
					text: "FAQS"
				},
				{
					link: "/",
					text: "Gallery"
				}
			],
			services: [
				{
					link: "/app/index.html",
					text: "Newborn"
				},
				{
					link: "",
					text: "Regular"
				},
				{
					link: "",
					text: "Maternity"
				}
			],
			contacts: [
				{
					icon: "/_system/css/images/64x64.png",
					info: "09199999999"
				}
			],
			socials: [
				{
					link: "https://www.facebook.com/rememberthemlittle/",
					icon: "/_system/css/images/64x64.png"
				}
			],
			last_modified: ""
		};
  },
  components: {

    'faqs-machine': FaqsMachine,
    'gallery': Gallery

  },
	created: function() {
    this.$store.dispatch('loadCategories')
    // this.getPictexts();
    
	},
};
</script>
