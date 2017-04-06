import user from './components/AppLinkFilm/user.vue'
import filmnew from './components/AppLinkFilm/filmnew.vue'
import filmseries from './components/AppLinkFilm/filmseries.vue'
import filmmovie from './components/AppLinkFilm/filmmovie.vue'

const routes = [
    {
        path: '/user',
        component: user
    },
    {
        path: '/filmnew',
        component: filmnew
    },
    {
        path: '/filmseries',
        component: filmseries
    },
    {
        path: '/filmmovie',
        component: filmmovie
    }
]

export default routes