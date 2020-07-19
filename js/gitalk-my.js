

function lablegen(hook) {
    hook.doneEach(function () {
        gitalk = new Gitalk({
            clientID: '933ab0bb3e2464f51f27',
            clientSecret: '67016febaae89221e9cbbad907d5f7a0c8e8b7da',
            repo: 'cxk233.github.io',
            owner: 'cxk233',
            admin: ['cxk233'],
            id: hex_md5(window.location.pathname + window.location.hash.split('?')[0]),
            distractionFreeMode: true
        });
        // console.log(gitalk.id) 
        // console.log(gitalk)
        console.log("new gitalk")
    });
}
//
$docsify.plugins = [].concat(lablegen, $docsify.plugins);