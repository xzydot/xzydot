import {defaultTheme} from 'vuepress'
import {backToTopPlugin} from '@vuepress/plugin-back-to-top'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default {
    port: 3000,
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    plugins: [
        docsearchPlugin({
            // 配置项
            apiKey: 'de7defbc3d99174ec23bb292c0158c3a',
            indexName: 'xzy',
            appId: 'NBER6HWS21'
        }),
        backToTopPlugin(),
    ],
    theme: defaultTheme({
        navbar: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Java',
                children: [
                    {
                        text: 'Java 基础',
                        children: ['/java/basic/java-basic']
                    },
                    {
                        text: 'Java IO/NIO/AIO',
                        children: [
                            '/java/io/java-io-overview',
                            '/java/io/java-io-nio',
                        ]
                    }
                ]
            }
        ],
        sidebar: {
            '/java/': [
                {
                    text: 'Java 基础',   // 必要的
                    children: [
                        '/java/basic/java-basic',
                    ],
                },
                {
                    text: 'Java IO/NIO/AIO',   // 必要的
                    children: [
                        '/java/io/java-io-overview',
                        '/java/io/java-io-nio',
                    ],
                }
            ]
        },
        sidebarDepth: 0
    }),
}

// function genSidebarJava() {
//     return [
//         {
//             text: 'Java 基础',   // 必要的
//             children: [
//                 '/java/basic/java-basic',
//             ],
//         },
//         {
//             text: 'Java IO/NIO/AIO',   // 必要的
//             children: [
//                 '/java/io/java-io-overview',
//                 '/java/io/java-io-nio',
//             ],
//         }
//     ]
// }
