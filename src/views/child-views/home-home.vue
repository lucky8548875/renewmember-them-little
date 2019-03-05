<template lang="pug">
  #home
    a(name="home")
    section#landing.wide.center-child
      div.grid.wide
        .photo-containers.start-3.span-8.span-5-medium-plus
          .photo-container.one
            div(style="background-image: url('/img/home/3.jpg')")
          .photo-container.two
            div(style="background-image: url('/img/home/2.jpg')")
          .photo-container.three
            div(style="background-image: url('/img/home/1.jpg')")
        h1.banner-text.start-2.span-10.start-7-medium-plus.span-5-medium-plus.text-center-small.margin-bottom Remember Them Little
        h2.banner-sub-text.start-2.span-10.start-7-medium-plus.span-5-medium-plus.text-center-small.margin-bottom ...for they will only be little once!
        router-link.home-button.start-3.span-8.start-7-medium-plus.span-4-medium.span-2-large.primary.text-center.flex.align-center.justify-space-between(to="/book" v-if="$store.getters.isAuthenticated")
          span.flex-grow.margin-left Book Now
          span.center-child(style="background-color: #ffffff33; flex-basis: 2rem; height: 2rem; border-radius: 50%")
            fa(icon="angle-right")

        router-link.secondary.home-button.start-3.span-8.start-7-medium.start-9-large.span-4-medium.text-center.span-2-large.flex.align-center.justify-space-between(to="/dashboard" v-if="$store.getters.isAuthenticated")
          span.flex-grow.margin-left My Bookings
          span.center-child(style="flex-basis: 2rem; height: 2rem; border-radius: 50%")
            fa(icon="angle-right")

    //- Services
    a(name="services")
    section.services
      h1#services.services-section-title(style="padding-top: 1rem") Services
      carousel(perPage=1 paginationColor="#cccccc" paginationActiveColor="#1a73e8")
        slide(v-for="category in $store.getters.categories")
          div.wide.grid
            div.announcement-photo.start-2.span-10.span-6-medium-plus(:style='{backgroundPosition: "center", backgroundSize: "cover", backgroundColor: "#fff",backgroundImage: `url("${category.category_image}")`}')
            div.start-2.span-10.start-9-medium-plus.span-3-medium-plus.padding
              h2.text-left {{ category.category_name }}
              br
              p.text-left(style="font-size: 1.4rem") {{ category.category_description }}

    section.padding-large.padding-y-xlarge
      center.why-choose-us
        h1.margin-bottom-large Why choose us?
        p(style="font-size: 1.3rem; line-height: 2rem") Remember Them Little knows that childhood is a precious yet fleeting moment in everyone's lives because it is a time of learning and happiness but it only comes once and it goes away fast!
        br
        p(style="font-size: 1.3rem; line-height: 2rem") We here at RTL aim to capture those precious moments of your little ones in perfect stillness so they can become memorable for you and your family. Whether your child is a boy or a girl, a baby or a toddler or maybe even still in mommy's womb, we got the perfect tools to help you find the right setting and write the perfect plot for the little fairytale that is your child's years of youth.

    //- Gallery
    a(name="gallery")
    gallery

    a(name="faq")
    section.faqs
      h1#faqs.faqs-section-title.text-center.margin-bottom-large FAQS
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

    //- footer.grid#contact
    //-   .navigation-subsection.start-2
    //-     h3.navigation-title Navigation Links
    //-     ul.navigation-list
    //-       li(v-for="navigation in navigations")
    //-         a(:href="navigation.link") {{ navigation.text }}
  
    //-   .services-subsection.start-5
    //-     h3.services-title Our Services
    //-     ul.services-list
    //-       li(v-for="service in services")
    //-         a(:href="service.link") {{ service.text }}

    //-   .contacts-subsection.start-8
    //-     h3.contacts-title Contacts
    //-     ul.contacts-list
    //-       li(v-for="contact in contacts")
    //-         img(v-bind:src="contact.icon")
    //-         span &nbsp;{{contact.info}}

    //-   .social-subsection.start-11
    //-     a(v-for="social in socials" :href="social.link" target="_blank")
    //-       img(:src="social.icon")

    //-   p.start-2.span-10.copyright-container.text-center &copy; All Rights Reserved 2019
    //-   //- p.last-modified-container Date Last Modified: {{ last_modified }}

      
</template>

<style lang="sass" scoped>
@import '../../assets/sass/helpers/responsive'
#landing
  height: calc(100vh - 5rem)
  @include medium
    height: 50vw
    max-height: 100vh

.banner-text
  font-size: 10vw
  font-weight: lighter
  font-family: serif
  margin-bottom: 0
  @include medium-plus
    font-size: 4vw
.banner-sub-text
  font-size: 1.2rem
  font-weight: lighter
  margin-bottom: 0
  @include medium-plus
    font-size: 2.5vw
.home-button
  border-radius: 3rem
  padding: 0.5rem
  border: 2px
.secondary
  border: 2px solid #bbb
  transition: border 0.2s
  *
    color: #999
    fill: #999
  &:hover
    border: 2px solid #888
    *
      color: #606060
      fill: #606060

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
  width: 50vw
  height: 40vw
  transition: 0.2s transform ease-in-out
  padding: 0.25rem 0.25rem 0.25rem 0.25rem

  
  overflow: hidden
  @include medium-plus
    padding: 0.5rem 0.5rem 0.5rem 0.5rem
  @include medium
    width: 25vw
    height: 20vw
  @include large
    width: 22.5vw
    height: 18vw
    
  
  position: absolute

  div
    width: 100%
    height: 100%
    background-color: #f0f0f0
    background-size: cover


.one

  transform: rotate(-5deg) translateY(-7vw) translateX(-6vw)
  @include medium
    transform: rotate(-5deg) translateY(2.5vw) translateX(-6vw)
  @include large
    transform: rotate(-5deg) translateY(-4.5vw) translateX(-6vw)
      
  

.two
  transform: rotate(5deg) translateX(20vw) translateY(-15vw)
  @include medium
    transform: rotate(5deg) translateX(5vw) translateY(-1.5vw)
  @include large
    transform: rotate(5deg) translateX(5vw) translateY(-7.5vw)

      


.three
  transform: translateY(7vw) translateX(8vw)
  @include medium
    transform: translateY(9.5vw) translateX(-1vw)
  @include large
    transform: translateY(3.5vw) translateX(-1vw)

      
.services, .faqs, footer
  background-color: #eee
  text-align: center
  padding-top: 1.5rem
  padding-bottom: 1.5rem

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

.services-section-title
  color: #555
  padding-bottom: 2rem

.why-choose-us
  @include medium-plus
    width: 80vw
    margin: auto

.announcement-photo
  border-radius: 0.5rem
  background-size: cover
  height: 45vw
  @include medium-plus
    height: 30vw

</style>

<script>
import FaqsMachine from '@/components/faqs-machine.vue'
import Slidestrip from '@/components/slidestrip.vue'
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
    'slidestrip': Slidestrip,
    'gallery': Gallery

  },
	created: function() {
    this.$store.dispatch('loadCategories')
    // this.getPictexts();
    
	},
};
</script>
