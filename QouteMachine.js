

    
   var arryQuotes = [["Whatever the mind of man can conceive and believe, it can achieve. " ,"Napoleon Hill"],["Strive not to be a success, but rather to be of value." ,"Albert Enisten"],["Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. " ,"Rober Forest"],["I attribute my success to this: I never gave or took any excuse." ,"Florence Nightingale"],["Life is what happens to you while you’re busy making other plans." ,"John Lennon"],["Life is 10% what happens to me and 90% of how I react to it." ,"Charles Swindoll"],["The best time to plant a tree was 20 years ago. The second best time is now." ,"Chinese Proverb"],["Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover." ,"Mark Twain"]];
   var windowObjectReference;

 function changeQuote() {
       var randomNumber = Math.floor((Math.random() * arryQuotes.length) + 0);
       $('.saying').text(arryQuotes[randomNumber][0]);
       $('.Author-name').text(arryQuotes[randomNumber][1]);
   }
    
 function shareTwitter(){
        var currentQuote = document.getElementById("nowQuote").innerHTML;
        var currentAuthur = document.getElementById('nowAuthor').innerHTML;
     //   $('.shareBtn').attr('href','https://twitter.com/intent/tweet?text='+ "\""+currentQuote+"\" "+ "-"+currentAuthur);
        windowObjectReference = window.open('https://twitter.com/intent/tweet?text='+'"'+currentQuote+'"'+' '+"-"+currentAuthur);
    }
   
$(document).ready(function() {
      changeQuote();
   
    $('.quteBtn').on("click", function(){ changeQuote(); });
    
    $('.shareBtn').on("click", function(){ shareTwitter(); });
 
   }); 
  