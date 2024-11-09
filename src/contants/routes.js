const us_number = process.env.REACT_APP_US_NUMBER || '+15023820019'
const website_domain = process.env.REACT_APP_WEBSITE_DOMAIN || ''

export const pages = {
    HOME: '/',
    PUPPIES_FOR_SELL: '/puppies-for-sale',
    BREED: '/breed',
    COLLECTIONS: '/collections',
    PROMISE: '/promise',
    CAREERS: '/careers',
    DOG_REGISTRATION: '/dog-registration',
    AKC: '/akc',

    PUPPY_STANDARDS: '/puppyspot-standards',
    DOG_TRAVEL: '/dog-travel',
    HEALTH_CHECK: '/health-check',
    CUSTOMER_REVIEW: '/reviews',
    PUPPYSPOT_GIVES_BACK: '/gives-back',

    ABOUT_US: '/about-us',
    RESOURCE_CENTER: '/resource-center',
    CONTACT: '/contact',

    LOGIN: '/log-in',
    SIGNUP: '/sign-up',

    REVIEWS: '/reviews',
    BREED_QUIZ: '/breed-selector-quiz',

    BREED_STATE: '/find-puppies/:state',
    SPECIAL_OFFERS: '/special-offers',

    PRIVACY_POLICY: '/privacy',
    TERMS_OR_SERVICE: '/terms-of-use',
    SITE_MAP: '/sitemap',
    BBB: 'https://www.bbb.org/us/fl/fort-lauderdale/profile/pet-services/puppyspot-group-llc-0633-22003405'
}

export const breeds_pages = {
    ACTIVE_DOGS: '/breed/collections/active-dogs',
    BEST_APARTMENT_DOGS: '/breed/collections/best-apartment-dogs',
    BEST_FAMILY_DOGS: '/breed/collections/best-family-dogs',
    DOODLE_PUPPIES: "/breed/collections/doodle-puppies",
    ALLERGY_FRIENDLY_DOGS: '/breed/collections/allergy-friendly-dogs',
    TEACUP_PUPPIES :'/breed/collections/teacup-puppies',
    DYNAMIC_ROUTE_SINGLE_BREED: '/puppies-for-sale/breed/:breed_slug',
    PURE_BREED: '/breed/purebred-breeds',
    DESIGNER_BREED: '/breed/designer-breeds'

}

export const navbar = {
    PHONE_WHATSAPP: `https://wa.me/${us_number}`,
}

export const sub_domain = {
    HELP: `https://help.${website_domain}/`,
    BREEDER_LOGIN: `https://hub.${website_domain}/login`
}

export const socials = {
    FACEBOOK: `https://www.facebook.com/puppyspot`,
    INSTAGRAM: `https://instagram.com/puppy_spot`,
    TWITTER: `https://twitter.com/puppyspot`,
    LINKEDIN: `https://www.linkedin.com/company/puppyspot`,
    YOUTUBE: `https://www.youtube.com/channel/UCFL3Y1Lo6J7BrXg-uC7QUjQ`,
    PINTREST: `https://www.pinterest.com/puppyspot/`,
}