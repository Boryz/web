var app = new Vue({
  el: '#app',
  data: function(){
    return{
        userPick:null,
        randomPick:null,
      }
    },
  methods: {
      play(pick) {
        this.userPick= pick;
        const rand = [
          'rock',
          'paper',
          'scissors',
        ];
        const randR = Math.floor(Math.random() * rand.length);
        this.randomPick= rand[randR]
      }
   },
  computed: {
    computedPick: function () {
      return {
        'fa-hand-rock-o': this.userPick === 'rock',
        'fa-hand-paper-o': this.userPick === 'paper',
        'fa-hand-scissors-o': this.userPick === 'scissors',
        'fa-circle-o-notch fa-spin': this.userPick === null,
      }
    },
    resultPick: function () {
      return {
        'fa-hand-rock-o': this.randomPick === 'rock',
        'fa-hand-paper-o': this.randomPick === 'paper',
        'fa-hand-scissors-o': this.randomPick === 'scissors',
        'fa-circle-o-notch fa-spin': this.randomPick === null,
        }
    }
  }
})
var dApp = new Vue({
  el: '#dApp',
  data:{
    charSet:'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890+>?-$#%&*',
    originalMessage:'DISTORT',
    glitchedMessage:'DISTORT',
    limit:0
  },
  methods:{
    startDistortion: function (){
      window.ids = setInterval(() => {
        this.distortion();
      }, 100);
    },
    stopDistortion: function (){
     clearInterval(window.ids);
     this.glitchedMessage = this.originalMessage;
   },
   distortion: function () {
        if(this.limit >= 3){
          this.limit = 0;
          this.glitchedMessage = this.originalMessage;
        }
       const chars = this.glitchedMessage.split('');
       const rand = Math.floor(Math.random() * (chars.length));
       const randRep = Math.floor(Math.random() * (this.charSet.length));
       if(chars[rand] != this.charSet[randRep] && chars[rand] != ' '){
         chars[rand] = this.charSet[randRep];
       }
       this.glitchedMessage = chars.join('')
       this.limit += 1;
   }
  }
})
