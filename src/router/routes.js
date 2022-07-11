// User Auth
import Home from '@/views/Home'
import BookGuide from '@/views/BookGuide'
import Countries from '@/views/Countries'
import Cities from '@/views/Cities'
import NotFound from '@/views/NotFound'
import Blog from '@/views/Blog'
import BlogDetail from '@/views/BlogDetail'
import ContactUs from '@/views/ContactUs'
import CommunityMembers from '@/views/community/Members'

// layout
import PublicLayout from '@/layouts/PublicLayout'

export const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
          public: true
        }
      },
      {
        name: 'BookGuide',
        path: '/book_guide',
        component: BookGuide,
        meta: {
          public: true
        }
      },
      {
        name: 'Countries',
        path: '/countries',
        component: Countries,
        meta: {
          public: true
        }
      },
      {
        name: 'Cities',
        path: '/cities',
        component: Cities,
        meta: {
          public: true
        }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        meta: {
          public: true
        }
      },
      {
        path: '/article/:id',
        name: 'Article',
        component: BlogDetail,
        meta: {
          public: true
        }
      },
      {
        path: '/blog',
        name: 'Blog',
        component: Blog,
        meta: {
          public: true
        }
      },
      {
        path: '/contact',
        name: 'ContactUs',
        component: ContactUs,
        meta: {
          public: true
        }
      },
      {
        path: '/community/members',
        name: 'CommunityMembers',
        component: CommunityMembers,
        meta: {
          public: true
        }
      }
    ]
  },
  {
    path: '*',
    component: PublicLayout,
    redirect: '/notfound',
    children: [
      {
        name: 'NotFound',
        path: '/notfound',
        component: NotFound,
        meta: {
          public: true
        }
      }
    ]
  }
]
