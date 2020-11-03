<template>
  <div :id="wildBenefit.id" :class="`${wildBenefit.id} benefit`">
    <div class="icon"></div>
    <h3>{{ wildBenefit.h3[this.lang()] }}</h3>
    <p>{{this.filterString(wildBenefit.p[this.lang()])}} <a v-if="wildBenefit.a" :href="wildBenefit.a.href"> {{ wildBenefit.a.lang[this.lang()] }}</a></p>
  </div>
</template>
<script>
export default{
  name:'benefit-item',
  props:['wildBenefit', 'lang'],
  data: function(){
    return {
      lang: function(){
        var userLanguage;
        if(typeof dataLayer !== 'undefined'){
          lang = dataLayer[0].userLanguage.toLowerCase()
        }else{
          userLanguage = "en-us"
        }
        return userLanguage
      },
      domain: window.location.hostname.replace('www.wildtangent',''),
      prices:{
          "localhost": "$9.99",
          ".com": "$9.99",            //usd
          ".eu": "8.56 €",            //eur
          ".de": "8.56 €",            //eur
          ".fr": "8.56 €",            //eur
          ".it": "8.56 €",            //eur
          ".es": "8.56 €",            //eur
          ".ca": "$13.31",            //cad
          ".co.uk": "£ 7.73",          //gbp
          ".mx": "$212.36",              //mxn
          ".com.br": "R$ 57.73",      //brl
          ".co.nz": "$15.12",      //nzd
          ".com.au": "$14.23",         //aud
          ".kr": "₩ 11370.77",             //krw
          ".sg": "S$ 13.65",               //sgd
          ".hk": "HK$ 77.46",            //hkd
          ".in":"₹ 744.67"                //inr
      },
      filterString: function(str){
        const regex = /\{0\}/gi;
        return str.replace(regex, this.prices[this.domain]);
      }
    }
  }
}
</script>
<style scoped lang="scss">
$black:#0d0d14;
div.benefit{
  font-size: 16px;
  h3{
    font-weight: bold;
    font-size:1.17em;
  }
  h3,p{
    text-align: center;
    color: $black;
    font-family: 'Open Sans', sans-serif;
  }
  p{
    font-size: .925em;
    line-height: 1.4em;
    margin: 1em 0;
    a{
      color: #2359bc;
      text-decoration: none;
    }
  }
}

.unlimitedPlay{
  .icon{
    background: url(assets/benefits-icons/unlimited-play-3.png) no-repeat;
    background-size:85%;
  }
}
.adFreeGaming{
  .icon{
    background: url(assets/benefits-icons/ad-free-gaming-2.png) no-repeat;
    background-size:70%;
  }
}
.rental{
  .icon{
    background: url(assets/benefits-icons/rental-to-purchace-2.png) no-repeat;
    background-size:75%;
  }
}
.purchaseDiscounts{
  .icon{
    background: url(assets/benefits-icons/discounts-2.png) no-repeat;
    background-size:63%;
  }
}
.freeGame{
  .icon{
    background: url(assets/benefits-icons/free-game.png) no-repeat;
    background-size:63%;
  }
}
.benefit .icon{
  margin: 0 auto;
  width:203px;
  height: 160px;
  background-position: center;
}
// @media only screen and (max-width: 1319px) {
// div.benefit{
//
//   }
// }
@media only screen and (max-width: 979px) {
  .benefit .icon{
    margin: 10px auto 0;
    width:150px;
    height: 118px;
    background-position: center;
  }
  div.benefit{
    h3{
      font-size: .9em;
    }
  }
}
@media only screen and (max-width: 767px) {
  .adFreeGaming{
    .icon{
      background-size:78%;
    }
  }
  div.benefit{
    h3{
      height: 12px;
      font-size: .9em;
    }
    p{
      font-size: .75em;
    }
  }
}
@media only screen and (max-width: 699px) {
  div.benefit{
    h3{
      font-size: 1em;
    }
  }
}
@media only screen and (max-width: 570px) {
  div.benefit{
    h3{
      height: 32px;
    }
  }
}
</style>
