import{_ as n,p as a,q as l,s as e,G as t,t as o,J as s,n as i}from"./framework-4a7f5a2b.js";const h={},d=e("h2",{id:"機能拡張したブラウザapi",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#機能拡張したブラウザapi","aria-hidden":"true"},"#"),t(" 機能拡張したブラウザAPI")],-1),c=e("ol",null,[e("li",null,"ブラウザAPI"),e("li",null,"JavaScriptライブラリが提供するAPI"),e("li",null,"フロントエンド向けアプリケーションフレームワークが提供するAPI"),e("li",null,"ネットワーク経由で利用するWebAPI")],-1),p=e("h2",{id:"ブラウザapi",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ブラウザapi","aria-hidden":"true"},"#"),t(" ブラウザAPI")],-1),u=e("br",null,null,-1),_={href:"https://developer.mozilla.org/ja/docs/Web/API#interfaces",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"APIの使い方は、Webブラウザ側で生成済のオブジェクトのプロパティやメソッドを操作することがほとんどですが、コンストラクタを使って新規オブジェクトを生成することもあります。これらのオブジェクトの型定義（プロパティ、メソッドなど）を「インターフェイス」と呼びます。最新のWebブラウザでは約1000種類のインターフェイスが準備されています。",-1),f=e("br",null,null,-1),g={href:"https://developer.mozilla.org/ja/docs/Web/API#specifications",target:"_blank",rel:"noopener noreferrer"},m=s('<h2 id="javascriptライブラリ" tabindex="-1"><a class="header-anchor" href="#javascriptライブラリ" aria-hidden="true">#</a> JavaScriptライブラリ</h2><p>npmレポジトリからソフトウェアパッケージをダウンロードして利用します。</p><p>JavaScriptとブラウザAPIだけで、ライブラリやフレームワークなしでアプリを作れます。ただし、ブラウザAPIは、低レベルのAPIが多いため、コードが複雑、大量になり開発生産性が低下しがちです。コード量を減らして開発効率を向上させるためにライブラリが必要です。</p><h4 id="よく利用するライブラリ" tabindex="-1"><a class="header-anchor" href="#よく利用するライブラリ" aria-hidden="true">#</a> よく利用するライブラリ</h4><ol><li>UIライブラリ</li><li>グラフィックライブラリ</li><li>データストアライブラリ</li></ol><h4 id="フレームワークとライブラリの共存" tabindex="-1"><a class="header-anchor" href="#フレームワークとライブラリの共存" aria-hidden="true">#</a> フレームワークとライブラリの共存</h4><p>フレームワークは、「仮想DOM」と呼ばれる仕組みを使って、ページ全体を抽象化して集中管理します。そのため、フレームワークを使用しているとき、そのフレームワークを経由せずに直接ページ内の要素を操作すると、表示に不具合が発生する恐れがあります。特に事情がなければ、表示を操作するUIライブラリやグラフィックライブラリなどは、利用するフレームワークに対応しているものを推奨します。例えば、Bootstrapを直接利用せずに、Reactは「React Bootstrap」、Angularは「ng-bootstrap」、Vueは「Bootstrap Vue」を選択します。</p>',7),x={href:"https://react-bootstrap.github.io/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://ng-bootstrap.github.io/#/home",target:"_blank",rel:"noopener noreferrer"},A={href:"https://bootstrap-vue.org/",target:"_blank",rel:"noopener noreferrer"},v=e("h3",{id:"uiライブラリ",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uiライブラリ","aria-hidden":"true"},"#"),t(" UIライブラリ")],-1),P=e("p",null,"Boostrapと同じカテゴリのライブラリです。見栄えのよいボタンや入力ボックス、アコーディオン表示、レスポンシブデザインなどのユーザーインターフェイス関連の機能を提供します。基本的に利用するフレームワークごとに選択肢が変わります。",-1),B=e("h4",{id:"react用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#react用","aria-hidden":"true"},"#"),t(" React用")],-1),k={href:"https://mui.com/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://react-bootstrap.github.io/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://ant.design/",target:"_blank",rel:"noopener noreferrer"},V=e("h4",{id:"angular用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#angular用","aria-hidden":"true"},"#"),t(" Angular用")],-1),W=e("br",null,null,-1),U={href:"https://angular.io/resources?category=development#ui-components",target:"_blank",rel:"noopener noreferrer"},z=e("h4",{id:"vue用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue用","aria-hidden":"true"},"#"),t(" Vue用")],-1),R={href:"https://vuetifyjs.com/ja/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://quasar.dev/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://bootstrap-vue.org/",target:"_blank",rel:"noopener noreferrer"},N=e("h3",{id:"グラフィックライブラリ",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#グラフィックライブラリ","aria-hidden":"true"},"#"),t(" グラフィックライブラリ")],-1),S=e("p",null,[t("ページ状の指定した範囲に自由にグラフィックを描画できます。"),e("strong",null,"グラフ作成ライブラリ"),t("と大量のデータを可視化する"),e("strong",null,"インフォグラフィックくライブラリ"),t("の2種類がよく使われます。これらのライブラリで作成したグラフィックは、その場で表示を操作できるインタラクティブ機能も実現できます。基本的に利用するフレームワークごとに選択肢が変わります。")],-1),q=e("h3",{id:"データストアライブラリ",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#データストアライブラリ","aria-hidden":"true"},"#"),t(" データストアライブラリ")],-1),E=e("p",null,"データストアに書き込んだデータは、ブラウザを閉じでも、電源を切っても、保持されます。モダンWebの開発に欠かせない機能です。ブラウザAPIには、何種類もデータストアがありますが、最も高機能なのがindexedDBで、インデックスを使った検索やオブジェクトデータの保存ができます。データストアライブラリの多くは、このindexedDBを基盤として開発されています。",-1),w=e("br",null,null,-1),C={href:"https://developer.mozilla.org/ja/docs/Web/API/indexedDB_API/Using_indexedDB",target:"_blank",rel:"noopener noreferrer"},L=e("p",null,[t("データストアライブラリには"),e("strong",null,"Dexie.js"),t("、"),e("strong",null,"PouchDB"),t("というライブラリがあります。これらのライブラリは、React、Angular、Vueのどれでも利用できます。")],-1),M=e("p",null,"Dexie.jsは、豊富なAPIを持つ使いやすいデータストアです。",-1),G={href:"https://dexie.org/",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,"PouchDBは、分散データベースApache CouchDBのサブセットをWebブラウザに移植したデータストアライブラリです。バックエンドとフロントエンドのデータ同期、異なるデバイス間のデータ同期ができます。",-1),Q={href:"https://pouchdb.com/",target:"_blank",rel:"noopener noreferrer"};function T(F,H){const r=i("ExternalLinkIcon");return a(),l("div",null,[d,c,p,e("p",null,[t("ブラウザAPIのインターフェイス一覧"),u,e("a",_,[t("https://developer.mozilla.org/ja/docs/Web/API#interfaces"),o(r)])]),b,e("p",null,[t("ブラウザAPI仕様一覧"),f,e("a",g,[t("https://developer.mozilla.org/ja/docs/Web/API#specifications"),o(r)])]),m,e("ul",null,[e("li",null,[t("React Bootstrap公式サイト "),e("a",x,[t("https://react-bootstrap.github.io/"),o(r)])]),e("li",null,[t("ng-bootstrap公式サイト "),e("a",I,[t("https://ng-bootstrap.github.io/#/home"),o(r)])]),e("li",null,[t("BootstrapVue公式サイト "),e("a",A,[t("https://bootstrap-vue.org/"),o(r)])])]),v,P,B,e("ul",null,[e("li",null,[t("Material UI "),e("a",k,[t("https://mui.com/"),o(r)])]),e("li",null,[t("React Bootstrap "),e("a",D,[t("https://react-bootstrap.github.io/"),o(r)])]),e("li",null,[t("Ant Design "),e("a",j,[t("https://ant.design/"),o(r)])])]),V,e("p",null,[t("公式サイトにui-component(UIライブラリ)一覧"),W,e("a",U,[t("https://angular.io/resources?category=development#ui-components"),o(r)])]),z,e("ul",null,[e("li",null,[t("Vuetify "),e("a",R,[t("https://vuetifyjs.com/ja/"),o(r)])]),e("li",null,[t("Quasar "),e("a",y,[t("https://quasar.dev/"),o(r)])]),e("li",null,[t("BootstrapVue "),e("a",J,[t("https://bootstrap-vue.org/"),o(r)])])]),N,S,q,E,e("ul",null,[e("li",null,[t("indexedDBの使用"),w,e("a",C,[t("https://developer.mozilla.org/ja/docs/Web/API/indexedDB_API/Using_indexedDB"),o(r)])])]),L,M,e("ul",null,[e("li",null,[t("Dexie.jp公式サイト "),e("a",G,[t("https://dexie.org/"),o(r)])])]),O,e("ul",null,[e("li",null,[t("PouchDB公式サイト "),e("a",Q,[t("https://pouchdb.com/"),o(r)])])])])}const X=n(h,[["render",T],["__file","browser.html.vue"]]);export{X as default};
