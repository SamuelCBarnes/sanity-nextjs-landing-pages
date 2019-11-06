export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5dc244ed3efb7b345b368fe7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-skd5g3nf',
                  apiId: '7e93f2d6-689d-492c-b0e8-86132084db45'
                },
                {
                  buildHookId: '5dc244eefbde53c3fabbf38d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yxerrrvr',
                  apiId: '3691b498-b19c-4c48-a693-1cae37103565'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SamuelCBarnes/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yxerrrvr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
