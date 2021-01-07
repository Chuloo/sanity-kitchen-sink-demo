export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff6ca9b92388aa8e1c08754',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-demo-studio-zqr6i4u5',
                  apiId: 'ae07f4c7-470a-48d1-b0ae-6c8ce28531c9'
                },
                {
                  buildHookId: '5ff6ca9b27dc5b9a5e0ad07f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-demo-web-1ix1ncsg',
                  apiId: 'd9300f69-1739-4ef1-9abe-ce8e64cf80bc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Chuloo/sanity-kitchen-sink-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-demo-web-1ix1ncsg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
