import Following from '~/pages/Following'
import Home from '~/pages/Home'
import Profile from '~/pages/Profile'
import Upload from '~/Upload'
import Search from '~/pages/Search'
import { HeaderOnly } from '~/components/Layout'


//Pubic Routers
const publicRouters = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null }
]

const privateRouters = [

]

export {publicRouters, privateRouters}