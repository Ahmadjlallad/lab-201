let please = "Please Answer Yes or No"
let like = "Do you like video games?";
let kind = "What Kind Of Games Do You Like?";
let which = "What is Your Favourite Video Game?";
let impostors = "Are you the imposter from among us?";
let gg = "Do you say GGWP after match end, Yes or No?"
let ans_for_like = prompt(like);

while ((ans_for_like.toLowerCase()) != "yes") {

    if (ans_for_like.toLowerCase() === "no") {
        alert(impostors.toUpperCase());
    } else {
        alert(please);
    }

    ans_for_like = prompt(like);

}
if (ans_for_like.toLowerCase() === "yes") {
    alert("Welcome Aboard Captain")
}
document.getElementById("1").innerHTML = ans_for_like.toUpperCase();

kind_ans = prompt(kind);
alert(kind_ans + " looks like a fun type" + ", I Like Fps & MoBa");
document.getElementById("2").innerHTML = kind_ans + " looks like a fun type" + ", I Like Fps & MoBa";
which_ans = prompt(which);
alert(which_ans + " sounds fun" + ", My favourite is Apex Legends");
document.getElementById("3").innerHTML = which_ans + " sounds fun" + ", My favourite is Apex Legends";
gg_ans = prompt(gg)
if (gg_ans.toLowerCase() === "yes") {
    alert('WOW you are a good person');
    document.getElementById("4").innerHTML = 'WOW you are a good person';
}
else if (gg_ans.toLowerCase() === "no") {
    alert('Try it, it is good to be Kind');
    document.getElementById("4").innerHTML = 'Try it, it is good to be Kind';
}

alert('Nice Taste mate ' + 'your Favourite Game is ' + which_ans + ' & gender is ' + kind_ans + ' absolutely love it')