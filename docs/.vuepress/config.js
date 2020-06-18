module.exports = {
    title: '黑色的祥云',
    description: '专为个人学习总结',
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'NodeJs',
                items:[
                    {
                        text: '原生Node',
                        link: '/node/primary/'
                    },
                    {
                        text: 'Express',
                        link: '/node/express/'
                    },
                    {
                        text: 'Koa2',
                        link: '/node/koa2/'
                    },
                ]
            },
            {
                text: '前端',
                items:[
                    {
                        text: '浏览器',
                        link: '/web/browser/'
                    },
                    {
                        text: 'JavaScript',
                        link: '/web/javascript/'
                    },
                    {
                        text: 'Vue',
                        link: '/web/vue/'
                    },
                    {
                        text: 'React',
                        link: '/web/react/'
                    },
                ]
            },
            {
                text: '服务端',
                link: '/server/'
            },
            {
                text: '面试',
                link: '/interview/'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/XuChaoY'
            },
        ],
        sidebarDepth: 2,
        displayAllHeaders:true
        // sidebar:[
        //     ['/node/primary/', "原生node"],
        //     ['/node/express/', "Express"],
        //     ['/node/koa2/', "Koa2"],
        //     ['/web/browser/', "浏览器"],
        //     ['/web/javascript/', "JavaScript"],
        //     ['/web/vue/', "Vue"],
        //     ['/web/react/', "React"],
        //     ['/server/', "服务端"],
        //     ['/interview/', "面试"]
        // ],
    }
}