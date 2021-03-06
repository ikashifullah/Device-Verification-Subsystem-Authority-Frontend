export default {
  items: [
    {
      title: true,
      name: 'Main Navigation',
      wrapper: {            // optional wrapper object
          element: '',        // required valid HTML5 element tag
          attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      id: 1,
      name: 'VerifyImei',
      url: '/verifyImei',
      icon: 'fa fa-braille',
      // badge: {
      //   variant: 'info',
      //   text: 'NEW'
      // }
    },
    {
        id: 2,
        name: 'Bulkverify',
        url: '/bulk-verify',
        icon: 'fa fa-file-text-o',
    },
    {
        id: 3,
        name: 'CheckStatus',
        url: '/check-status',
        icon: 'fa fa-check-square-o',
    },
   /* {
        id: 3,
        name: 'searchCaseLink',
        url: '/search-cases',
        icon: 'fa fa-search',
    },*/
/*    {
        id: 4,
        name: 'allCasesLink',
        url: '/cases',
        icon: 'fa fa-registered',
        children: [
            {
                id: 5,
                name: 'pendingCaseLink',
                url: '/cases/pending',
                icon: 'fa fa-qrcode'
            },
            {
                id: 6,
                name: 'blockedCaseLink',
                url: '/cases/blocked',
                icon: 'fa fa-lock'
            },
            {
                id: 7,
                name: 'recoveredCaseLink',
                url: '/cases/recovered',
                icon: 'fa fa-undo'
            },
        ]
    },*/

  ]
};
