export default {
    async paths() {
        const routes = (await import('../../routes.json')).default
        console.log(routes);

        return routes.map(route => {
            return { params: { slug: route.slug, next: route.next, prev: route.prev }, content: route.content }
        })
    }
}