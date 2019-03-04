import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase';
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    authLoadingStatus: 'NOT_LOADING',
    account_type: '',
    account_name: "",

    // Admin
    bookings: [],
    orders: [],
    users: [],
    categories: [],
    packages: [],
    themes: [],
    addons: [],
    inclusions: [],
    weekBookings: "",
    blockedDates: [],
    blockedDays: [],

    // User
    myBookings: [],
    myOrders: [],
    notifications: [],

    // Booking
    selectedCategoryId: -1,
    selectedPackageId: -1,

    booking: {
      package: {},
      addons: [], // For selected package only
      theme_ids: [],
      booking_date: "",
      booking_time: "",
      subject_name: "",
      subject_age: "",
      payment_method: "BANK_DEPOSIT"
    },

    loadArray: [],
    userId: null
  },
  getters: {
    loadArrayHasContent(state) {
      return state.loadArray.length > 0
    },
    isAuthenticated(state) {
      return Object.keys(state.user).length != 0
    },
    isAdmin(state) {
      if(state.account_type == 'ADMIN') return true
      // else if(state.account_type == 'USER' || state.account_type == 'MOD') return false
      else
        return localStorage.getItem('account_type') == 'ADMIN'
    },
    isUser(state) {
      if(state.account_type == 'USER') return true
      // else if(state.account_type == 'ADMIN' || state.account_type == 'MOD') return false
      else
        return localStorage.getItem('account_type') == 'USER'
    },
    isModerator(state) {
      if(state.account_type == 'MOD') return true
      // else if(state.account_type == 'ADMIN' || state.account_type == 'USER') return false
      else
        return localStorage.getItem('account_type') == 'MOD'
    },
    isBlocked(state) {
      if(state.account_type == 'BLOCKED') return true
      // else if(state.account_type == 'ADMIN' || state.account_type == 'USER'|| state.account_type == 'MOD') return false
      else
        return localStorage.getItem('account_type') == 'BLOCKED'
    },
    getAccessLevel(state){
      if(state.account_type == 'ADMIN' || localStorage.getItem('account_type') == 'ADMIN') return 3
      if(state.account_type == 'MOD' || localStorage.getItem('account_type') == 'MOD') return 2
      if(state.account_type == 'USER' || localStorage.getItem('account_type') == 'USER') return 1
      if(state.account_type == 'BLOCKED' || localStorage.getItem('account_type') == 'BLOCKED') return 0
      return 0
    },
    allBookings(state) {
      return state.bookings
    },
    allOrders(state) {
      return state.orders
    },
    allUsers(state) {
      return state.users
    },
    userId(state) {
      if(state.userId!= null) return state.userId
      return localStorage.getItem('userId')
    },
    myBookings(state) {
      return state.myBookings
    },
    myOrders(state) {
      return state.myOrders
    },
    categories(state) {
      return state.categories
    },
    packages(state) {
      return state.packages
    },
    themes(state) {
      return state.themes
    },
    addons(state) {
      return state.addons
    },
    inclusions(state) {
      return state.inclusions
    },
    notifications(state) {
      return state.notifications
    },
    weekBookings(state) {
      return state.weekBookings
    },
    blockedDates(state) {
      return state.blockedDates
    },
    blockedDays(state) {
      return state.blockedDays
    },

    // Book
    selectedCategoryId(state) {
      return state.selectedCategoryId
    },
    selectedPackageId(state) {
      return state.selectedPackageId
    },
    booking(state) {
      return state.booking
    },
    bookingSlots(state) {
      var formData = new FormData()
      formData.append("booking_date", state.booking.booking_date);
      formData.append("package_minutes", state.booking.package.package_minutes);
      axios
        .post(`/_system/php/api/booking/getOpenSlots.php`, formData)
        .then(response => {
          if (response.data.success) {
            return response.data.data;
          } else {
            console.error(response);
            return [];
          }
        })
        .catch(error => {
          console.log(error);
          return [];
        });
    },
    getBookingTotalPrice(state) {
      var package_price = state.booking.package.package_price;
      var addons_price = 0;
      for (var x in state.booking.addons) {
        addons_price += state.booking.addons[x].addon_price
      }
      return package_price + addons_price;
    }

  },
  mutations: {
    setAuthLoadingStatus(state, status) {
      state.authLoadingStatus = status
    },
    setUser(state, user) {
      state.user = user
    },
    setSelfAccountType(state, account_type){
      state.account_type = account_type
      localStorage.setItem('account_type', account_type)
    },
    // Admin
    setBookings(state, bookings) {
      state.bookings = bookings
    },
    setOrders(state, orders) {
      state.orders = orders
    },
    setUsers(state, users) {
      state.users = users
    },
    setCategories(state, categories) {
      state.categories = categories
    },
    setPackages(state, packages) {
      state.packages = packages
    },
    setThemes(state, themes) {
      state.themes = themes
    },
    setAddons(state, addons) {
      state.addons = addons
    },
    setInclusions(state, inclusions) {
      state.inclusions = inclusions
    },
    spliceTheme(state, theme_index) {
      state.booking.theme_ids.splice(theme_index, 1);
    },
    pushTheme(state, theme_id) {
      state.booking.theme_ids.push(theme_id)
    },
    setWeekBookings(state, weekBookings) {
      state.weekBookings = weekBookings
    }
    ,

    // User
    setMyBookings(state, bookings) {
      state.myBookings = bookings
    },
    setMyOrders(state, orders) {
      state.myOrders = orders
    },

    setSelfAccountId(state, userId) {
      console.log('::SET SELF ACCOUNT ID::')
      console.log('::SET userId on localstorage...')
      localStorage.setItem('userId', userId)
      console.log('::SET userId on localstorage...DONE')
      console.log('::SET userId on state...')
      state.userId = userId
      console.log('::SET userId on state... should be done..check manually')
      
    },
    setNotifications(state, notifications) {
      state.notifications = notifications
    },

    // Book
    setSelectedCategoryId(state, category_id) {
      state.selectedCategoryId = category_id
    },
    setBookingPackage(state, packagex) {
      state.booking.package = packagex
    },
    setSelectedPackageId(state, package_id) {
      state.selectedPackageId = package_id
    },
    setBookingAddons(state, addons) {
      state.booking.addons = addons
    },
    addBookingAddon(state, addon) {
      state.booking.addons.push(addon)
    },
    spliceBookingAddon(state, index) {
      state.booking.addons.splice(index, 1)
    },
    upgradePrint(state, index) {
      state.booking.addons[index].addon_description = 'Upgraded to 12x16';
      state.booking.addons[index].addon_price = 250;
    },
    unupgradePrint(state, index) {
      state.booking.addons[index].addon_description = '8x10';
      state.booking.addons[index].addon_price = 0;
    },
    setBookingDate(state, date) {
      state.booking.booking_date = date
    },
    setBookingTime(state, time) {
      state.booking.booking_time = time
    },
    setBlockedDates(state, dates) {
      state.blockedDates = dates
    },
    setBlockedDays(state, days) {
      state.blockedDays = days
    },
    addLoadArray(state, detail) {
      state.loadArray.push(detail)
    },
    popLoadArray(state, detail) {
      console.log('::POP-LOAD-ARRAY::')
      console.log('Current state: ' + state.loadArray)
      console.log('Trying to remove: ' + detail)
      console.log(state.loadArray + ".splice(" + state.loadArray.indexOf(detail) + ",1)")
      state.loadArray.splice(state.loadArray.indexOf(detail), 1)
    },




  },
  actions: {
    smsSignIn(context, phone) {
      context.commit('addLoadArray', 'reCaptcha')
      console.log("Called smsSignIn")
      firebase.auth().useDeviceLanguage();
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sms-sign-in', {
        'size': 'invisible',
        'callback': function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("Captcha solved! :)")
          context.commit('popLoadArray', 'reCaptcha')
          // var phoneNumber = getPhoneNumberFromUserInput();

        }
      });
      console.log("Sending code to phone...")
      context.commit('addLoadArray', 'sendCodeToPhone')
      var phoneNumber = phone
      var appVerifier = window.recaptchaVerifier;
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
          console.log("SMS Sent! Prompt user to type code")
          context.commit('popLoadArray', 'sendCodeToPhone')

          // TESTING
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
        }).catch(function (error) {
          context.commit('popLoadArray', 'sendCodeToPhone')
          console.error("Oops.. Can't Send SMS :( Reason: " + error)
          // Error; SMS not sent
          // ...
          grecaptcha.reset(window.recaptchaWidgetId);

         // Or, if you haven't stored the widget ID:
         window.recaptchaVerifier.render().then(function (widgetId) {
          grecaptcha.reset(widgetId);
        })
        });

         


    },
    smsSignInCheckCode(context, code) {
      // var code = getCodeFromUserInput();
      context.commit('addLoadArray', 'checkCode')
      var code = code
      confirmationResult.confirm(code).then(function (result) {
        // User signed in successfully.
        context.commit('popLoadArray', 'checkCode')
        var user = result.user;
        console.log('Signed in with sms. Action: check record in php')

  
        // ...
      }).catch(function (error) {
        // User couldn't sign in (bad verification code?)
        context.commit('popLoadArray', 'checkCode')
        console.log('Oops.. Wrong code')
        // ...
      });
    },
    facebookSignIn(context) {
      console.log('starting facebook sign in...')
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth()
        .signInWithPopup(provider)
        .then(function (result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          // var token = result.credential.accessToken;
          // The signed-in user info.
          // var user = result.user;
          console.log('Success fb sign in!')
        



          // ...
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          console.log(errorMessage)
        });
    },
    signOut(context) {
      firebase.auth().signOut().then(
        () => {
          console.log("success")
          context.commit("setUser", {})
          localStorage.removeItem('account_type')
          localStorage.removeItem('userId')
          context.state.account_type = ''
        },
        (error) => {
          console.log(error)
        }
      )
    },
    loadCurrentUser(context) {
      if(context.getters.userId!=null){
        context.dispatch('loadNotifications')
      }
      console.log('called loadCurrentUser')
      context.commit('setAuthLoadingStatus', 'LOADING')
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          context.commit('setAuthLoadingStatus', 'NOT_LOADING')
          context.commit('setUser', user)

          if (user.providerData[0].providerId == 'phone') {
            axios.get(`/_system/php/api/account/signIn.php?firebase_id=${user.uid}&phone_number=${user.providerData[0].phoneNumber}`)
              .then(function (response) {
                // handle success
                console.log('Account connected to database')
                console.log(response)
                context.state.account_name = response.data.data.display_name
                context.commit('setSelfAccountType',response.data.data.account_type)
                console.log('setting account id to ' + response.data.data.account_id )
                context.commit('setSelfAccountId', response.data.data.account_id)

              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
          }
          else if (user.providerData[0].providerId == 'facebook.com') {
            axios.get(`/_system/php/api/account/signIn.php?firebase_id=${user.uid}&facebook_id=${user.providerData[0].uid}&facebook_name=${user.displayName}`)
              .then(function (response) {
                // handle success
                console.log('Account connected to database')
                console.log(response)
                context.state.account_name = response.data.data.display_name
                context.commit('setSelfAccountType',response.data.data.account_type)
                console.log('setting account id to ' + response.data.data.account_id )
                context.commit('setSelfAccountId', response.data.data.account_id)


              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
          }
        } else {
          context.commit('setAuthLoadingStatus', 'NOT_LOADING')
          console.log('No User')
        }
      });
    },
    // Admin
    getAllBookings(context) {
      context.commit('addLoadArray', 'getAllBookings')
      console.log('store: called getAllBookings')
      axios.get('/_system/php/api/booking/getAll.php')
        .then(function (response) {
          // handle success
          console.log(response)
          console.log('Should pop getAllBookings, currently ' + context.state.loadArray)
          context.commit('setBookings', response.data.data)
          context.commit('popLoadArray', 'getAllBookings')
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          context.commit('popLoadArray', 'getAllBookings')
        })

    },
    getAllOrders(context) {
      context.commit('addLoadArray', 'getAllOrders')
      console.log('store: called getAllOrders')
      axios.get('/_system/php/api/orders/getAll.php')
        .then(function (response) {
          // handle success
          console.log(response)
          context.commit('setOrders', response.data.data)
          context.commit('popLoadArray', 'getAllOrders')
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          context.commit('popLoadArray', 'getAllOrders')
        })

    },
    approveBooking(context, bookingId) {
      context.commit('addLoadArray', 'approveBooking')
      console.log("approve Booking clicked " + bookingId)
      var formdata = new FormData;
      formdata.append('booking_id', bookingId)
      formdata.append('account_id', context.getters.userId)
      console.log(context.getters.userId)
      axios.post('/_system/php/api/booking/approveBooking.php', formdata)
        .then(function (response) {
          // handle success
          context.commit('popLoadArray', 'approveBooking')
          context.dispatch('getAllBookings')
        })
        .catch(function (error) {
          // handle error
          context.commit('popLoadArray', 'approveBooking')
          console.log(error);
        })
    },
    getAllUsers(context) {
      context.commit('addLoadArray', 'getAllUsers')
      console.log('store: called getAllUsers')
      axios.get('/_system/php/api/users/getAll.php')
        .then(function (response) {
          // handle success
          console.log(response)
          context.commit('setUsers', response.data.data)
          context.commit('popLoadArray', 'getAllUsers')
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          context.commit('popLoadArray', 'getAllUsers')
        })
    },
    getUserBookings(context, userId) {
      context.commit('addLoadArray', 'getUserBookings')
      console.log('store: called getUserBookings')
      axios.get(`/_system/php/api/booking/getUserBookings.php?account_id=${userId}`)
        .then(function (response) {
          // handle success
          console.log(response)
          context.commit('setMyBookings', response.data.data)
          context.commit('popLoadArray', 'getUserBookings')
        })
        .catch(function (error) {
          // handle error
          context.commit('popLoadArray', 'getUserBookings')
          console.log(error);
        })
    },
    getUserOrders(context) {
      context.commit('addLoadArray', 'getUserOrders')
      console.log('store: called getUserOrders')
      var userId = context.getters.userId
      axios.get(`/_system/php/api/orders/getUserOrders.php?account_id=${userId}`)
        .then(function (response) {
          // handle success
          console.log(response)
          context.commit('setMyOrders', response.data.data)
          context.commit('popLoadArray', 'getUserOrders')
        })
        .catch(function (error) {
          // handle error
          context.commit('popLoadArray', 'getUserOrders')
          console.log(error);
        })
    },
    loadCategories(context) {
      context.commit('addLoadArray', 'loadCategories')
      console.log('store: called loadCategories')
      axios.get('/_system/php/api/category/getAll.php')
        .then(function (response) {
          // handle success
          console.log(response)
          context.commit('setCategories', response.data.data)
          context.commit('popLoadArray', 'loadCategories')
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          context.commit('popLoadArray', 'loadCategories')
        })
    },
    loadPackages(context) {
      context.commit('addLoadArray', 'loadPackages')
      console.log('store: called loadPackages')
      axios.get('/_system/php/api/package/getAll.php')
        .then(function (response) {
          // handle success
          console.log(response)
          context.commit('setPackages', response.data.data)
          context.commit('popLoadArray', 'loadPackages')
        })
        .catch(function (error) {
          // handle error
          context.commit('popLoadArray', 'loadPackages')
          console.log(error);
        })
    },
    loadAddons(context) {
      context.commit('addLoadArray', 'loadAddons')
      console.log('store: called loadAddons')
      axios.get('/_system/php/api/addon/getAll.php')
        .then(function (response) {
          // handle success
          console.log(response)
          context.commit('setAddons', response.data.data)
          context.commit('popLoadArray', 'loadAddons')
        })
        .catch(function (error) {
          // handle error
          context.commit('popLoadArray', 'loadAddons')
          console.log(error);
        })
    },
    loadInclusions(context) {
      context.commit('addLoadArray', 'loadInclusions')
      console.log('store: called loadInclusions')
      axios.get('/_system/php/api/package/getInclusions.php')
        .then(function (response) {
          // handle success
          console.log(response)
          context.commit('popLoadArray', 'loadInclusions')
          context.commit('setInclusions', response.data.data)
        })
        .catch(function (error) {
          // handle error
          context.commit('popLoadArray', 'loadInclusions')
          console.log(error);
        })
    },
    loadThemes(context) {
      context.commit('addLoadArray', 'loadThemes')
      console.log('store: called loadThemes')
      axios.get('/_system/php/api/theme/getAll.php')
        .then(function (response) {
          // handle success
          console.log(response)
          context.commit('setThemes', response.data.data)
          context.commit('popLoadArray', 'loadThemes')
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          context.commit('popLoadArray', 'loadThemes')
        })
    },
    submitPayment(context, formdata) {
      context.commit('addLoadArray', 'submitPayment')
      console.log('store: called submitPayment')
      axios.post('/_system/php/api/booking/addDepositSlip.php', formdata)
        .then(function (response) {
          // handle success
          console.log(response)
          context.dispatch('getUserBookings', context.getters.userId)
          context.commit('popLoadArray', 'submitPayment')
        })
        .catch(function (error) {
          // handle error
          context.commit('popLoadArray', 'submitPayment')
          console.log(error);
        })
    },
    editCategory(context, formdata) {
      context.commit('addLoadArray', 'editCategory')
      console.log('store: called editCategory')
      axios.post('/_system/php/api/category/update.php', formdata)
        .then(function (response) {
          // handle success
          console.log(response)
          context.dispatch('loadCategories')
          context.commit('popLoadArray', 'editCategory')
        })
        .catch(function (error) {
          // handle error
          context.commit('popLoadArray', 'editCategory')
          console.log(error);
        })
    },
    addCategory(context, formdata) {
      context.commit('addLoadArray', 'addCategory')
      console.log('store: called addCategory')
      axios.post('/_system/php/api/category/add.php', formdata)
        .then(function (response) {
          // handle success
          console.log(response)
          context.dispatch('loadCategories')
          context.commit('popLoadArray', 'addCategory')
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          context.commit('popLoadArray', 'addCategory')
        })
    },

    deleteCategory(context, category_id) {
      context.commit('addLoadArray', 'deleteCategory')
      console.log('store: called deleteCategory')
      axios.post(`/_system/php/api/category/delete.php?category_id=${category_id}`)
        .then(function (response) {
          // handle success
          console.log(response)
          context.dispatch('loadCategories')
          context.commit('popLoadArray', 'deleteCategory')
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          context.commit('popLoadArray', 'deleteCategory')
        })
    },
    addPackage(context, formdata) {
      context.commit('addLoadArray', 'addPackage')
      console.log('store: called addPackage')
      axios.post('/_system/php/api/package/add.php', formdata)
        .then(function (response) {
          // handle success
          console.log(response)
          context.dispatch('loadPackages')
          context.dispatch('loadInclusions')
          context.commit('popLoadArray', 'addPackage')
        })
        .catch(function (error) {
          // handle error
          context.commit('popLoadArray', 'addPackage')
          console.log(error);
        })
    },
    editPackage(context, formdata) {
      context.commit('addLoadArray', 'editPackage')
      console.log('store: called editPackage')
      axios.post('/_system/php/api/package/update.php', formdata)
        .then(function (response) {
          // handle success
          console.log(response)
          context.dispatch('loadPackages')
          context.dispatch('loadInclusions')
          context.commit('popLoadArray', 'editPackage')
        })
        .catch(function (error) {
          // handle error
          context.commit('popLoadArray', 'editPackage')
          console.log(error);
        })
    },
    deletePackage(context, package_id) {
      context.commit('addLoadArray', 'deletePackage')
      console.log('store: called deletePackage')
      axios.post(`/_system/php/api/package/delete.php?package_id=${package_id}`)
        .then(function (response) {
          // handle success
          console.log(response)
          context.dispatch('loadPackages')
          context.dispatch('loadInclusions')
          context.commit('popLoadArray', 'deletePackage')
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          context.commit('popLoadArray', 'deletePackage')
        })
    },
    addAddon(context, formdata) {
      context.commit('addLoadArray', 'addAddon')
      console.log('store: called addAddon')
      axios.post('/_system/php/api/addon/add.php', formdata)
        .then(function (response) {
          // handle success
          console.log(response)
          context.dispatch('loadAddons')
          context.commit('popLoadArray', 'addAddon')
        })
        .catch(function (error) {
          // handle error
          context.commit('popLoadArray', 'addAddon')
          console.log(error);
        })
    },
    editAddon(context, formdata) {
      context.commit('addLoadArray', 'editAddon')
      console.log('store: called editAddon')
      axios.post('/_system/php/api/addon/update.php', formdata)
        .then(function (response) {
          // handle success
          console.log(response)
          context.dispatch('loadAddons')
          context.commit('popLoadArray', 'editAddon')
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          context.commit('popLoadArray', 'editAddon')
        })
    },
    deleteAddon(context, addon_id) {
      context.commit('addLoadArray', 'deleteAddon')
      console.log('store: called deleteAddon')
      axios.post(`/_system/php/api/addon/delete.php?addon_id=${addon_id}`)
        .then(function (response) {
          // handle success
          console.log(response)
          context.dispatch('loadAddons')
          context.commit('popLoadArray', 'deleteAddon')
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          context.commit('popLoadArray', 'deleteAddon')
        })
    },
    addTheme(context, formdata) {
      context.commit('addLoadArray', 'addTheme')
      console.log('store: called addTheme')
      axios.post('/_system/php/api/theme/add.php', formdata)
        .then(function (response) {
          // handle success
          console.log(response)
          context.dispatch('loadThemes')
          context.commit('popLoadArray', 'addTheme')
        })
        .catch(function (error) {
          // handle error
          context.commit('popLoadArray', 'addTheme')
          console.log(error);
        })
    },
    editTheme(context, formdata) {
      context.commit('addLoadArray', 'editTheme')
      console.log('store: called editTheme')
      axios.post('/_system/php/api/theme/update.php', formdata)
        .then(function (response) {
          // handle success
          console.log(response)
          context.dispatch('loadThemes')
          context.commit('popLoadArray', 'editTheme')
        })
        .catch(function (error) {
          // handle error
          context.commit('popLoadArray', 'editTheme')
          console.log(error);
        })
    },
    deleteTheme(context, theme_id) {
      context.commit('addLoadArray', 'deleteTheme')
      console.log('store: called deleteTheme')
      axios.post(`/_system/php/api/theme/delete.php?theme_id=${theme_id}`)
        .then(function (response) {
          // handle success
          console.log(response)
          context.dispatch('loadThemes')
          context.commit('popLoadArray', 'deleteTheme')
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          context.commit('popLoadArray', 'deleteTheme')
        })
    },
    loadNotifications(context) {
      console.log('Load Notifications of....' + context.getters.userId)
      axios.get(`/_system/php/api/notification/getUserNotifications.php?account_id=${context.getters.userId}`)
        .then(response => {
          context.commit('setNotifications', response.data.data)
        })
        .catch(error => {
          console.error(error)
        },
        )
    },
    markAsRead(context, notification_id) {
      axios.post(`/_system/php/api/notification/markAsRead.php?notification_id=${notification_id}`)
        .then(response => {
          context.dispatch('loadNotifications')
        })
        .catch(error => {
          console.log(error)
        })
    },
    setBookingPackage(context, packagex) {
      context.commit('setBookingPackage', packagex)
      context.commit('setSelectedPackageId', packagex.package_id)
    },
    preparetheme(context, id) {
      if (context.getters.booking.theme_ids.includes(id)) {
        var index = context.getters.booking.theme_ids.indexOf(id);
        //
        context.commit('spliceTheme', index)
      }
      else
        if (context.getters.booking.theme_ids.length < context.getters.booking.package.package_themes) {
          context.commit('pushTheme', id)
        }
    },
    cancelBooking(context, id) {
      context.commit('addLoadArray', 'cancelBooking')
      var formdata = new FormData()
      formdata.append('booking_id', id)
      formdata.append('account_id', context.getters.userId)
      console.log(context.getters.userId)
      axios.post('/_system/php/api/booking/cancelBooking.php', formdata)
        .then(response => {
          if (response.data.success) {
            context.dispatch('getAllBookings')
            context.commit('popLoadArray', 'cancelBooking')
          }
          else {
            console.log(response.data.message)
            context.commit('popLoadArray', 'cancelBooking')
          }
        })
        .catch(error => {
          cosnole.error('failed to cancel booking: ' + error)
        })
    },
    markAsCompleted(context, booking_id) {
      context.commit('addLoadArray', 'markAsCompleted')
      var formdata = new FormData()
      formdata.append('booking_id', booking_id)
      formdata.append('account_id', context.getters.userId)
      console.log(context.getters.userId)
      axios.post('/_system/php/api/booking/completeBooking.php', formdata)
        .then(response => {
          if (response.data.success) {
            context.dispatch('getAllBookings')
            context.commit('popLoadArray', 'markAsCompleted')
          }
          else {
            console.log(response.data.message)
            context.commit('popLoadArray', 'markAsCompleted')
          }
        })
        .catch(error => {
          cosnole.error('failed to mark booking as done: ' + error)
        })
    },
    book(context) {
      context.commit('addLoadArray', 'book')
      var formData = new FormData();
      formData.append('package', JSON.stringify(context.getters.booking.package));
      formData.append('booking_addons', JSON.stringify(context.getters.booking.addons));
      formData.append('booking_themes', JSON.stringify(context.getters.booking.theme_ids));
      formData.append('booking_date', context.getters.booking.booking_date);
      formData.append('booking_time', context.getters.booking.booking_time);
      formData.append('subject_name', context.getters.booking.subject_name);
      formData.append('subject_age', context.getters.booking.subject_age);
      formData.append('account_id', context.getters.userId);
      // formData.append('token', context.getters.account.token);
      formData.append('payment_method', context.getters.booking.payment_method);
      formData.append('booking_total_price', context.getters.getBookingTotalPrice);

      axios.post('/_system/php/api/booking/add.php', formData)
        .then(
          response => {
            if (response.data.success) {
              console.log(response.data)
              context.commit('popLoadArray', 'book')
            }
            else
              console.error(response.data.message)
            context.commit('popLoadArray', 'book')
          })
        .catch(error => {
          console.error(error)
        })

    },
    placeOrder(context, submitEvent) {
      context.commit('addLoadArray', 'placeOrder')
      var elements = [];
      for (var key in submitEvent.target.elements) {
        if (submitEvent.target.elements[key].type == 'text')
          elements.push(submitEvent.target.elements[key]);
      }
      var order_list = elements.map(function (element) {
        return {
          filename: element.value,
          addon: JSON.parse(element.attributes.addon.nodeValue)
        }
      }
      );

      var formData = new FormData();
      formData.append('order_list', JSON.stringify(order_list))
      formData.append('account_id', context.getters.userId)
      formData.append('booking_id', submitEvent.target.elements.booking_id.value)
      formData.append('order_total_price', submitEvent.target.elements.total.value)
      console.log('TOTAL PRICE : ' + submitEvent.target.elements.total.value)
      axios.post('/_system/php/api/orders/add.php', formData)
        .then(response => {
          console.log(response)
          context.dispatch('getUserOrders')
          context.commit('popLoadArray', 'placeOrder')
        })
        .catch(error => {
          console.error(error)
          context.commit('popLoadArray', 'placeOrder')
        })
    },
    cancelOrder(context, orderId) {

    },
    notifyForPickup(context, ids) {
      context.commit('addLoadArray', 'notifyForPickup')
      console.log('called notifyForPickup')
      var formData = new FormData();
      formData.append('order_id', ids.order_id)
      formData.append('account_id', ids.account_id)
      axios.post('/_system/php/api/orders/notifyForPickup.php', formData)
        .then(response => {
          context.dispatch('getAllOrders')
          context.commit('popLoadArray', 'notifyForPickup')
        })
        .catch(error => {
          console.error(error)
          context.commit('popLoadArray', 'notifyForPickup')
        })
    },
    markAsReleased(context, ids) {
      context.commit('addLoadArray', 'markAsReleased')
      console.log('called markAsReleased')
      var formData = new FormData();
      formData.append('order_id', ids.order_id)
      formData.append('account_id', ids.account_id)
      axios.post('/_system/php/api/orders/markAsReleased.php', formData)
        .then(response => {
          console.log(response)
          context.dispatch('getAllOrders')
          context.commit('popLoadArray', 'markAsReleased')
        })
        .catch(error => {
          console.error(error)
          context.commit('popLoadArray', 'markAsReleased')
        })
    },
    loadWeekBookings(context) {
      context.commit('addLoadArray', 'loadWeekBookings')
      console.log('calledLoadWeekBookings')
      axios.get(`/_system/php/api/booking/getByWeek.php?from_date=${new Date().getFullYear() + '-' + (((new Date().getMonth() + 1) < 10) ? '0' : '') + (new Date().getMonth() + 1) + '-' + (((new Date().getDate() + 1) < 10) ? '0' : '') + new Date().getDate()}`)
        .then(response => {
          console.log('response: ' + JSON.stringify(response.data))
          context.commit('setWeekBookings', JSON.stringify(response.data))
          context.commit('popLoadArray', 'loadWeekBookings')
        })
        .catch(error => {
          console.log(error)
          context.commit('popLoadArray', 'loadWeekBookings')
        })

    },
    blockDate(context, date_value) {
      context.commit('addLoadArray', 'blockDate')
      console.log('called blockDate')
      axios.get(`/_system/php/api/booking/blockDate.php?date=${date_value}`)
        .then(response => {
          console.log('response: ' + JSON.stringify(response.data))
          context.dispatch('loadBlockedDates')
          context.commit('popLoadArray', 'blockeDate')
        })
        .catch(error => {
          console.log(error)
          context.commit('popLoadArray', 'blockeddate')
        })
    },
    loadBlockedDates(context) {
      context.commit('addLoadArray', 'loadBlockedDates')
      console.log('called loadBlockedDates')
      axios.get(`/_system/php/api/booking/loadBlockedDates.php`)
        .then(response => {
          console.log('response: ' + JSON.stringify(response.data))
          context.commit('setBlockedDates', response.data.data)
          context.commit('popLoadArray', 'loadBlockedDates')

        })
        .catch(error => {
          console.log(error)
          context.commit('popLoadArray', 'loadBlockedDates')
        })
    },
    removeBlockedDate(context, date_id) {
      context.commit('addLoadArray', 'removeBlockedDate')
      console.log('called removeBlockedDate')
      axios.get(`/_system/php/api/booking/removeBlockedDate.php?date_id=${date_id}`)
        .then(response => {
          console.log('response: ' + JSON.stringify(response.data))
          context.dispatch('loadBlockedDates')
          context.commit('popLoadArray', 'removeBlockedDates')
        })
        .catch(error => {
          console.log(error)
          context.commit('popLoadArray', 'removeBlockedDates')
        })
    },
    loadBlockedDays(context) {
      context.commit('addLoadArray', 'loadBlockedDays')
      console.log('called loadBlockedDays')
      axios.get(`/_system/php/functions/loadConfig.php?config_key=blocked_days`)
        .then(response => {
          console.log('response: ' + JSON.stringify(response.data))
          context.commit('setBlockedDays', JSON.parse(response.data.data.config_value))
          context.commit('popLoadArray', 'loadBlockedDays')
        })
        .catch(error => {
          console.log(error)
          context.commit('popLoadArray', 'loadBlockedDays')
        })
    },
    saveBlockedDays(context, value) {
      context.commit('addLoadArray', 'saveBlockedDays')
      console.log('called saveBlockedDays')
      axios.get(`/_system/php/functions/setConfig.php?config_key=blocked_days&config_value=${value}`)
        .then(response => {
          console.log('response: ' + JSON.stringify(response.data))
          context.dispatch('loadBlockedDays')
          context.commit('popLoadArray', 'saveBlockedDays')
        })
        .catch(error => {
          console.log(error)
          context.commit('popLoadArray', 'saveBlockedDays')
        })
    },
    changeAccountType(context, accountobj) {
      context.commit('addLoadArray', 'changeAccountType')
      console.log('called changeAccountType of ' + accountobj.account_id + " to " + accountobj.account_type)
      var formData = new FormData()
      formData.append('account_id',accountobj.account_id)
      formData.append('account_type',accountobj.account_type)
      axios.post(`/_system/php/api/account/changeAccountType.php`,formData)
        .then(response => {
          console.log('response: ' + JSON.stringify(response.data))
          context.dispatch('getAllUsers')
          context.commit('popLoadArray', 'changeAccountType')
        })
        .catch(error => {
          console.log(error)
          context.commit('popLoadArray', 'changeAccountType')
        })
    }





  }
})
