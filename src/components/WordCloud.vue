<template>
<div>
  <input v-model="search" placeholder="キーワードを入力してください">
  <p>{{search}}</p>
  <input @click="flag_cloud_func()" type="submit" name="submit" value="検索">

  <div v-if="flag_cloud!='サル痘'&&flag_cloud!='筑波大学'&&flag_cloud!='凱旋門賞'">
    <p>検索ワードを入れてみてね</p>
    <p>現在検索できるワードは</p>
    <p>サル痘</p>
    <p>筑波大学</p>
    <p>凱旋門賞</p>
  </div>

  <div v-if="flag_cloud=='サル痘'">
    {{/* eslint-disable */}}
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
<rect width="100%" height="100%" style="fill:white"></rect>
<a @click='Popout("サル")'><text transform="translate(244,56)" font-size="60" style="fill:rgb(189, 222, 102)">サル</text></a>
<a @click='Popout("感染")'><text transform="translate(306,114)" font-size="47" style="fill:rgb(188, 222, 102)">感染</text></a>
<a @click='Popout("ワクチン")'><text transform="translate(57,369)" font-size="46" style="fill:rgb(22, 138, 102)">ワクチン</text></a>
<a @click='Popout("コロナ")'><text transform="translate(154,46)" font-size="37" style="fill:rgb(23, 139, 102)">コロナ</text></a>
<a @click='Popout("接種")'><text transform="translate(410,345)" font-size="36" style="fill:rgb(6, 130, 102)">接種</text></a>
<a @click='Popout("天然痘")'><text transform="translate(353,321)" font-size="32" style="fill:rgb(107, 181, 102)">天然痘</text></a>
<a @click='Popout("免疫")'><text transform="translate(76,181)" font-size="32" style="fill:rgb(207, 231, 102)">免疫</text></a>
<a @click='Popout("ウイルス")'><text transform="translate(143,141)" font-size="32" style="fill:rgb(178, 216, 102)">ウイルス</text></a>
<a @click='Popout("人々")'><text transform="translate(430,120)" font-size="30" style="fill:rgb(55, 155, 102)">人々</text></a>
<a @click='Popout("ワク")'><text transform="translate(145,88)" font-size="29" style="fill:rgb(23, 139, 102)">ワク</text></a>
<a @click='Popout("男性")'><text transform="translate(287,232)" font-size="28" style="fill:rgb(154, 204, 102)">男性</text></a>
<a @click='Popout("打つ")'><text transform="translate(238,288)" font-size="27" style="fill:rgb(137, 196, 102)">打つ</text></a>
<a @click='Popout("怖い")'><text transform="translate(102,246)" font-size="25" style="fill:rgb(20, 138, 102)">怖い</text></a>
<a @click='Popout("trilliana")'><text transform="translate(403,383)" font-size="24" style="fill:rgb(158, 206, 102)">trilliana</text></a>
<a @click='Popout("国籍")'><text transform="translate(494,359)" font-size="23" style="fill:rgb(49, 152, 102)">国籍</text></a>
<a @click='Popout("流行")'><text transform="translate(335,161)" font-size="22" style="fill:rgb(197, 226, 102)">流行</text></a>
<a @click='Popout("低下")'><text transform="translate(567,164)" font-size="21" style="fill:rgb(221, 238, 102)">低下</text></a>
<a @click='Popout("ワクシニア")'><text transform="translate(167,196)" font-size="20" style="fill:rgb(162, 208, 102)">ワクシニア</text></a>
<a @click='Popout("恐怖")'><text transform="translate(131,236)" font-size="19" style="fill:rgb(90, 172, 102)">恐怖</text></a>
<a @click='Popout("発生")'><text transform="translate(359,59)" font-size="18" style="fill:rgb(155, 205, 102)">発生</text></a>
<a @click='Popout("警告")'><text transform="translate(283,167)" font-size="18" style="fill:rgb(41, 148, 102)">警告</text></a>
<a @click='Popout("who")'><text transform="translate(541,364)" font-size="17" style="fill:rgb(56, 156, 102)">who</text></a>
<a @click='Popout("明らか")'><text transform="translate(66,52)" font-size="17" style="fill:rgb(58, 156, 102)">明らか</text></a>
<a @click='Popout("日本人")'><text transform="translate(469,219)" font-size="16" style="fill:rgb(102, 178, 102)">日本人</text></a>
<a @click='Popout("宣言")'><text transform="translate(303,344)" font-size="16" style="fill:rgb(224, 240, 102)">宣言</text></a>
<a @click='Popout("抑制")'><text transform="translate(176,304)" font-size="16" style="fill:rgb(101, 178, 102)">抑制</text></a>
<a @click='Popout("摂取")'><text transform="translate(166,283)" font-size="16" style="fill:rgb(36, 146, 102)">摂取</text></a>
<a @click='Popout("適当")'><text transform="translate(168,348)" font-size="16" style="fill:rgb(137, 196, 102)">適当</text></a>
<a @click='Popout("状態")'><text transform="translate(205,268)" font-size="16" style="fill:rgb(229, 242, 102)">状態</text></a>
<a @click='Popout("本人")'><text transform="translate(1,150)" font-size="16" style="fill:rgb(255, 255, 102)">本人</text></a>
<a @click='Popout("周囲")'><text transform="translate(454,307)" font-size="16" style="fill:rgb(23, 139, 102)">周囲</text></a>
<a @click='Popout("確率")'><text transform="translate(434,83)" font-size="16" style="fill:rgb(39, 147, 102)">確率</text></a>
<a @click='Popout("可能")'><text transform="translate(420,269)" font-size="16" style="fill:rgb(152, 204, 102)">可能</text></a>
<a @click='Popout("パンデミック")'><text transform="translate(347,271)" font-size="16" style="fill:rgb(255, 255, 102)">パンデミック</text></a>
<a @click='Popout("東京")'><text transform="translate(179,366)" font-size="16" style="fill:rgb(220, 238, 102)">東京</text></a>
<a @click='Popout("北中")'><text transform="translate(180,88)" font-size="16" style="fill:rgb(174, 214, 102)">北中</text></a>
<a @click='Popout("住む")'><text transform="translate(578,184)" font-size="16" style="fill:rgb(196, 226, 102)">住む</text></a>
<a @click='Popout("副作用")'><text transform="translate(227,215)" font-size="16" style="fill:rgb(111, 183, 102)">副作用</text></a>
<a @click='Popout("事態")'><text transform="translate(453,177)" font-size="15" style="fill:rgb(248, 252, 102)">事態</text></a>
<a @click='Popout("入国")'><text transform="translate(198,325)" font-size="15" style="fill:rgb(233, 244, 102)">入国</text></a>
<a @click='Popout("症状")'><text transform="translate(43,200)" font-size="15" style="fill:rgb(215, 235, 102)">症状</text></a>
<a @click='Popout("ネット")'><text transform="translate(282,147)" font-size="15" style="fill:rgb(39, 147, 102)">ネット</text></a>
<a @click='Popout("隠す")'><text transform="translate(378,358)" font-size="15" style="fill:rgb(244, 250, 102)">隠す</text></a>
<a @click='Popout("配慮")'><text transform="translate(149,12)" font-size="15" style="fill:rgb(153, 204, 102)">配慮</text></a>
<a @click='Popout("情報")'><text transform="translate(272,81)" font-size="14" style="fill:rgb(237, 246, 102)">情報</text></a>
<a @click='Popout("新型")'><text transform="translate(448,204)" font-size="14" style="fill:rgb(61, 158, 102)">新型</text></a>
<a @click='Popout("考える")'><text transform="translate(185,66)" font-size="14" style="fill:rgb(21, 138, 102)">考える</text></a>
<a @click='Popout("totalworld")'><text transform="translate(499,48)" font-size="14" style="fill:rgb(250, 252, 102)">totalworld</text></a>
<a @click='Popout("確認")'><text transform="translate(73,99)" font-size="14" style="fill:rgb(32, 144, 102)">確認</text></a>
<a @click='Popout("ファイザー")'><text transform="translate(207,243)" font-size="14" style="fill:rgb(42, 148, 102)">ファイザー</text></a>
<a @click='Popout("受ける")'><text transform="translate(530,306)" font-size="14" style="fill:rgb(246, 251, 102)">受ける</text></a>
<a @click='Popout("日本")'><text transform="translate(447,145)" font-size="13" style="fill:rgb(182, 219, 102)">日本</text></a>
<a @click='Popout("同性愛")'><text transform="translate(137,277)" font-size="13" style="fill:rgb(112, 184, 102)">同性愛</text></a>
<a @click='Popout("拡大")'><text transform="translate(109,96)" font-size="13" style="fill:rgb(63, 159, 102)">拡大</text></a>
<a @click='Popout("ヒト")'><text transform="translate(380,22)" font-size="13" style="fill:rgb(150, 203, 102)">ヒト</text></a>
<a @click='Popout("食糧")'><text transform="translate(196,163)" font-size="13" style="fill:rgb(1, 128, 102)">食糧</text></a>
<a @click='Popout("戦争")'><text transform="translate(6,56)" font-size="13" style="fill:rgb(58, 156, 102)">戦争</text></a>
<a @click='Popout("現実")'><text transform="translate(570,235)" font-size="13" style="fill:rgb(18, 136, 102)">現実</text></a>
<a @click='Popout("rvkwq")'><text transform="translate(328,331)" font-size="13" style="fill:rgb(124, 190, 102)">rvkwq</text></a>
<a @click='Popout("vg")'><text transform="translate(578,344)" font-size="13" style="fill:rgb(62, 158, 102)">vg</text></a>
</svg>
</div>
    <!-- <h1>{{flag_word}}</h1> -->

  <div v-if="flag_cloud=='筑波大学'">
  <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
<rect width="100%" height="100%" style="fill:white"></rect>
    <a @click='Popout("")'><rect width="100%" height="100%" style="fill:white"></rect></a>
<a @click='Popout("筑波大学")'><text transform="translate(200,58)" font-size="60" style="fill:rgb(189, 222, 102)">筑波大学</text></a>
<a @click='Popout("大学")'><text transform="translate(282,118)" font-size="43" style="fill:rgb(188, 222, 102)">大学</text></a>
<a @click='Popout("統一教会")'><text transform="translate(179,352)" font-size="38" style="fill:rgb(22, 138, 102)">統一教会</text></a>
<a @click='Popout("学生")'><text transform="translate(490,47)" font-size="36" style="fill:rgb(23, 139, 102)">学生</text></a>
<a @click='Popout("砂防")'><text transform="translate(481,348)" font-size="34" style="fill:rgb(6, 130, 102)">砂防</text></a>
<a @click='Popout("思う")'><text transform="translate(146,381)" font-size="32" style="fill:rgb(179, 217, 102)">思う</text></a>
<a @click='Popout("フォロー")'><text transform="translate(504,295)" font-size="32" style="fill:rgb(150, 203, 102)">フォロー</text></a>
<a @click='Popout("言う")'><text transform="translate(123,27)" font-size="30" style="fill:rgb(194, 224, 102)">言う</text></a>
<a @click='Popout("futureship")'><text transform="translate(367,233)" font-size="28" style="fill:rgb(87, 171, 102)">futureship</text></a>
<a @click='Popout("本部")'><text transform="translate(40,214)" font-size="28" style="fill:rgb(26, 140, 102)">本部</text></a>
<a @click='Popout("写真")'><text transform="translate(251,238)" font-size="28" style="fill:rgb(216, 236, 102)">写真</text></a>
<a @click='Popout("撮る")'><text transform="translate(421,61)" font-size="28" style="fill:rgb(186, 220, 102)">撮る</text></a>
<a @click='Popout("imb")'><text transform="translate(148,286)" font-size="28" style="fill:rgb(20, 138, 102)">imb</text></a>
<a @click='Popout("jvui")'><text transform="translate(408,286)" font-size="28" style="fill:rgb(158, 206, 102)">jvui</text></a>
<a @click='Popout("朝日新聞")'><text transform="translate(36,252)" font-size="28" style="fill:rgb(49, 152, 102)">朝日新聞</text></a>
<a @click='Popout("sdgs")'><text transform="translate(383,331)" font-size="28" style="fill:rgb(58, 156, 102)">sdgs</text></a>
<a @click='Popout("組織")'><text transform="translate(93,91)" font-size="28" style="fill:rgb(218, 236, 102)">組織</text></a>
<a @click='Popout("carp")'><text transform="translate(509,175)" font-size="28" style="fill:rgb(71, 163, 102)">carp</text></a>
<a @click='Popout("相互")'><text transform="translate(488,150)" font-size="28" style="fill:rgb(41, 148, 102)">相互</text></a>
<a @click='Popout("説明")'><text transform="translate(276,273)" font-size="28" style="fill:rgb(68, 162, 102)">説明</text></a>
<a @click='Popout("研究")'><text transform="translate(465,254)" font-size="26" style="fill:rgb(18, 136, 102)">研究</text></a>
<a @click='Popout("入試")'><text transform="translate(223,199)" font-size="26" style="fill:rgb(186, 220, 102)">入試</text></a>
<a @click='Popout("教育")'><text transform="translate(8,298)" font-size="23" style="fill:rgb(69, 162, 102)">教育</text></a>
<a @click='Popout("土砂")'><text transform="translate(195,164)" font-size="23" style="fill:rgb(175, 215, 102)">土砂</text></a>
<a @click='Popout("防衛")'><text transform="translate(517,64)" font-size="20" style="fill:rgb(58, 156, 102)">防衛</text></a>
<a @click='Popout("政治")'><text transform="translate(120,222)" font-size="20" style="fill:rgb(102, 178, 102)">政治</text></a>
<a @click='Popout("北海道大学")'><text transform="translate(77,310)" font-size="20" style="fill:rgb(224, 240, 102)">北海道大学</text></a>
<a @click='Popout("mirai")'><text transform="translate(478,367)" font-size="20" style="fill:rgb(127, 191, 102)">mirai</text></a>
<a @click='Popout("media")'><text transform="translate(537,364)" font-size="20" style="fill:rgb(117, 186, 102)">media</text></a>
<a @click='Popout("pro")'><text transform="translate(63,115)" font-size="20" style="fill:rgb(190, 222, 102)">pro</text></a>
<a @click='Popout("学校")'><text transform="translate(354,337)" font-size="20" style="fill:rgb(229, 242, 102)">学校</text></a>
<a @click='Popout("居る")'><text transform="translate(388,163)" font-size="20" style="fill:rgb(255, 255, 102)">居る</text></a>
<a @click='Popout("人間")'><text transform="translate(147,184)" font-size="20" style="fill:rgb(23, 139, 102)">人間</text></a>
<a @click='Popout("確率")'><text transform="translate(566,64)" font-size="20" style="fill:rgb(39, 147, 102)">確率</text></a>
<a @click='Popout("押し寄せる")'><text transform="translate(92,357)" font-size="17" style="fill:rgb(108, 182, 102)">押し寄せる</text></a>
<a @click='Popout("迷惑")'><text transform="translate(232,282)" font-size="17" style="fill:rgb(152, 204, 102)">迷惑</text></a>
<a @click='Popout("受託")'><text transform="translate(577,179)" font-size="17" style="fill:rgb(248, 252, 102)">受託</text></a>
<a @click='Popout("押しかける")'><text transform="translate(73,19)" font-size="17" style="fill:rgb(174, 214, 102)">押しかける</text></a>
<a @click='Popout("集団")'><text transform="translate(285,192)" font-size="17" style="fill:rgb(196, 226, 102)">集団</text></a>
<a @click='Popout("試験")'><text transform="translate(200,211)" font-size="17" style="fill:rgb(111, 183, 102)">試験</text></a>
<a @click='Popout("問題")'><text transform="translate(458,191)" font-size="17" style="fill:rgb(248, 252, 102)">問題</text></a>
<a @click='Popout("可能")'><text transform="translate(164,394)" font-size="17" style="fill:rgb(233, 244, 102)">可能</text></a>
<a @click='Popout("関係")'><text transform="translate(328,223)" font-size="17" style="fill:rgb(215, 235, 102)">関係</text></a>
<a @click='Popout("団体")'><text transform="translate(170,147)" font-size="17" style="fill:rgb(39, 147, 102)">団体</text></a>
<a @click='Popout("人材")'><text transform="translate(408,13)" font-size="17" style="fill:rgb(153, 204, 102)">人材</text></a>
<a @click='Popout("好き")'><text transform="translate(400,66)" font-size="17" style="fill:rgb(237, 246, 102)">好き</text></a>
<a @click='Popout("仕事")'><text transform="translate(74,337)" font-size="17" style="fill:rgb(206, 230, 102)">仕事</text></a>
<a @click='Popout("募集")'><text transform="translate(234,106)" font-size="17" style="fill:rgb(224, 240, 102)">募集</text></a>
<a @click='Popout("支援")'><text transform="translate(46,55)" font-size="17" style="fill:rgb(187, 221, 102)">支援</text></a>
<a @click='Popout("締切")'><text transform="translate(504,314)" font-size="17" style="fill:rgb(136, 195, 102)">締切</text></a>
<a @click='Popout("文科")'><text transform="translate(369,268)" font-size="17" style="fill:rgb(121, 188, 102)">文科</text></a>
<a @click='Popout("利権")'><text transform="translate(170,118)" font-size="17" style="fill:rgb(135, 195, 102)">利権</text></a>
<a @click='Popout("ベネッセ")'><text transform="translate(98,125)" font-size="17" style="fill:rgb(237, 246, 102)">ベネッセ</text></a>
<a @click='Popout("家庭")'><text transform="translate(248,300)" font-size="17" style="fill:rgb(51, 153, 102)">家庭</text></a>
<a @click='Popout("教師")'><text transform="translate(48,291)" font-size="17" style="fill:rgb(166, 210, 102)">教師</text></a>
<a @click='Popout("トライ")'><text transform="translate(509,253)" font-size="17" style="fill:rgb(115, 185, 102)">トライ</text></a>
<a @click='Popout("自衛隊")'><text transform="translate(347,53)" font-size="17" style="fill:rgb(86, 171, 102)">自衛隊</text></a>
<a @click='Popout("総務")'><text transform="translate(142,111)" font-size="17" style="fill:rgb(150, 203, 102)">総務</text></a>
<a @click='Popout("デジタル")'><text transform="translate(65,382)" font-size="17" style="fill:rgb(15, 135, 102)">デジタル</text></a>
<a @click='Popout("通信")'><text transform="translate(566,29)" font-size="17" style="fill:rgb(220, 238, 102)">通信</text></a>
</svg>
  </div>

  <div v-if="flag_cloud=='凱旋門賞'">
  <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
<rect width="100%" height="100%" style="fill:white"></rect>
<a @click='Popout("凱旋")'><text transform="translate(244,56)" font-size="60" style="fill:rgb(189, 222, 102)">凱旋</text></a>
<a @click='Popout("ナカヤマフェスタ")'><text transform="translate(269,145)" font-size="55" style="fill:rgb(188, 222, 102)">ナカヤマフェスタ</text></a>
<a @click='Popout("見る")'><text transform="translate(418,374)" font-size="54" style="fill:rgb(22, 138, 102)">見る</text></a>
<a @click='Popout("okazu")'><text transform="translate(35,59)" font-size="53" style="fill:rgb(23, 139, 102)">okazu</text></a>
<a @click='Popout("惜しい")'><text transform="translate(367,289)" font-size="53" style="fill:rgb(6, 130, 102)">惜しい</text></a>
<a @click='Popout("オルフェーヴル")'><text transform="translate(111,334)" font-size="53" style="fill:rgb(179, 217, 102)">オルフェーヴル</text></a>
<a @click='Popout("fohfglv")'><text transform="translate(161,206)" font-size="53" style="fill:rgb(150, 203, 102)">fohfglv</text></a>
<a @click='Popout("ドウデュース")'><text transform="translate(422,26)" font-size="30" style="fill:rgb(194, 224, 102)">ドウデュース</text></a>
<a @click='Popout("トレセン")'><text transform="translate(234,238)" font-size="27" style="fill:rgb(87, 171, 102)">トレセン</text></a>
<a @click='Popout("調整")'><text transform="translate(553,327)" font-size="27" style="fill:rgb(86, 171, 102)">調整</text></a>
<a @click='Popout("ニエル")'><text transform="translate(326,80)" font-size="26" style="fill:rgb(91, 173, 102)">ニエル</text></a>
<a @click='Popout("gendai")'><text transform="translate(458,208)" font-size="23" style="fill:rgb(206, 230, 102)">gendai</text></a>
<a @click='Popout("keiba")'><text transform="translate(25,337)" font-size="23" style="fill:rgb(31, 143, 102)">keiba</text></a>
<a @click='Popout("日本ダービー")'><text transform="translate(179,85)" font-size="23" style="fill:rgb(141, 198, 102)">日本ダービー</text></a>
<a @click='Popout("遠征")'><text transform="translate(131,278)" font-size="23" style="fill:rgb(226, 240, 102)">遠征</text></a>
<a @click='Popout("入る")'><text transform="translate(63,109)" font-size="23" style="fill:rgb(180, 218, 102)">入る</text></a>
<a @click='Popout("目指す")'><text transform="translate(119,151)" font-size="23" style="fill:rgb(197, 226, 102)">目指す</text></a>
<a @click='Popout("fk")'><text transform="translate(59,138)" font-size="23" style="fill:rgb(221, 238, 102)">fk</text></a>
<a @click='Popout("xt")'><text transform="translate(427,242)" font-size="23" style="fill:rgb(162, 208, 102)">xt</text></a>
<a @click='Popout("fa")'><text transform="translate(89,214)" font-size="23" style="fill:rgb(90, 172, 102)">fa</text></a>
<a @click='Popout("向ける")'><text transform="translate(184,358)" font-size="19" style="fill:rgb(239, 247, 102)">向ける</text></a>
<a @click='Popout("今年")'><text transform="translate(544,262)" font-size="17" style="fill:rgb(162, 208, 102)">今年</text></a>
<a @click='Popout("日本")'><text transform="translate(29,113)" font-size="17" style="fill:rgb(41, 148, 102)">日本</text></a>
<a @click='Popout("ダービー")'><text transform="translate(233,352)" font-size="17" style="fill:rgb(176, 216, 102)">ダービー</text></a>
<a @click='Popout("栗東")'><text transform="translate(461,159)" font-size="17" style="fill:rgb(215, 235, 102)">栗東</text></a>
<a @click='Popout("調教")'><text transform="translate(199,106)" font-size="17" style="fill:rgb(210, 232, 102)">調教</text></a>
<a @click='Popout("騎手")'><text transform="translate(129,190)" font-size="17" style="fill:rgb(68, 162, 102)">騎手</text></a>
<a @click='Popout("応援")'><text transform="translate(45,259)" font-size="14" style="fill:rgb(54, 154, 102)">応援</text></a>
<a @click='Popout("実績")'><text transform="translate(197,371)" font-size="14" style="fill:rgb(36, 146, 102)">実績</text></a>
<a @click='Popout("netkeiba")'><text transform="translate(271,383)" font-size="14" style="fill:rgb(137, 196, 102)">netkeiba</text></a>
<a @click='Popout("qurvjb")'><text transform="translate(304,276)" font-size="14" style="fill:rgb(229, 242, 102)">qurvjb</text></a>
<a @click='Popout("cle")'><text transform="translate(335,100)" font-size="14" style="fill:rgb(255, 255, 102)">cle</text></a>
<a @click='Popout("友道")'><text transform="translate(61,220)" font-size="14" style="fill:rgb(23, 139, 102)">友道</text></a>
<a @click='Popout("ダメージ")'><text transform="translate(289,67)" font-size="14" style="fill:rgb(39, 147, 102)">ダメージ</text></a>
<a @click='Popout("順調")'><text transform="translate(65,284)" font-size="14" style="fill:rgb(108, 182, 102)">順調</text></a>
<a @click='Popout("変わる")'><text transform="translate(514,182)" font-size="14" style="fill:rgb(152, 204, 102)">変わる</text></a>
<a @click='Popout("本番")'><text transform="translate(576,109)" font-size="14" style="fill:rgb(248, 252, 102)">本番</text></a>
<a @click='Popout("見据える")'><text transform="translate(207,15)" font-size="14" style="fill:rgb(174, 214, 102)">見据える</text></a>
<a @click='Popout("使う")'><text transform="translate(67,376)" font-size="14" style="fill:rgb(137, 196, 102)">使う</text></a>
<a @click='Popout("向こう")'><text transform="translate(414,302)" font-size="14" style="fill:rgb(87, 171, 102)">向こう</text></a>
<a @click='Popout("着る")'><text transform="translate(58,78)" font-size="14" style="fill:rgb(116, 186, 102)">着る</text></a>
<a @click='Popout("アタマ")'><text transform="translate(566,351)" font-size="14" style="fill:rgb(67, 161, 102)">アタマ</text></a>
<a @click='Popout("ツアー")'><text transform="translate(436,91)" font-size="14" style="fill:rgb(129, 192, 102)">ツアー</text></a>
<a @click='Popout("ムキムキ")'><text transform="translate(326,348)" font-size="14" style="fill:rgb(76, 166, 102)">ムキムキ</text></a>
<a @click='Popout("投票")'><text transform="translate(353,267)" font-size="14" style="fill:rgb(50, 152, 102)">投票</text></a>
<a @click='Popout("風向き")'><text transform="translate(554,75)" font-size="10" style="fill:rgb(138, 196, 102)">風向き</text></a>
<a @click='Popout("関係")'><text transform="translate(149,8)" font-size="10" style="fill:rgb(153, 204, 102)">関係</text></a>
<a @click='Popout("シンダー")'><text transform="translate(426,59)" font-size="10" style="fill:rgb(237, 246, 102)">シンダー</text></a>
<a @click='Popout("大量")'><text transform="translate(140,246)" font-size="10" style="fill:rgb(61, 158, 102)">大量</text></a>
<a @click='Popout("浴びる")'><text transform="translate(152,249)" font-size="10" style="fill:rgb(242, 248, 102)">浴びる</text></a>
<a @click='Popout("確か")'><text transform="translate(398,382)" font-size="10" style="fill:rgb(208, 232, 102)">確か</text></a>
<a @click='Popout("挑む")'><text transform="translate(135,107)" font-size="10" style="fill:rgb(32, 144, 102)">挑む</text></a>
<a @click='Popout("デインドリーム")'><text transform="translate(62,345)" font-size="10" style="fill:rgb(42, 148, 102)">デインドリーム</text></a>
<a @click='Popout("タイミング")'><text transform="translate(337,310)" font-size="10" style="fill:rgb(108, 182, 102)">タイミング</text></a>
<a @click='Popout("悪い")'><text transform="translate(247,169)" font-size="10" style="fill:rgb(182, 219, 102)">悪い</text></a>
<a @click='Popout("過ぎる")'><text transform="translate(75,291)" font-size="10" style="fill:rgb(166, 210, 102)">過ぎる</text></a>
<a @click='Popout("一番")'><text transform="translate(287,366)" font-size="10" style="fill:rgb(30, 142, 102)">一番</text></a>
<a @click='Popout("ステイフーリッシュ")'><text transform="translate(221,260)" font-size="10" style="fill:rgb(5, 130, 102)">ステイフーリッシュ</text></a>
<a @click='Popout("モン")'><text transform="translate(59,241)" font-size="10" style="fill:rgb(56, 156, 102)">モン</text></a>
<a @click='Popout("ジュー")'><text transform="translate(484,282)" font-size="10" style="fill:rgb(15, 135, 102)">ジュー</text></a>
</svg>
  </div>

    <div class="SelectedWord" v-if="flag_word==1">
    <h1>{{SelectedWord}}</h1>
    <!-- <div v-for="n in 4"> -->
      <div class="tweet0">
        <p v-if="flag_word==1" >{{datas[SelectedWord][0]}}</p>
      </div>
      <div class="tweet1">
        <p v-if="flag_word==1" >{{datas[SelectedWord][1]}}</p>
      </div>
      <div class="tweet2">
        <p v-if="flag_word==1" >{{datas[SelectedWord][2]}}</p>
      </div>
      <div class="tweet3">
        <p v-if="flag_word==1" >{{datas[SelectedWord][3]}}</p>
      <!-- </div> -->
      </div>
    </div>
</div>
</template>

<script>
  export default{
    name: 'WordCloud',
    data(){
      return{
        datas:
        
      {サル:[
      ["@Sankei_news","サル痘が欧米、中東で拡大ＷＨＯ「極めて異常」　ヒト間の感染警告 https://sankei.com/article/20220523-SMHEOUM6H5JZBBPM7RIGOOANQY/ＷＨＯなどによると、サル痘は発熱や体の痛みのほか、顔や手足に発疹が出る感染症。通常数週間で治るが、子供や免疫力が低下した人は重症に陥る恐れがある。"],
      ["@nemurinomori555","サル痘予防のために、外出先でウォシュレット使うのやめよう。"],
      ["@4JNHXsanx0ZV79j","日本国特許庁【サル痘】検索結果合成キメラワクシニアウイルスって、何？"],
      ["@WHOKobe","7月23日、WHOはサル痘の「国際保健上の緊急事態（PHEIC: Public Health Emergencies of International Concern)」を発表しました。テドロス事務局長による発表記者会見はこちらから（英語)https://bit.ly/3PTLzuF"],
      ["現在サル痘の患者は99%程度が男性で、主な感染経路は男性同士の性的接触だということが分かっています。また、まだ日本では確認されていませんので、大きな心配は必要ありません。あまり過剰に怖がらないようにしましょう。新型コロナのような感染拡大をする病気ではありません。","@MIKITO_777"]
      ],

      コロナ:[
      ["@MIKITO_777","現在サル痘の患者は99%程度が男性で、主な感染経路は男性同士の性的接触だということが分かっています。また、まだ日本では確認されていませんので、大きな心配は必要ありません。あまり過剰に怖がらないようにしましょう。新型コロナのような感染拡大をする病気ではありません。"],
      ["@hamhamham0123","私サル痘よりも梅毒とエイズの方が普通に怖いんですけど世の中のコロナとサル痘は気にして性病検査しない風俗客の皆さん大丈夫ですか？？？？？？？"],
      ["@NOSUKE0607","コロナ、サル痘、自民党。日本の危機はこっちだ。"],
      ["@SakamotoFumie","コロナで感染症が注目され、サル痘でまたかと思ってしまうかもですが、過去約10年で新興/再興感染症の国内発生や流行は割と起きている。この際、もっと注目されてほしい。2009年新型インフル2012年MERS★2013年SFTS2014年デング熱2018年-2019年風疹2019年麻疹★常に輸入可能性アリも未発生"],
      ]},
        // {映画:[
        //   ["@BOURGEOIS_LST",
        //   "9TH表紙の決め手は松村北斗主演の映画をロンドンで見れたこと、その主題歌を聴いた時にテーマである「自分らしくいたい」と思えたことがきっかけだった。ロンドンが似合うからいつか遊びきてね。#古着屋巡りしよう#北斗くん#ロンドンで"],
      
        //   ["@miyarin",
        //   "くそだったわ"],
      
        //   ["@Ami",
        //   "なんやこれ"],
        //   ["@iseyuu",
        //    "くそおもしろかった"],
        //   ["@chino",
        //    "泣いた"]],
        // 思う:
        // [["@nakano0316",
        // "あと政治家だけじゃなくて、官僚にもかなりいると思う"]]
        //   },
        textQuery: 'sample',
        sampleHTML: '',
        flag_cloud: '',
        flag_word:0,
        SelectedWord:'',
        search: ''
      }
    },
    methods: {
      Popout(word){
        if(this.flag_word==0){
          this.flag_word=1;
          this.SelectedWord=word;
        }else if(this.flag_word==1){
          this.flag_word=0;
        }
      },
      flag_cloud_func(){
        this.flag_word = 0
        this.flag_cloud = this.search
      },
      getData() {
        const headers = {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          }
        this.$axios
          .get("https://bubble-back.herokuapp.com",{params:{textQuery:this.textQuery}, headers: headers})
          .then(
            function (res) {
              console.log("ok")
              console.log(res.data.wordCloud)
              this.sampleHTML = res.data.wordCloud
            }.bind(this)
          ) // Promise処理を行う場合は.bind(this)が必要
          .catch(function (error) {
            // バックエンドからエラーが返却された場合に行う処理について
            console.log(error)
          })
          .finally(function () {})
      },
    },
  }
</script>

<style>
a,a:hover,a:visited{
    color: inherit;
}
.SelectedWord{
  font-size:60px;
  position:relative;
}
.tweet0{
  position:absolute;
  width: 300px;
  font-size:medium;
  top: 10%;
  right: 70%;
}
.tweet1{
  position:absolute;
  width: 300px;
  font-size:medium;
  top: -50%;
  left: 40%;
}
.tweet2{
  position:absolute;
  width: 300px;
  font-size:medium;
  top: 10%;
  left: 60%;
}
.tweet3{
  position:absolute;
  width: 300px;
  font-size:medium;
  bottom: -120%;
  left: 40%;
}
text {
  font-family:'Arial Unicode MS';
  font-weight:normal;
  font-style:normal;
}
</style>