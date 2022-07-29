<template>
<div>
  <input type="search" name="search" placeholder="キーワードを入力してください">
  <input @click="flag_cloud_func()" type="submit" name="submit" value="検索">
  <div v-if="flag_cloud==1">
    {{/* eslint-disable */}}
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
    
    <rect width="100%" height="100%" style="fill:white"></rect>
    <a  @click='Popout("サル")'><text transform="translate(244,56)" font-size="60" style="fill:rgb(127, 127, 127)">サル</text></a>

    <a  @click='Popout("コロナ")' ><text transform="translate(252,132)" font-size="44" style="fill:rgb(127, 127, 127)">コロナ</text></a>
    
    <text transform="translate(36,87)" font-size="20" style="fill:rgb(127, 127, 127)">男性</text>
    <text transform="translate(107,275)" font-size="20" style="fill:rgb(174, 199, 232)">感染</text>
    <text transform="translate(326,23)" font-size="10" style="fill:rgb(174, 199, 232)">同性愛</text>
    <text transform="translate(145,296)" font-size="10" style="fill:rgb(31, 119, 180)">ニュース</text>
    <text transform="translate(175,310)" font-size="10" style="fill:rgb(127, 127, 127)">言う</text>
    <text transform="translate(526,217)" font-size="10" style="fill:rgb(196, 156, 148)">職場</text>
    <text transform="translate(95,11)" font-size="10" style="fill:rgb(199, 199, 199)">振る</text>
    <text transform="translate(52,210)" font-size="10" style="fill:rgb(214, 39, 40)">hiv</text>
    <text transform="translate(559,363)" font-size="10" style="fill:rgb(214, 39, 40)">過ち</text>
    <text transform="translate(506,61)" font-size="10" style="fill:rgb(255, 152, 150)">繰り返す</text>
    <text transform="translate(493,136)" font-size="10" style="fill:rgb(188, 189, 34)">返す</text>
    <text transform="translate(47,261)" font-size="10" style="fill:rgb(255, 127, 14)">会話</text>
    <text transform="translate(85,54) rotate(-90)" font-size="10" style="fill:rgb(196, 156, 148)">スン</text>
    <text transform="translate(193,308)" font-size="10" style="fill:rgb(219, 219, 141)">止まる</text>
    <text transform="translate(184,105)" font-size="10" style="fill:rgb(127, 127, 127)">仕方</text>
    <text transform="translate(7,122)" font-size="10" style="fill:rgb(199, 199, 199)">予防</text>
    <text transform="translate(152,129) rotate(-90)" font-size="10" style="fill:rgb(219, 219, 141)">外出</text>
    <text transform="translate(503,250)" font-size="10" style="fill:rgb(227, 119, 194)">ウォシュレット</text>
    <text transform="translate(449,187)" font-size="10" style="fill:rgb(255, 152, 150)">使う</text>
    <text transform="translate(351,352)" font-size="10" style="fill:rgb(23, 190, 207)">日本国</text>
    <text transform="translate(77,310)" font-size="10" style="fill:rgb(227, 119, 194)">特許庁</text>
    <text transform="translate(586,130)" font-size="10" style="fill:rgb(255, 187, 120)">検索</text>
    <text transform="translate(512,318)" font-size="10" style="fill:rgb(247, 182, 210)">結果</text>
    <text transform="translate(389,167)" font-size="10" style="fill:rgb(188, 189, 34)">合成</text>
    <text transform="translate(64,159)" font-size="10" style="fill:rgb(188, 189, 34)">キメラワクシニアウイルス</text>
    </svg>
    <!-- <h1>{{flag_word}}</h1> -->

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
        flag_cloud:0,
        flag_word:0,
        SelectedWord:''
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
        if(this.flag_cloud==0){
          this.flag_cloud=1;
        }else if(this.flag_cloud==1){
          this.flag_cloud=0;
        }
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