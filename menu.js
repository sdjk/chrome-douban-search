// 目录脚本
chrome.contextMenus.create({
    title: '豆瓣电影搜索"%s"', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(item)
    {
        chrome.tabs.create({url: 'https://movie.douban.com/subject_search?search_text=' + item.selectionText + '&cat=1002'});
    }
});


