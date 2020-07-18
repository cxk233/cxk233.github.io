

function lablegen(hook) {
    hook.doneEach(function () {
        gitalk = new Gitalk({
            clientID: 'ced6988e6ccedf962b67',
            clientSecret: '73a32399b7eda1c3142aa163775550aa214b056a',
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