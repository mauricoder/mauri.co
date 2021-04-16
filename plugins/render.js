import config from '~/src/config.js'

export default (ctx, inject) => {  
  inject('render', (markdown) => {
    return ctx.$md.render(markdown, { baseUrl: config.strapiCdnBaseUri})
  })
}