const mainNavigations = {
    HOME: 'Home',
    FEED: 'Feed',
    CALENDAR: 'Calendar',
} as const;

const authNavigations = {
    AUTH_HOME: 'AuthHome',
    LOGIN: 'Login',
    SINGUP: 'Signup',
} as const;

const mapNavigations = {
    MAP_HOME: 'MapHome',
    ADD_POST: 'AddPost',
} as const;

const feedNavigations = {
    FEED_HOME: 'FeedHome',
    FEED_DETAIL: 'FeedDetail',
    EDIT_POST: 'EditPost',
    IMAGE_ZOOM: 'ImageZoom',
} as const;

export {mainNavigations, authNavigations, mapNavigations, feedNavigations};
