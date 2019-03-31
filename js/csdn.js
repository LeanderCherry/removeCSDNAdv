document.addEventListener('DOMContentLoaded', function()
{
    var elements = document.getElementsByClassName("adsbygoogle");

    // alert(elements);
    console.log("elements=" + elements);
    console.log("elements[1]=" + elements[1]);

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        console.log(element.getAttribute("class"));
        element.parentNode.removeChild(element);
    }
});

var elements = document.getElementsByClassName("adsbygoogle");

// alert(elements);
console.log("elements=" + elements);
console.log("elements[1]=" + elements[1]);

for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    console.log(element.getAttribute("class"));
    element.parentNode.removeChild(element);
}

$("*[id^=kp_box_]").each(function () {
    let element = $(this).val();
    console.log(this.getAttribute("id"));
    this.parentElement.removeChild(this);
})
